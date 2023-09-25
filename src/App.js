import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homePage";
import BlogDetails from "./pages/blogDetails";
import BlogList from "./pages/blogList";
import Error from "./pages/404";
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route exact path ='/' element ={HomePage()}></Route>
          <Route exact path ='/:id' element ={BlogDetails()}></Route>
          <Route exact path ='/list' element ={BlogList()}></Route>
          <Route  path ='*' element ={Error()}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
