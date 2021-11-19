import { csrfFetch } from "./csrf";

const SET_QUESTIONS = 'questions/setQuestions';

const setQuestions = (questions) => ({
  type: SET_QUESTIONS,
  questions
});


export const getQuestions = (quizId) => async(dispatch) => {
  const data = await fetch(`/api/questions/${quizId}`);
  const questions = await data.json();
  dispatch(setQuestions(questions))
  return;
}

export const postQuestions= (quiz, questions) => async(dispatch) => {

  console.log(questions, "!!!!")
  const payload = { questions };

  const data = await csrfFetch(`/api/questions/${quiz.id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload)
      });
      if (data.ok){
        const json = await data.json()
        dispatch(setQuestions(json));
      }
      return;
}





const initialState = {};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_QUESTIONS:
      const newState = {...state}
      newState[action.questions[0].quizId] = action.questions;
      return newState;

      default:
      return state;

  }
}

export default reducer;
