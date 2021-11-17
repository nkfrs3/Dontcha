// import { csrfFetch } from "./csrf";

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
