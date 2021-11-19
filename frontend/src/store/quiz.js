import { csrfFetch } from "./csrf";

const SET_QUIZZES = 'genres/setQuizzes';
const ADD_QUIZ = 'quizzes/addQuiz'

const setQuizzes = (quizzes) => ({
  type: SET_QUIZZES,
  quizzes
});

const addQuiz = (quiz) => ({
  type: ADD_QUIZ,
  quiz
});

export const getQuizzes = () => async(dispatch) => {
  const data = await fetch('/api/quizzes');
  const quizzes = await data.json();
  dispatch(setQuizzes(quizzes))
  return;
}

export const postQuiz = (payload) => async(dispatch) => {

  const response = await csrfFetch(`/api/quizzes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload)
  });
  const res = await response.json()
  dispatch(addQuiz(res));
  return res;

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
        console.log(action.quiz)
        const quizId = action.quiz['id'];
        const prev = {...state};
        prev['all'][quizId] = action.quiz
        return prev
      default:
         return state;
      }
    }

  export default reducer;
