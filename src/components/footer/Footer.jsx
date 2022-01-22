//imports
import './footer.css';
//imgs
import whatsapp from '../../assets/whatsapp.png'
import instagram from '../../assets/instagram.png'
import facebook from '../../assets/facebook.png'

const Footer = () => (
 <div className="footer">
   <div className="footer-text">Seguinos en nuestras Redes Sociales!</div>
     <div className="footer-links">
      <ul>
          <li> <a className='whatsapp' href="https://web.whatsapp.com/"><img src={whatsapp} className='footer-icon' />  </a></li>
          <li> <a className='instagram' href="https://www.instagram.com/"><img src={instagram}  className='footer-icon' /></a></li>
          <li> <a className='facebook'href="https://www.facebook.com"><img src={facebook} className='footer-icon' /></a></li>
       </ul>
       <div className='footer-info'>  ©2022 Copyright: Agustin Pfarherr</div>
    </div>
 </div>
  );

export 
default  Footer;
