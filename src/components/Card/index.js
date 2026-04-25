 import "./Card.css";
 const Card = ({title, par, lesson, i}) => {
    return <div className="Card"> 
    <h6>{title}</h6>
    <b>{i }</b>
    <p> {par} </p>
   {lesson > 20 && (i === 0 || i === 1) && <div> ileri düzey </div> }
    <button>devami</button>
     </div>
 }

 export default Card;