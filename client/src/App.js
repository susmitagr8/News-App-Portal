import React, {
  Component
} from 'react';
import './App.css';
import {BrowserRouter as Router,Link} from 'react-router-dom'
import {Route,Switch} from 'react-router-dom'
import loginSuccess from './components/loginSuccess/loginSuccess'
import registerSuccess from './components/registerSuccess/registerSuccess'
import HomePage from './components/HomePage'
import TopNav from './shared-components/TopNav'
import leftNav from './shared-components/leftNav'
import Dashboard from './components/Dashboard'
import ChatDashboard from './components/chat/Chat'
class App extends Component {
  e = "Not healthy"
  
  // componentDidMount() {
  //   this.healthCheck();
  // }
  // componentWillMount(){
  //   this.state = {data: "Not healthy"}
  // }
  
  // healthCheck() {
  //   let options = {
  //     mode :'cors',
  //     method: 'GET',
  //     cache: 'no-cache',
  //     headers:{
  //       'content-type': 'application/json',
  //       'Accept': 'application/json'
  //     }
  // };
  //  fetch('http://localhost:8081/healthcheck',options).then(response => response.json())
  //   .then(data => {
  //     console.log(data)
  //     this.setState({data: "Healthy"})
  //     return data
  //   }).catch(error=> this.setState({data: "Not Healthy"}));
  // }

  render() {
    return ( 
      <div className = "App" >
      <Router>
      <Switch>
      <Route path="/Chat/:id" component={ChatDashboard}/>
      <Route path="/list/:id" component={Dashboard}/> 
      <Route path="/LoginSuccessful" component={loginSuccess}/>
      <Route path="/RegisterSuccessful" component={registerSuccess}/>
      <Route path="/Top" component={TopNav}/>
      <Route path="/Left" component={leftNav}/>
      <Route path="/Dashboard" component={Dashboard}/>
      <Route path="/" component={HomePage}/>
      </Switch>
      </Router>
      </div>
    );
  }
}

export default App;