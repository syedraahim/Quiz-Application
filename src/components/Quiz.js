import React from 'react';
import QuizQuestion from './QuizQuestions';
import {withRouter} from 'react-router-dom';
class Quiz extends React.Component {



    onQuizClick = () => {
        let path = 'Login';
        this.props.history.push(path)
    }

    render(){
        return(
            <div>
                {/*<Navbar isLogin={true}/>*/}
                {
                    !(localStorage.getItem('isLogin')) ? 
                    <div className="ui warning message" style={{textAlign:'center'}}>
                        <div className="header">
                            You must Login before you can do that!
                        </div>
                        Visit Login page, then try again
                    </div> 
                    
                    
                    : <QuizQuestion/>

                }
            </div>
        );
    }
}

export default withRouter(Quiz);