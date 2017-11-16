import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import $ from 'jquery'; 


class Login extends React.Component {
constructor(props){
  super(props);

  this.state={
      username: '',
      password: ''
    }
 }

handleLogin(event){
  console.log("-- handleLogin --");

  var headers = {'Content-Type': 'application/x-www-form-urlencoded'}

  var payload  = { "username": "wb", "password": "123" };

  axios.post('http://localhost:4444/users/login', payload, headers)
   .then((result) => {
      console.log("login result: " + JSON.stringify(result) );
  })
  .catch((err) => {
      console.log("login err: " + err);
  })

}

render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
          <AppBar
             title="Login"
           />
           <TextField
             hintText="Enter your Username"
             floatingLabelText="Username"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
             <TextField
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleLogin(event)}/>
         </div>
         </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
 margin: 15,
};
export default Login;