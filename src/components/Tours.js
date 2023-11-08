import Card from "./Card";



function Tours({tours,removeHandler}){

    return(
        <div>
           {
             tours.map((tour)=>{
                return <Card key={tour.id} removeHandler={removeHandler} tour={tour} />
             })
           }
        </div>
    );
}


export default Tours;