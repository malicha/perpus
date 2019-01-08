import React,{Component} from 'react';
import Axios from 'axios'
import NavBar from '../Components/Navbar';
import {Redirect} from 'react-router-dom'


export default class BookEdit extends Component{
state={
    authors:[],
    judul: "",
    id_author: 0,
    isEdit: false
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

    editBook=()=>{
     Axios.put(`https://api-demo.koding.sch.id/api/book/${this.props.match.params.id}`,{
         judul: this.state.judul,
         id_author: this.state.id_author
     })
     .then(()=>{
         this.setState({
            isEdit: true
         })
         
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
            <div>
            <NavBar/>
            {this.state.isEdit===true && (<Redirect to="/book"/>)}
            <h1>Edit Penulis</h1>
            <br/>
            <br/>
                <input id="judul" type="text" value={this.state.judul} onChange={this.handleChange} placeholder="judul"/>
                <select id="id_author" onChange={this.handleChange}>
                {this.state.authors.map((value, index)=>{
                    return<option value={value.id}>{value.name}</option>
                     })}
                </select>

                <button onClick={()=>this.editBook()}>simpan</button>
            </div>
        )
    }
}