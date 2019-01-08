import React,{Component} from 'react';
import Axios from 'axios'
import NavBar from '../Components/Navbar';
import './BookCreate.css';


export default class BookCreate extends Component{
state={
    authors:[],
    judul: "",
    id_author: null
};

getauthor=()=>{
    Axios.get('https://api-demo.koding.sch.id/api/author/')
    .then((ress)=>{
        console.log(ress.data.data);
        this.setState({
            authors: ress.data.data
        })


    })
    .catch((err)=>{
        console.log(err)
    });
};
componentDidMount(){
    this.getauthor();
}

 simpandatabuku=()=>{
    if(this.state.id_author === null){
        return alert("author tidak boleh kosong")
    }

     Axios.post('https://api-demo.koding.sch.id/api/book/',{
         judul: this.state.judul,
         id_author: this.state.id_author
     })
     .then(()=>{
         alert("berhasil")
     })
     .catch(()=>{
         alert("gagal")
     })
 }

    handleChange=(e)=>{
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    render(){
        return(
            <div className="bookcreate">
            <NavBar/>
            <br/>
            <br/>
                <input id="judul" type="text" value={this.state.judul} onChange={this.handleChange} placeholder="judul"/>
                <select id="id_author" onChange={this.handleChange}>
                <option>Pilih buku:</option>
                {this.state.authors.map((value, index)=>{
                    return<option value={value.id}>{value.name}</option>
                     })}
                </select>

                <button onClick={()=>this.simpandatabuku()}>simpan</button>
            </div>
        )
    }
}