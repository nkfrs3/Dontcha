'use strict';
const { Validator } = require('sequelize');
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [3, 30],

      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 256]
      },
    },
    hashedPassword: {
      type: DataTypes.STRING.BINARY,
      allowNull: false,
      validate: {
        len: [60, 60]
      },
    },
    profileIcon: {
      type: DataTypes.STRING,
     },
  },
  {
    //must specify the scope when querying this model: User.scope('currentUser').findByPk(id)
    defaultScope: {
      attributes: {
        exclude: ['hashedPassword', 'email', 'createdAt', 'updatedAt'],
      },
    },
    scopes: {
      currentUser: {
        attributes: { exclude: ['hashedPassword'] },
      },
      loginUser: {
        attributes: {},
      },
    },

    },
  );
  User.associate = function(models) {
    // // associations can be defined here
    // const columnMapping = {
    //   through: 'Review',
    //   otherKey: 'shopId',
    //   foreignKey: 'userId'

    //  }
    //  const columnMappingCheckin = {
    //   through: 'Checkin',
    //   otherKey: 'shopId',
    //   foreignKey: 'userId'
    //  }
    User.hasMany(models.score, {foreignKey: "userId"})
    User.hasMany(models.quiz, {foreignKey: "userId", onDelete: 'cascade', hooks:true})
    User.hasMany(models.submittedAnswer, {foreignKey: "userId"})
    User.hasMany(models.review, {foreignKey: "userId"} )



    // User.belongsToMany(models.Shop, columnMapping );
    // User.hasMany(models.Review, {foreignKey: 'userId', onDelete: 'cascade', hooks:true})

    // // User.belongsToMany(models.Shop, columnMappingCheckin );
    // User.hasMany(models.Checkin, {foreignKey: 'userId', onDelete: 'cascade', hooks:true})
  };


  User.prototype.toSafeObject = function() { // remember, this cannot be an arrow function
    const { id, username, email } = this; // context will be the User instance
    return { id, username, email };
  };

  User.prototype.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.hashedPassword.toString());
   };

   User.getCurrentUserById = async function (id) {
    return await User.scope('currentUser').findByPk(id);
   };


   User.login = async function ({ credential, password }) {
    const { Op } = require('sequelize');
    const user = await User.scope('loginUser').findOne({
      where: {
        [Op.or]: {
          username: credential,
          email: credential,
        },
      },
    });
    if (user && user.validatePassword(password)) {
      return await User.scope('currentUser').findByPk(user.id);
    }
  };

  User.signup = async function ({ username, email, password }) {
    const hashedPassword = bcrypt.hashSync(password);
    const user = await User.create({
      username,
      email,
      hashedPassword,
    });
    return await User.scope('currentUser').findByPk(user.id);
  };


  return User;
};
