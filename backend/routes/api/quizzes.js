const express = require('express')
const asyncHandler = require('express-async-handler');
var Sequelize = require('sequelize');
const { User, quiz, question, answer } = require('../../db/models');

const router = express.Router();

router.get('/',
asyncHandler(async (req, res) => {

  const quizzes = await quiz.findAll(
    {
      include: [
        {
        model: question, attributes: ['id']   },
        { model:User, attributes: ['username', 'profileIcon'] }]
    })

// attributes: {
//   include: [[Sequelize.fn("COUNT",
//   Sequelize.col ("question.id")),   "questionsCount"]]
//   },
// include: {model: question, through: {attributes: ["quiz.id"]}, required: false } ,
// group: ["quiz.id"]
  return res.json(quizzes)
  })
);

  router.post('/',
  asyncHandler(async (req, res) => {
  const {title, topic, userId} = req.body;

  const entry = await quiz.create({title, topic, userId})
  return res.json(entry);
   })
  )


router.get('/user/:id',
asyncHandler(async (req, res) => {
    const {id} = req.params;

  const quizzes = await quiz.findAll({
    where: {
      userId: id
    },
      include: {
        model: question,
        include: answer,
        },
        order: [["updatedAt", 'DESC']],
    })
    return res.json(quizzes)

  })
)


module.exports = router;
