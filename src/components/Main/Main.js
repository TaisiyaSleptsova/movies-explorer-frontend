// import { Navigate } from "react-router-dom";
import AboutMe from "../AboutMe/AboutMe";
import AboutProject from "../AboutProject/AboutProject";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Promo from "../Promo/Promo";
import Techs from "../Techs/Techs";

export default function Main ({ loggedIn }) {
  return (
    <main>
      <Header 
        loggedIn={loggedIn}
      />
      <Promo/>
      <AboutProject/>
      <Techs/>
      <AboutMe/>
      <Footer/>    
    </main>
    // : <Navigate to={'/singin'} replace />
  )
}