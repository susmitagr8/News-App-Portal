import  React, {
    Component
  } from 'react'
import Buttons from '../shared-components/Buttons/Buttons'
import TextField from '../shared-components/TextField/TextField'
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
class HomePage extends React.Component{
    state={
        Login : false,
        Register : false,
        gotoReg : false,
        gotolog : false,
        userName: "",
        password: ""
      }
    RegisterClick=()=>{   
        const register=true
        const login=false
        this.setState({Register:register})
        this.setState({Login:login})
      }
      LoginClick=()=>{
        const register=false
        const login = true
        this.setState({Register:register})
        this.setState({Login:login})
      }
      RegisterSubmit=()=>{
          this.state.gotoReg=true;
          this.state.gotolog=false;
      }
      LoginSubmit=()=>{
        this.state.gotoReg=false;
        this.state.gotolog=true;
      }
      handleUserIdChange=(e) =>{
        this.setState({userName: e.target.value});
    }
    handlePasswordChange=(e) =>{
      this.setState({password: e.target.value});
  }
  submitCred = (e) => {
    e.preventDefault()
    fetch('http://127.0.0.1:8081/get-token', {
      method: 'post',
      body : JSON.stringify({
       "userName": this.state.userName,
       "password": this.state.password
    })}).then((res) => {
      debugger
      if (!res.ok){
        throw new Error
      }
      return res.json()
  }).then((res) => {
    debugger
console.log(res.token)
sessionStorage.setItem('auth', 'Bearer ' + res.token)
sessionStorage.setItem('userName', this.state.userName)
 this.props.history.push('/Top/Dash-Sec')
  }).catch((err) => {
   console.log(err)
   alert(err)
  })
  }
      render() {

        let decision=null
        
        if(this.state.Login)
        {
            decision=<form onSubmit={(e) => this.submitCred(e)}>
              <div>
              <h6>User Name</h6>
              <input type="text" onChange={this.handleUserIdChange}/>
              </div>
              <div>
              <h6>Password</h6>
              <input type="password" onChange={this.handlePasswordChange}/>
              </div>
              <button>Submit</button>
              </form>
          }
          else if(this.state.Register)
          {
            decision=<div>
              <TextField data = "Name"/>
              <TextField data = "Email ID"/>
              <TextField data = "Preferred User ID"/>
              <TextField data = "Password"/>
              <TextField data = "Confirm Password"/>
              <Link to ="/RegisterSuccessful">Submit</Link>

            </div>
          }
          if(this.state.gotoReg)
              return <Redirect to = '/RegisterSuccessful'/>
          return (
            <div>
            <div class= "jumbotron">
            <h1 class="display-2"><kbd>The News App</kbd></h1>
            <p class="display-4">Portal for News</p>
          </div>
            <Buttons data = "Login" clicked={this.LoginClick}></Buttons>
            <Buttons data = "Register" clicked={this.RegisterClick}></Buttons>
            {decision}
          </div>
          );
        }
       
}
export default HomePage;