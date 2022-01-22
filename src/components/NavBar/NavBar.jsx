
import React, {useState,useContext} from 'react'
import Logo from '../../assets/Logo.png'
import './NavBar.css';
import  { Link } from 'react-router-dom'
//externo materialui
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
//externo fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCartPlus } from '@fortawesome/free-solid-svg-icons'
import 'animate.css'
//export 
import { CartContext } from '../../Context/CartContext/CartContext';


const NavBar = () => {

  const  [categories] = useState([
  {name:'Suplementos', 
  id: '1',
  category: '1'
  },
  {name:'Cosmetica', 
  id: '2',
  category: '2'
  },] )

  const [cart]= useContext(CartContext);

  const itemTotal = cart.reduce((acc,curr) => acc + curr.count,0);

return (

<AppBar className= "animate__animated animate__bounce" position="sticky"  style={{ background: 'transparent', boxShadow: 'none'}}>
      <Toolbar>
         <Typography variant="h6">
           <div className="CocoLogo">
           <Link to='/'> <img  src= {Logo} alt={'logoMain'}/> </Link>
           </div>
         </Typography>
              <ul className="Lista-NavBar">
                 <li><Link to='/' style={{ textDecoration: 'none',color:'white' }}>  <Button color="inherit">Home</Button></Link> </li>
           {/*     <div className='dropdown'> */}
           {/*     <li>*/} <Link to='/productos' style={{ textDecoration: 'none',color:'white'}}> <Button color="inherit">Productos</Button> </Link>
          {/*   <div className='dropdown-content'>   {categories.map ((category)=> {
             return  <Link to={`/category/${category.id}`} style={{ textDecoration: 'none',color:'white'}} > <Button className='boton-dropdown' color="inherit"> 
            {category.name}</Button></Link>}) } </div></Link> */}
        {/*      </li> 
               </div> */}
            <li><Link to='/preguntas' style={{ textDecoration: 'none',color:'white'}}> <Button color="inherit">Preguntas Frecuentes</Button></Link></li> 
            <li><Link to='/contacto' style={{ textDecoration: 'none',color:'white'}}> <Button color="inherit">Contacto</Button></Link></li> 
              </ul>
               <div className="cart-button">
              <Link to='/cart'style={{ textDecoration: 'none',color:'white'}}><span className='nmb-cart'>{itemTotal} </span> <FontAwesomeIcon icon={faCartPlus}/></Link>
               </div>
        </Toolbar>
 </AppBar>
      );
      }
        export default  NavBar;
