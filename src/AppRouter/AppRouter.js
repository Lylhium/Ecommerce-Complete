//react imports
import React from "react";
import {BrowserRouter, Route , Switch} from 'react-router-dom'
//import pages
import Home from "../Pages/Home";
import Preguntas from "../Pages/Preguntas";
import Productos from "../Pages/Productos";
import Contacto from "../Pages/Contacto";
import NotFound from "../Pages/NotFound";
import ItemDetailPage from "../Pages/ItemDetailPage";
import ProductsFilter from "../components/ProductsFilter/ProductsFilter";
import Cart from '../Pages/Cart'
//import components
import NavBar from "../components/NavBar/NavBar";


//Context


export default function AppRouter(){
       return (
 <BrowserRouter>

   <NavBar/>
    
      <Switch>
       <Route exact path="/" component={Home}/>
       <Route path="/contacto" component={Contacto}/>
       <Route path="/productos" component={Productos}/>
       <Route path="/preguntas" component={Preguntas}/>
       <Route path="/ItemDetailPage/:productId" component={ItemDetailPage}/>
       <Route path="/cart" component={Cart}/>
       <Route path="/*" component={NotFound}/>
      </Switch>
  
 </BrowserRouter>

    )
}