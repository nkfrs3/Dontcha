import { csrfFetch } from "./csrf";

const SET_QUIZZES = 'genres/setQuizzes';
const ADD_QUIZ = 'quizzes/addQuiz'

const setQuizzes = (quizzes) => ({
  type: SET_QUIZZES,
  quizzes
});

const addQuiz = (quiz) => ({
  type: SET_QUIZZES,
  quiz
});

export const getQuizzes = () => async(dispatch) => {
  const data = await fetch('/api/quizzes');
  const quizzes = await data.json();
  dispatch(setQuizzes(quizzes))
  return;
}

export const postQuiz = (payload) => async(dispatch) => {
  const body = ""

  const response = await csrfFetch(`/api/quizzes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body
  });
  dispatch(addQuiz());

}

const initialState = {all: {}};

const reducer = (state = initialState, action) => {
  switch(action.type) {
      case SET_QUIZZES:
        const quizzes = action.quizzes;
        const prevState = {...state};
        quizzes.map( quiz => prevState.all[quiz.id] = quiz)
        return prevState
      case ADD_QUIZ:
        return state
      default:
         return state;
      }
    }

  export default reducer;
