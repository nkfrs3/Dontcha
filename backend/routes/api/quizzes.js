const express = require('express')
const asyncHandler = require('express-async-handler');
var Sequelize = require('sequelize');
const { User, quiz, question, answer, score } = require('../../db/models');

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
  const {title, topic, userId, description} = req.body;

  if (description.length > 0){
    const entry = await quiz.create({title, topic, userId, description})
    return res.json(entry);
    }else {
    const entry = await quiz.create({title, topic, userId})
    return res.json(entry);
    }

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

//route to add a new score after a user has completed taking a quiz
router.post('/scores',
asyncHandler(async (req, res) => {
const {value, quizId, userId} = req.body;

const entry = await score.create({value, quizId, userId})
return res.json(entry);
 })
)
module.exports = router;
