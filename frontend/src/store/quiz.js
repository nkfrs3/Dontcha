import { csrfFetch } from "./csrf";

const SET_QUIZZES = 'genres/setQuizzes';
const ADD_QUIZ = 'quizzes/addQuiz'
const SET_MINE = 'quizzes/setMine'
const DELETE_QUIZ = 'quizzes/delete'
const SET_THEIRS = 'quizzes/setTheirs'

const setQuizzes = (quizzes) => ({
  type: SET_QUIZZES,
  quizzes
});
const setMine = (quizzes) => ({
  type: SET_MINE,
  quizzes
})

const setTheirs = (quizzes) => ({
  type: SET_THEIRS,
  quizzes
})

const addQuiz = (quiz) => ({
  type: ADD_QUIZ,
  quiz
});

const afterDelete = (id) => ({
  type: DELETE_QUIZ,
  id
})

export const getQuizzes = () => async(dispatch) => {
  const data = await fetch('/api/quizzes');
  const quizzes = await data.json();
  dispatch(setQuizzes(quizzes))
  return;
}

export const getMyQuizzes = (id) => async(dispatch) => {
  const data = await fetch(`/api/quizzes/user/${id}`);

  if(data.ok){
    const quizzes = await data.json();
    dispatch(setMine(quizzes))
  }

}

export const getUserQuizzes = (id) => async(dispatch) => {
  const data = await fetch(`/api/quizzes/theirs/${id}`);

  if(data.ok){
    const quizzes = await data.json();
    dispatch(setTheirs(quizzes))
  }
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


export const deleteQuiz = (id) => async(dispatch) => {
  const response = await csrfFetch(`/api/quizzes/${id}`, {
    method: "DELETE"
  });
  if (response.ok){
    dispatch(afterDelete(id))
  }

}

const initialState = {all: {}, mine: {}, theirs: {}};

const reducer = (state = initialState, action) => {
  switch(action.type) {
      case SET_QUIZZES:
        const quizzes = action.quizzes;
        const prevState = {...state};
        quizzes.map( quiz => prevState.all[quiz.id] = quiz)
        return prevState
      case ADD_QUIZ:
        const quizId = action.quiz['id'];
        const prev = {...state};
        prev['all'][quizId] = action.quiz
        return prev
      case SET_MINE:
        const newOb = {...state}
        newOb.mine = action.quizzes
        return newOb;
        case SET_THEIRS:
          const newObj = {...state}
          newObj.theirs = action.quizzes
          return newObj;
      case DELETE_QUIZ:
        const c = {...state}
        const quizToDeleteIndex = c.mine.findIndex(quiz => quiz.id == action.id)
        if (quizToDeleteIndex !== -1){
         c.mine = c.mine.slice(0, quizToDeleteIndex).concat(c.mine.slice(quizToDeleteIndex + 1));
        }
        return c;

      default:
         return state;
      }
    }

  export default reducer;
