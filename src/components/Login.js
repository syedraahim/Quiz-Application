import React from 'react';
import fire from '../firebase/firebase';
import {withRouter} from 'react-router-dom';



class Login extends React.Component {
    state = {
        email : '',
        password : '',
        isLogin : false,
        error : ''
    }

    onLoginCLick = (event) =>{
        event.preventDefault();
            fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(cred=> {
                this.setState({isLogin : true});
                localStorage.setItem('isLogin' , true);
                let path = 'Quiz';
                this.props.history.push(path)
            }).catch(error => {
                var errorMessage = error.message;
                this.setState({
                    error : errorMessage
                });
                // ...
            });
                                       


    }
    onSignUpClick = () => {
        let path = 'SignUp';
        this.props.history.push(path)
    }
    render(){
        return (
            <div className = 'ui container'> 
                <div className='ui center aligned header'>
                    <h1>Login/SignUp</h1>
                </div>
                <form onSubmit={this.onLoginCLick}>
                    <div className="ui placeholder segment">
                        <div className='ui two column very ralaxed stackable grid'>
                            <div className='column'>
                                <div className='ui form'>
                                    <div className='field'>
                                        <label>Email</label>
                                        <div className='ui left icon input'>
                                            <input 
                                                type="email" 
                                                placeholder='Email'
                                                onChange={e=> this.setState({email : e.target.value})}
                                            />
                                            <i className='user icon'></i>
                                        </div>
                                    </div>
                                    <div className='field'>
                                        <label>Password</label>
                                        <div className='ui left icon input'>
                                            <input 
                                                type="password" 
                                                className='password'
                                                onChange={e => this.setState({password : e.target.value})}
                                            />
                                            <i className='lock icon'></i>
                                        </div>
                                    </div>

                                    <div className='login button'>
                                        <input
                                            type = 'submit' 
                                            value = 'Login'
                                            className = 'ui blue submit button'
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='middle aligned column'>
                                <div className='ui big button' onClick={this.onSignUpClick}>
                                <i className="signup icon"></i>
                                 <span >Signup</span>
                                
                                </div>
                            </div>
                        </div>
                        <div className = 'ui vertical divider'>
                            Or
                        </div>
                    </div>
                </form>
                {
                    (this.state.error)?
                    <div className="ui bottom attached warning message">
                    {this.state.error}
                 </div>: <div></div>
                }
                
            </div>
        );
    
    }

}

export default withRouter(Login);
/*
import React from 'react';
import fire from '../firebase/firebase';
class  Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email : props.email,
            password : props.password
        };
    }

    onFormSubmit = event =>{
        event.preventDefault();
        console.log(this.state.email);
        console.log(this.state.password);
        // // fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then(cred => {
        // //     console.log(cred);
        // // })
        // fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(cred=> {
        //     console.log(cred)
        // }).catch(function(error) {
        // var errorCode = error.code;
        // var errorMessage = error.message;
        // console.log(errorMessage,'error');
        // // ...
        // });
    }
    



    render(){
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <div className="ui inverted segment">
                        <div className="ui inverted form">
                                <div className="field">
                                    <label>Email</label>
                                    <input 
                                        placeholder="Your Email" 
                                        type="email" 
                                        onChange={e => this.setState({email :e.target.value})}
                                        />
                                </div>
                                <div className="field">
                                    <label>Password</label>
                                    <input 
                                        placeholder="Password" 
                                        type="password" 
                                        onChange={e => this.setState({password : e.target.value})}
                                    />
                                </div>

                            <div className="ui submit button">
                                <input type="submit" className='ui button' />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        ); 
    
    }

}

export default Login;*/