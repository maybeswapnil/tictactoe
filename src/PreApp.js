import './App.css';
import React, {Component} from 'react';
import PostData from './Authenticate';
import setDetails from './setDetails';
import {TweenMax,TimelineLite, Power3} from 'gsap';
import App from './App';
import plane from './plane.png';

class PreApp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      uname:"123",
      upass:"123",
      upassre:"123",
      status: false,
      name:"",
      error:true,
      Id:0,
      bug: false
    };

    this.logon = this.logon.bind(this);
    this.handleChangeUname = this.handleChangeUname.bind(this);
    this.handleChangeUpass = this.handleChangeUpass.bind(this);
    this.handleChangeUpassRe = this.handleChangeUpassRe.bind(this);
  }
  logon() {
      if(this.state.upass == this.state.upassre) {
        setDetails(this.state.uname, this.state.upass).then((result) => {
                let responseJson = result;
                this.setState({Id:responseJson.id})
                console.log(responseJson)
                this.setState({uname:""})
                this.setState({upass:""})

            });
      } else { 
          this.setState({bug: true})
      }
  }
  
  handleChangeUname(e) {
    this.setState({uname:e.target.value})
   
  }
  handleChangeUpass(e) {
    this.setState({upass:e.target.value})
  }
  handleChangeUpassRe(e) {
    this.setState({upassre:e.target.value})
  }
  render() {
        return (
          <div className="container">

              
              <section className="one">

                    <App />
              </section>
                   
              <section className="two">
                    <div className="App">
                            <h1 id="logonheader" className="logonheader">Logon.</h1>
                            <input type="text" name="uname" id="loginbox" placeholder="Enter Name" onChange={this.handleChangeUname}/>
                            <br />
                            <br />
                            <input type="password" name="upass" id="loginbox" placeholder="Enter Password" onChange={this.handleChangeUpass}/>
                            <br />
                            <br />
                            <input type="password" name="upass" id="loginbox" placeholder="Re-Enter Password" onChange={this.handleChangeUpassRe}/>
                            {(this.state.Id!=0)? <h1 id="loginerror">{this.state.Id} ID generated for you, Please remember it.</h1>:<h1></h1>}
                            {this.state.bug? <h1 id="loginerror">please provide same passwords</h1>:<h1></h1>}

                            <input type="submit" className="logonbutton" id="loginbutton" value="Submit" onClick={this.logon}/>
                        </div>
              </section>
              <section className="three">
                    <h1 id="despheader" className="logonheader">:{")"}</h1>
                    <pre id="text"><span id="gt">{"<"}</span>tictactoe:chemo<span id="gt">{">"}</span></pre>
                    <pre id="text">  <span id="gt">{"<"}</span>madeUsing id{"="}<span id="var">{"\"2weeks\""}</span><span id="gt">{">"}</span></pre>
                    <pre id="text">    <span id="gt">{"<"}</span>React JS: Frontend Framework <span id="gt">{"/>"}</span></pre>
                    <pre id="text">    <span id="gt">{"<"}</span>Spring Boot: Backend Framework <span id="gt">{"/>"}</span></pre>
                    <pre id="text">    <span id="gt">{"<"}</span>AWS EC2: Backend Deployemnt Env <span id="gt">{"/>"}</span></pre>
                    <pre id="text">  <span id="gt">{"</"}</span>madeUsing<span id="gt">{">"}</span></pre>
                    <pre id="text">  <span id="gt">{"<"}</span>songs id{"="}<span id="var">{"\"spotify\""}</span><span id="gt">{">"}</span></pre>
                    <pre id="text">    <span id="gt">{"<"}</span>Potions: Dave Wave <span id="gt">{"/>"}</span></pre>
                    <pre id="text">    <span id="gt">{"<"}</span>Coffee Breath: Sofia Mills <span id="gt">{"/>"}</span></pre>
                    <pre id="text">    <span id="gt">{"<"}</span>Paul: Cave Town <span id="gt">{"/>"}</span></pre>
                    <pre id="text">  <span id="gt">{"</"}</span>songs<span id="gt">{">"}</span></pre>
                    <pre id="text"><span id="gt">{"</"}</span>tictactoe:chemo<span id="gt">{">"}</span></pre>
              </section>
          </div>
        );
        }
  
}

export default PreApp;
