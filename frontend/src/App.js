import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Route} from 'react-router-dom'
import {restoreUser} from './store/session'


function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
   dispatch(restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);


  return (
    <>

    </>
  );
}

export default App;
