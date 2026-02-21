import Captainpic from './assets/captain_america.png'
import { useState } from 'react';
function Card({heroimage,heroname,herotext,realname,orgin,role,power,strength,weakness}) {

    const [flipped,setFlipped] = useState(false);

    return(
        <div 
        
            className ="card"
            onClick = {() => setFlipped(!flipped)}
            
        >

            <div className={`card_inner ${flipped ? "flipped" : ""}`}>

            
            <div className='card_front'>
            <img className ="card_image" src={heroimage} alt={heroname}>
            </img>
            <h2 className='hero_name'>{heroname}</h2>
            <p className='text'>{herotext}</p>
            </div>
           
                <div className ='card_back'>
                    <p><strong>Real Name:</strong>{realname}</p>
                    <p><strong>Orgin:</strong>{orgin}</p>
                    <p><strong>Role:</strong>{role}</p>
                    <p><strong>Power:</strong>{power}</p>
                    <p><strong>Strength:</strong>{strength}</p>
                    <p><strong>Weakness:</strong>{weakness}</p>
                </div>
            </div>

        </div>
    );
}

export default Card;