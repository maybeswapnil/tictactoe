import './App.css';
import React, {Component} from 'react';
import PostData from './Authenticate';
import PostOppoData from './OpponentAuthentication';
import MainGame from './MainGame';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      uname:"123",
      upass:"123",
      status: false,
      name:"",
      error:true,
      opponent:false,
      opponentName:"",
      oppoError:true,
      opponentID:""
    }
    this.login = this.login.bind(this);
    this.opponent = this.opponent.bind(this);
    this.handleChangeUname = this.handleChangeUname.bind(this);
    this.handleChangeUpass = this.handleChangeUpass.bind(this);
    this.handleChangeOppo = this.handleChangeOppo.bind(this);
  }

  login() {
    PostData("getDetails", this.state.uname, this.state.upass, "upass").then((result) => {
      let responseJson = result;
      this.setState({status:responseJson.status})
      this.setState({opponentName:responseJson.uname})
      console.log(responseJson)
      console.log(this.state.opponentName)
    });

   
    
    if(!this.state.status) {
      this.setState({error:false})
    }
  
  }
  opponent() {
    PostOppoData("getOpponentDetails", this.state.opponentID).then((result) => {
      let responseJson = result;
      this.setState({opponent:responseJson.status})
      this.setState({opponentName:responseJson.uname})
      console.log(responseJson)
      console.log(this.state.opponentName)
    });

    if(!this.state.opponent) {
      this.setState({oppoError:false})
    }
  }

  handleChangeUname(e) {
    this.setState({uname:e.target.value})
   
  }
  handleChangeUpass(e) {
    this.setState({upass:e.target.value})
    
  }
  handleChangeOppo(e) {
    this.setState({opponentID:e.target.value})
   
  }
  render() {
    if(!this.state.status) {
        return (
          <div className="App">
            <h1 id="loginheader">Login.</h1>
            <input type="text" name="uname" id="loginbox" placeholder="Enter ID" onChange={this.handleChangeUname}/>
            <br />
            <br />
            <input type="password" name="upass" id="loginbox" placeholder="Enter Password" onChange={this.handleChangeUpass}/>
            {!this.state.error? <h1 id="loginerror">wrong pass!</h1>:<h1></h1>}
            
            <input type="submit" className="loginbutton" id="loginbutton" value="Submit" onClick={this.login}/>
          </div>
        );
    } else if(this.state.opponent) {
      console.log("hello");
      return (
        <div>

          <h1 id="loginheader" className="maingame game">tic tac toe</h1>
          <MainGame myID={this.state.uname} opponentID={this.state.opponentID}/>

        </div>
      ); 
    }else {
      return (
        <div className="App">
          
          <h1 id="opponentheader">Welcome {this.state.name},  select opponent.</h1>
          <input type="text" name="uname" id="loginbox" placeholder="Enter ID" onChange={this.handleChangeOppo}/>
          {!this.state.oppoError? <h1 id="loginerror">wrong id!</h1>:<h1></h1>}
          <br/>
          
          <input type="submit" className="loginbutton" id="loginbutton" value="Submit" onClick={this.opponent}/>
        </div>
      );  
    }
  }
  
}

export default App;
