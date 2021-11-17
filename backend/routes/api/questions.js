const express = require('express')
const asyncHandler = require('express-async-handler');
// var Sequelize = require('sequelize');
const { question } = require('../../db/models');

const router = express.Router();


router.get('/:id',
asyncHandler(async (req, res) => {

  const {id} = req.params;

  const questions = await question.findAll(
    {
      where: {
      quizId: parseInt(id)
    }})
    return res.json(questions)
  })
)

module.exports = router;
