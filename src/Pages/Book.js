import React,{Component} from 'react';
import {Router, Switch} from 'react-router-dom';
import Axios from 'axios';
import Cards from '../Components/Card';
import NavBar from '../Components/Navbar';



export default class Book extends Component{
    state={
        book:[]
    };

    getdata=()=>{
        Axios.get("https://api-demo.koding.sch.id/api/book/")
        .then((ress)=>{
            console.log(ress.data.data);
            this.setState({
                book: ress.data.data
            })

        })
        .catch((err)=>{
            console.log(err)
        });
    };

    deleteBook=(id)=>{
        Axios.delete(`https://api-demo.koding.sch.id/api/book/${id}`)
        .then(res=>{
            this.getdata()
        })
        .catch(err=>{
            alert('Hapus Gagal')
        })
    }


    componentDidMount(){
        this.getdata();
    }
    render(){
        return(
             <div>
                 <NavBar/>
                {this.state.book.map((value, index)=>{
                    return<Cards judul={value.judul} deleteBook={this.deleteBook} id={value.id} author={value.author.name}/>
                     })}
            </div>
        );
    }
}