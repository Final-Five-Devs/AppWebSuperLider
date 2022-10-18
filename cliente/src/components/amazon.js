import React, { useEffect,  useState } from "react";
import axios from 'axios'
import Cards from "./card";
import "../styles/amazon.css";

const Amazon = ({ handleClick }) => {

    const [listaTotal, setlistaTotal] = useState([]);
    console.log(listaTotal)

    useEffect( () => {
        const traeTodo = async () => {
            const todo =  await axios.get('/api/traeinventario');
            console.log(todo)
            setlistaTotal(todo.data)
        } 
        traeTodo()
    },[])

  return (
    <section>
      {listaTotal.map((item) => (
        <Cards key={item.id} item={item} handleClick={handleClick} />
      ))}

    </section>
  );
};

export default Amazon;