const express = require('express')
const asyncHandler = require('express-async-handler');
// var Sequelize = require('sequelize');
const { question, answer, submittedAnswer } = require('../../db/models');

const router = express.Router();

router.get('/:id',
asyncHandler(async (req, res) => {
  const answers = await answer.findfindAll(
    {
      where: {
      quizId: parseInt(id)
    }})
    return res.json(answers)
  })
)

router.post('/',
asyncHandler(async (req, res) => {
  const {userId, questionId, correct, value} = req.body;
  const answer = await submittedAnswer.create({userId, questionId, correct, value})
  return res.json({})


  })
)
module.exports = router;
