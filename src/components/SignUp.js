import React from 'react';
import fire from '../firebase/firebase';
import {withRouter} from 'react-router-dom';

class SignUp extends React.Component{

    state = {
        email : '',
        password : '',
        error : ''
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then(cred => {
            let path = 'Home';
            this.props.history.push(path)
        }).catch(error => {
            var errorMessage = error.message;
            console.log(errorMessage,'signUperror');
            this.setState({error : errorMessage})
            // ...
        });
        
    }

    render(){
        return(
            <div>
                <div className='ui center aligned header'>
                    <h1>SignUp Page</h1>
                </div>
                <form className='ui form' onSubmit={this.onFormSubmit}>
                    <div className="ui segment ">
                        <div className="">
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
                                <input type="submit" className='ui button' value='SignUp'/>
                            </div>
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

export default withRouter(SignUp);