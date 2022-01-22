//imports
import React, { useEffect } from "react";
import '../AboutUsPage/AboutUs.css'

export default function AboutUs() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
      <div className="Contenedor">
        <img className='pfp' src="../assets/pfp.jpg" alt='pfp'/>
       <div className="main-title">Mi  nombre es Agustin! Soy el creador de Coco Light.</div>
       <div className="subtitulo"> Coco Light nace en el 2021 con la idea de poder empezar un emprendimiento con mis familiares.
         Mi tienda Coco Light surgio con el proposito de poder ofrecer los mejores productos de Cosmetica
        Estamos en proceso de crecimiento. Yo mismo me encargo de los mails,pedidos y atencion al publico.
       </div>
        <img className='local' src="../assets/local.jpg"alt='local'/>
       <div className="subtitulo">Nuestro Antiguo Local fue cerrado debido al COVID.</div>
      </div> 
    )  }