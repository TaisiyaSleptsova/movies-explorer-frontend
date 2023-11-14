import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import { Route, Routes, useNavigate } from 'react-router-dom';
import Movies from "../Movies/Movies";
import Profile from "../Profile/Profile";
import NotFound from "../NotFound/NotFound";
import Register from "../Register/Register";
import Login from "../Login/Login";


function App() {

  const navigate = useNavigate()

  return (

  <Routes>

    <Route path="/" 
      element = {
        <>
        <Header/>
        <Main/>      
        <Footer/>
        </>
      }
    />

    <Route path="/movies"
      element = {
        <>
          <Header/>
          <Movies/>
          <Footer/>
        </>
      }
    />

    <Route path="/saved-movies"
      element = {
        <>
          <Header/>
          <Movies/>
          <Footer/>
        </>
      }
    />

    <Route path="/profile"
      element = {
        <>
          <Header/>
          <Profile/>
        </>
      }
    />

    <Route path="/*"
      element = {
        <NotFound/>
      }
    />

    <Route path="/signin"
      element = {
        <Register/>
      }
    />

    <Route path="/signup"
      element = {
        <Login/>
      }
    />

  </Routes>
  );
}

export default App;
