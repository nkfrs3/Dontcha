import { csrfFetch } from "./csrf";

const SET_QUIZZES = 'genres/setQuizzes';


const setQuizzes = (quizzes) => ({
  type: SET_QUIZZES,
  quizzes
});

export const getQuizzes = () => async(dispatch) => {
  const data = await fetch('/api/quizzes');
  const quizzes = await data.json();
  dispatch(setQuizzes(quizzes))
  return;
}


const initialState = {all: {}};

const reducer = (state = initialState, action) => {
  switch(action.type) {
      case SET_QUIZZES:
        const quizzes = action.quizzes;
        const prevState = {...state};
        quizzes.map( quiz => prevState.all[quiz.id] = quiz)
        return prevState
      default:
         return state;
      }
    }

  export default reducer;
