import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import {restoreUser} from './store/session'
import Navigation from "./components/Navigation";
import Quizzes from './components/Quizzes'
import Footer from "./components/Navigation/Footer";
import Quiz from "./components/Quizzes/Quiz";
import SplashPage from "./components/SplashPage"
import CreateQuiz from "./components/Quizzes/CreateQuiz";
import Profile from "./components/Profile";

function App () {
  const [isLoaded, setIsLoaded] = useState(false);
  const dispatch = useDispatch();
  const user  = useSelector(state => state.session.user)
  useEffect(() => {
   dispatch(restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);


  return (

    <BrowserRouter>
    <div id="page-container" >
    <div id ="content-wrap">
     <Navigation />
     {!user &&
      <SplashPage />
     }
     {user &&
      <Switch>
      <Route exact path = "/quizzes">
        <Quizzes />
      </Route>
      <Route exact path ="/quizzes/:id">
        <Quiz />
      </Route>
      <Route exact path ="/create">
        <CreateQuiz />
      </Route>
      <Route exact path ="/profile/:id">
        <Profile />
      </Route>
      </ Switch>
      }

      </div>
      <Footer />
      </div>
    </ BrowserRouter>

  );
}

export default App;
