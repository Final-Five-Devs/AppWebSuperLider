
import { useEffect, useState } from 'react';
//import {Lista} from '../../Data';
import Cards from "./Card";
import "../../Styles/amazon.css";




export const Inicio = ({handleClick}) => {
    const [Lista, setLista] = useState([])

    useEffect(()=>{
      if (Lista=="") { 
          fetch('/api/productos')
              .then((response) => response.json())
              .then((data) => {
                  // console.log('EStamos en total productos:')
                  //console.log(data)
                  console.log('hola desde Total productos')
                  let { productos } = data
                  //console.log(productos)
                  setLista([...productos])
                  // console.log(Lista)
              }, []);
  
                      }
                  }
  )
  console.log(Lista)
     
    return (
        <>
             
             <section>
                {Lista.map((item) => (
                    <Cards key={item._id} item={item} handleClick={handleClick} />
                ))}

            </section>

            
            
        </>
    )

}


