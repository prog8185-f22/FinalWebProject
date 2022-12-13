import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Home } from './Components/Home';
import { Login } from './Components/Login';
import { Signup } from './Components/Signup';
import { AddProducts} from './Components/AddProducts'
import { NotFound } from './Components/NotFound'
import { Cart } from './Components/Cart';
import ProductDetail from './Components/ProductDetail';
import { createContext, useState } from 'react';
import ReactSwitch from "react-switch";
import "./App.css";

export const ThemeContext = createContext(null);


export const App = () =>
{
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return(
<ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div id={theme}>
      <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
    <BrowserRouter>
      <Routes>
      
      <Route exact path="/" element = {<Home/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/add-products" element={<AddProducts/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/productDetail" element={<ProductDetail/>}/>
      <Route path='*' element={<NotFound />}/>
     
      </Routes>
   </BrowserRouter>
   </div>
    </ThemeContext.Provider>
   
  )
}

export default App;
