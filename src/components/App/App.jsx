import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import { Route, Routes } from 'react-router-dom';
import Movies from "../Movies/Movies";
import Profile from "../Profile/Profile";
import NotFound from "../NotFound/NotFound";
import Register from "../Register/Register";
import Login from "../Login/Login";
import { useEffect, useState } from "react";
import mainApi from '../utils/MainApi.js';
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import CurrentUserContext from "../contexts/CurrentUserContext";
import SavedMovies from "../SavedMovies/SavedMovies";
import Preloader from "../Preloader/Preloader";

function App() {

  const [currentUser, setCurrentUser] = useState({})
  const [savedMovies, setSavedMovies] = useState([])

  const [loggedIn, setloggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const [userToken, setUserToken] = useState(false)

  function handleInLoggedin () {
    setloggedIn(false)
  }

  function handleLoggedin () {
    setloggedIn(true)
  }

  function handleInLoading () {
    setIsLoading(false)
  }

  function handleLoading () {
    setIsLoading(true)
  }

  function newMoviasList (data) {
    setSavedMovies(data)
  }

  useEffect(() => {
    if (localStorage.jwt) {
      Promise.all([mainApi.getUserInfo(localStorage.jwt), mainApi.getMovies(localStorage.jwt)])
        .then(([profileData, moviesDate]) => {
          setCurrentUser(profileData)
          setSavedMovies(moviesDate)
          setloggedIn(true);
          setUserToken(true)
        })
        .catch((err) => {console.log(`Ошибка при получении данных с сервера: ${err}`)
          localStorage.clear()
        })
    } else {
      setloggedIn(false)
      localStorage.clear()
      setUserToken(true)      
    }
  }, [loggedIn])



  return (
    <>
    { !userToken ? <Preloader/> : 
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route path="/" 
            element = {
            <>
              <Main
                loggedIn={loggedIn}
              />
            </>
            }
          />

          <Route path="/movies"
            element = {
              <>
                <Header
                  loggedIn={loggedIn}
                />
                <ProtectedRoute 
                  element={Movies}              
                  savedMovies={savedMovies}
                  loggedIn={loggedIn}
                  handleLoading={handleLoading}
                  handleInLoading={handleInLoading}
                  isLoading={isLoading}
                  setSavedMovies={setSavedMovies}
                  onFavorite={false}
                />
                <Footer/>
              </>
            }
          />

          <Route path="/saved-movies"
            element = {
              <>
                <Header
                  loggedIn={loggedIn}
                />
                <ProtectedRoute 
                  element={SavedMovies}              
                  savedMovies={savedMovies}
                  loggedIn={loggedIn}
                  onFavorite={true}
                  newMoviasList={newMoviasList}
                />
                <Footer/>
              </>
            }
          />

          <Route path="/profile"
            element = {
                <ProtectedRoute
                  element={Profile}
                  handleInLoggedin={handleInLoggedin}
                  loggedIn={loggedIn}
                  setCurrentUser={setCurrentUser}
                  handleLoggedin={handleLoggedin}
                  handleInLoading={handleInLoading}
                  handleLoading={handleLoading}
                  isLoading={isLoading}
                />
            }
          />

          <Route path="/*"
            element = {
              <NotFound/>
            }
          />

          <Route path="/signup"
            element = {
              <Register
              handleInLoggedin={handleInLoggedin}
              handleLoggedin={handleLoggedin}
              handleInLoading={handleInLoading}
              handleLoading={handleLoading}
              isLoading={isLoading}
              />
            }
          />

          <Route path="/signin"
            element = {
              <Login
              handleLoggedin={handleLoggedin}
              handleInLoading={handleInLoading}
              handleLoading={handleLoading}
              isLoading={isLoading}
              />
            }
          />

        </Routes>
      </CurrentUserContext.Provider>
    }
    </>
  );
}

export default App;
