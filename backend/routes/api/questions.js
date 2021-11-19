const express = require('express')
const asyncHandler = require('express-async-handler');
// var Sequelize = require('sequelize');
const { question, answer } = require('../../db/models');

const router = express.Router();


router.get('/:id',
asyncHandler(async (req, res) => {

  const {id} = req.params;

  const questions = await question.findAll({
      where: {
      quizId: parseInt(id)}
        })
    return res.json(questions)
  })
)


router.post('/:id',
asyncHandler(async (req, res) => {

  const {id} = req.params;
  const {questions} = req.body;
  console.log(questions);

  const questionIds = [];
  const promises = [];
  const data = {};

  const addQuizzes = async(quiz) => {

    const returned = await question.create(quiz)
    questionIds.push(returned.dataValues.id)
    // console.log(questionIds)
    return returned;
  }

  const mappedQs = questions.map( q => {
       const promise =  addQuizzes({prompt: q.prompt, quizId: id, type: q.type})
        promises.push(promise)
      });


  const addAnswers = async(ans) => {
    const returned = await answer.create(ans)
    return

  }


  Promise.all(promises).then((values) => {
    questions.map((question, j) => question.answers.map((ans) => {
    { addAnswers({value: ans.value, correct:ans.correct, questionId: questionIds[j] }) }
    }))
  })
  return res.json({});

})
)



module.exports = router;
