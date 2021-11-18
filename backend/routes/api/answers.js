const express = require('express')
const asyncHandler = require('express-async-handler');
// var Sequelize = require('sequelize');
const { question, answer } = require('../../db/models');

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


module.exports = router;
