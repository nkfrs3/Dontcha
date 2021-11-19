const express = require('express')
const asyncHandler = require('express-async-handler');
var Sequelize = require('sequelize');
const { User, quiz, question } = require('../../db/models');

const router = express.Router();

router.get('/',
asyncHandler(async (req, res) => {

  const quizzes = await quiz.findAll(
    {
      include: [
        {
        model: question, attributes: ['id']   },
        { model:User, attributes: ['username'] }]
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
const {} = req.body;


})
)


module.exports = router;
