import React from 'react';
import fire from '../firebase/firebase';
import Result from './Result';
import Loader from './Loader';
class QuizQuestions extends React.Component {
       state =  {
            Data : [],
            DataLength : '',
            iteration : 0,
            score : 0,
            Question : '',
            Option1 : '',
            Option2 : '',
            Option3 : '',
            Option4 : '',
            CorrectAnswer : '',
            buttonText : 'Next',
            isFinish : false ,
            isSelected : true,
            error : ''    
        }
        componentWillMount(){
            let database = fire.database().ref("/");
            database.once('value', snapshot => {
                this.setState({ 
                    Data :  snapshot.val()
                });
                this.setState({Question : Object.values(this.state.Data["Questions"])[this.state.iteration].question});
                this.setState({Option1 : Object.values(this.state.Data["Questions"])[this.state.iteration].option1});
                this.setState({Option2 : Object.values(this.state.Data["Questions"])[this.state.iteration].option2});
                this.setState({Option3 : Object.values(this.state.Data["Questions"])[this.state.iteration].option3});
                this.setState({Option4 : Object.values(this.state.Data["Questions"])[this.state.iteration].option4});
                this.setState({CorrectAnswer : Object.values(this.state.Data["Questions"])[this.state.iteration].correctAnswer});
                this.setState({
                    iteration : this.state.iteration + 1
                });

                // snapshot.forEach(childSnapshot => {
                //     let childKey = childSnapshot.key;
                //     let childData = (childSnapshot.val());
                //     let isReturn = false;
                    // console.log(childData)

                    // ...
                // });

            });
        }
        updateStates = () =>{
            if(this.state.iteration === 5){
                return ;
            }
                this.setState({Question : Object.values(this.state.Data["Questions"])[this.state.iteration].question});
                this.setState({Option1 : Object.values(this.state.Data["Questions"])[this.state.iteration].option1});
                this.setState({Option2 : Object.values(this.state.Data["Questions"])[this.state.iteration].option2});
                this.setState({Option3 : Object.values(this.state.Data["Questions"])[this.state.iteration].option3});
                this.setState({Option4 : Object.values(this.state.Data["Questions"])[this.state.iteration].option4});
                this.setState({CorrectAnswer : Object.values(this.state.Data["Questions"])[this.state.iteration].correctAnswer});
        }
        onNextClick = (event) => {
            event.preventDefault();
            // ('input[type=radio]').attr('checked',false);
            if(!document.querySelector('input[name="option"]:checked'))
                this.setState({
                    isSelected : false,
                    error : 'Please select any option'
                });
            if(document.querySelector('input[name="option"]:checked')){
                this.setState({
                    isSelected : true,
                });
                this.setState({
               iteration : this.state.iteration + 1
            });

            if(this.state.CorrectAnswer === document.querySelector('input[name="option"]:checked').value){
                 this.setState({
                    score : this.state.score + 1
                });
            }
            if(this.state.iteration === 4){
                this.setState({
                    buttonText : 'Finish' ,
                });
            }
         
            if(this.state.isFinish === 5){
                this.setState({
                    isFinish : true ,
                
                });
            }
            let radList = document.getElementsByName('option');
            for (let i = 0; i < radList.length; i++) {
            if(radList[i].checked) radList[i].checked = false;
            }
            this.updateStates();

            }
            
        }
    render(){
        return(
            <div>
                {!(this.state.Question)?<Loader />:
                <form className="ui bottom attached message">
                    { (this.state.iteration === 6)?<Result result = {this.state.score} total= {this.state.iteration - 1}/> :
                    <div className="ui form">
                        <div className="grouped fields " >
                            <b>Question {this.state.iteration}: {this.state.Question}</b>
                            <div className="field">
                            <div className="ui radio checkbox">
                                <input type="radio" name="option" value={this.state.Option1} />
                                <label>{this.state.Option1}</label>
                            </div>
                            </div>
                            <div className="field">
                            <div className="ui radio checkbox">
                                <input type="radio" name="option" value={this.state.Option2}/>
                                <label>{this.state.Option2}</label>
                            </div>
                            </div>
                            <div className="field">
                            <div className="ui radio checkbox">
                                <input type="radio" name="option" value={this.state.Option3}/>
                                <label>{this.state.Option3}</label>
                            </div>
                            </div>
                            <div className="field">
                            <div className="ui radio checkbox">
                                <input type="radio" name="option" value={this.state.Option4}/>
                                <label>{this.state.Option4}</label>
                            </div>
                                <div>
                                    <button style={{float : 'right'}} className="ui primary button" onClick={this.onNextClick}>{this.state.buttonText}</button>
                                </div>
                                <br/>
                            </div>
                        </div>
                    </div>}
                </form>}
                {
                    !(this.state.isSelected)?
                    <div className="ui bottom attached warning message">
                    {this.state.error}
                    </div>: <div></div>
                }
            </div>
        );
    }
}

export default QuizQuestions;