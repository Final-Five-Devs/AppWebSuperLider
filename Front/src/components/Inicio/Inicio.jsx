import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Lista} from '../../Data';
import Cards from "./Card";
import "../../Styles/amazon.css";

export const Inicio = ({ handleClick }) => {


    return (
        <>
             
             <section>
                {Lista.map((item) => (
                    <Cards key={item.id} item={item} handleClick={handleClick} />
                ))}

            </section>

            
            
        </>
    )

}


