import { useState } from "react";



function Card({ tour,removeHandler }) {
    const [readmore,setreadmore] = useState(true);
    const description = readmore ? tour.info.substring(0,100) : tour.info;


    return (
        <div>
            <div>
                <img src={tour.image} alt="img"></img>
            </div>
            <div>
                <div>
                    <p>{tour.name}</p>
                </div>
                <div>
                    <p>
                        {description+" "}
                        <span onClick={()=>{ setreadmore(!readmore) }}>{readmore?'Read More':'Show less'}</span>
                    </p>
                </div>
                <button onClick={()=> removeHandler(tour.id)}>Not Interest</button>
            </div>
        </div>
    );
}



export default Card;