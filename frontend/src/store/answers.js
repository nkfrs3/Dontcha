import { csrfFetch } from "./csrf";


// const addAnswer = (answer) => ({
//   type: ADD,
//   quiz
// });

export const postAnswer = (userId, questionId, correct, value) => async(dispatch) => {
  console.log(userId, questionId, correct);

  const response = await csrfFetch(`/api/answers`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({userId, questionId, correct, value})
  });
  const res = await response.json()
  // dispatch(addAnswer(res));
  return;

}

export const postScore = (value, quizId, userId) => async(dispatch) => {
  console.log(value, quizId, userId);

  const response = await csrfFetch(`/api/quizzes/scores`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({value, quizId, userId})
  });
  const res = await response.json()
  // dispatch(addScore(res));
  return;

}
