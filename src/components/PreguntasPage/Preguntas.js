import React, { useEffect } from "react";
import '../PreguntasPage/PreguntasPage.css'
export default function PreguntasPage() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <div className="Contenedor-Questions">
        <div className='text'>
           <div className='img-preguntas'>
           <img className="img-preg" src="../../assets/preguntasfrecuentes.png" alt='imagen preguntas' />
           </div>
           <div className='title-1'>¿Qué formas de pago puedo aprovechar para realizar mi compra?</div>  
           <div className='title-2'>Disponemos de los siguientes medios de pago  y 3 cuotas sin interes con las tarjetas bancarias.</div>   
            <div className='img-preguntas-2'>
           <img className="img-tarj" src="../../assets/tarjetas.PNG" alt='imagen preguntas' />
           <div className='title-3'>Transferencia Bancaria: 5% de descuento. </div>   
           <div className='title-1'>¿Cómo se realizan los envíos?</div>  
           <div className='title-3'>Trabajamos con: nuestro pripio reparto para Zona Norte Y CABA. Si sos de GBA podes recibir por MOTO o por CORREO. 
                                 Los envios al interior del país los realizamos por Correo Argentino  y OCA, con opcion de envio a sucursal o a domicilio.
                                 Averiguar si tu sucursal cercana esta abierta y entregando pedidos. </div>   
            <div className='title-1'>¿Cuánto tarda en llegar el pedido?</div>   
            <div className='title-3'>El tiempo de entrega dependerá del tipo de envío seleccionado y la zona. Al momento de comprar te dice los días aproximados.</div>                  
        </div>
        </div>
        </div>
        )  };