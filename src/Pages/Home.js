import React,{Component} from 'react';
import Book from './Book';
import NavBar from '../Components/Navbar';
import './Home.css';


export default class Home extends Component{
    render(){
        return(
            <div className="awal"><NavBar/>
                <h1>Selamat Datang di MyBook</h1>
            </div>
        )
    }
}