import React from 'react'
import './Card.css';
import{Link} from 'react-router-dom';


const Cards =(props)=>{
    return(
        <center><div className="pql">
            <p>{props.judul}</p>
            <p>{props.author}</p>
            <br/>
            <button onClick={()=>props.deleteBook(props.id)}>Hapus</button>
            <Link to={`/book/edit/${props.id}`}><button>edit</button></Link>
        </div></center>
    )
}

export default Cards;