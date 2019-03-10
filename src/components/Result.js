import React from 'react';

class Result extends React.Component{
    render(){
        return(
            <div className="ui centered card">
                <div className="">
                    {this.props.result > Math.floor(this.props.total/2)?<h1 style={{color : 'Green', textAlign : 'center'}}>Congratulations!<br /> Passed</h1> : <h1 style={{color : 'Red', textAlign : 'center'}}>Sorry! <br />You are failed</h1>}
                </div>
                <div className="content">
                    <h2 className="header centered" style = {{textAlign : 'center'}}>{Math.floor(this.props.result/this.props.total * 100 )}{ " %"} </h2>
                    {localStorage.removeItem('isLogin')}

                </div>
            </div>
        );
    }
}

export default Result;