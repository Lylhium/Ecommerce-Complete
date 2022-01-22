//style
import './App.css';
//import Components
import Footer from './components/footer/Footer';
import Maps from './components/Maps/maps';
//import Pages
import AppRouter from './AppRouter/AppRouter';
//context
import { CartProvider } from './Context/CartContext/CartContext';


function App() {
  return ( 
    <div className= "content">
      <CartProvider>
         <AppRouter/>
         <Maps/>
         <Footer/>
      </CartProvider>
    </div>
);
               }
export default App;
