import React from 'react';
import ReactDOM from 'react-dom';
import Login from './components/Login';
import Navbar from './components/Navbar';
import SignUp from './components/SignUp';
import Quiz from './components/Quiz';
import {BrowserRouter , Route } from 'react-router-dom'

class App extends React.Component {
 
    render(){
        return(
            <BrowserRouter>
                <div className='ui container'>
                    <Route path='/' component={Navbar} />
                    <Route path='/Login' component={Login} />
                    <Route path='/SignUp' component={SignUp} />
                    <Route path='/Quiz' component={Quiz} />
                </div>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(<App />,document.querySelector('#root')); 