import React from 'react';
import {withRouter} from 'react-router-dom';

class Navbar extends React.Component{

    state = {
        loginButtonText : 'Login/Signup'
    }
    
        
    onLoginClick = () => {
        // this.setState({
        //     loginButtonText : 'Logout'
        // })  
        let path = 'Login';
        this.props.history.push(path)
    }
    onTakeQuiz = () => {
        let path = 'Quiz';
        this.props.history.push(path)
    }

    render(){
        return(
            <div className='ui small menu'>
                <a className='item' href='/'>
                    Home
                </a>
                <a className='item' >
                    Details
                </a>
                <a className='item quiz' onClick={this.onTakeQuiz}>
                    Take Quiz
                </a>
                <div className='right menu'>
                    <div className='item'>
                        <div className='ui primary button' onClick={this.onLoginClick}>
                            {this.state.loginButtonText}
                        </div>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default withRouter(Navbar);