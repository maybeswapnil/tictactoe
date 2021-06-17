import './App.css';
import React, {Component} from 'react';
import $ from 'jquery';
import PostOppoData from './OpponentAuthentication';
import setPoints from './setPoints';


class MainGame extends Component {
    constructor({myID, opponentID}) {
        console.log(opponentID);
        super({myID, opponentID})
        this.state = {
            myID:myID,
            opponentID:opponentID,
            opponentName:"",
            myName:"",
            opponentPoints:"1000000000",
            scoreArray: ['#one','#two','#three','#four','#five','#six','#seven','#eight','#nine'],
            myPoints: "1000000000",
            win: true
        }
        this.box1 = this.box1.bind(this);
        this.box2 = this.box2.bind(this);
        this.box3 = this.box3.bind(this);
        this.box4 = this.box4.bind(this);
        this.box5 = this.box5.bind(this);
        this.box6 = this.box6.bind(this);
        this.box7 = this.box7.bind(this);
        this.box8 = this.box8.bind(this);
        this.box9 = this.box9.bind(this);

        this.boxo = this.boxo.bind(this);
        
        this.update = this.update.bind(this);
        this.score = this.score.bind(this);

        this.handleWin = this.handleWin.bind(this);
    } 

    handleWin() {
        this.setState({win: false});
    }

    componentDidMount() {

        setPoints(this.state.opponentID, 1000000000).then((result) => {
            console.log("initialized")
        });

        PostOppoData("getOpponentDetails", this.state.opponentID).then((result) => {
            let responseJson = result;
            this.setState({opponentName:responseJson.uname})
            console.log(responseJson)
            console.log(this.state.opponentName)
          });
          PostOppoData("getOpponentDetails", this.state.myID).then((result) => {
            let responseJson = result;
            this.setState({myName:responseJson.uname})
            console.log(responseJson)
            console.log(this.state.myName)
          });

          var timer = setInterval(
              this.score 
        , 5000);
    }

    score() {
        PostOppoData("getOpponentDetails", this.state.opponentID).then((result) => {
            let responseJson = result;
            this.setState({opponentPoints:responseJson.points+""})
            console.log(responseJson)
            console.log(this.state.opponentPoints)
            var opponentPointsArray = this.state.opponentPoints.split("");
            console.log(opponentPointsArray);
            for(var i = 1;i<10;i++) {
                if(opponentPointsArray[i]=='1') {
                   this.boxo(this.state.scoreArray[i-1])
                    console.log(this.state.scoreArray[i-1] + "yeeeeeeeeeee");
                }
            }
          });   
          PostOppoData("getOpponentDetails", this.state.myID).then((result) => {
            let responseJson = result;
            this.setState({myPoints:responseJson.points + ""})
            console.log(responseJson)
            console.log(this.state.myName)
            if(this.state.myPoints==="1111000000" || this.state.myPoints==="1000111000" || this.state.myPoints==="1000000111" || this.state.myPoints==="1100100001" || this.state.myPoints==="1001010100") {
                this.handleWin();
            }
          });       
    }

    update(j) {
        var opoArray = this.state.myPoints.split("");
        opoArray[j] = "1";
        this.setState({myPoints:opoArray.join("")});
        var l = opoArray.join("");
        setPoints(this.state.myID, parseInt(l)).then((result) => {
            console.log("updated in backend")
        });
        console.log("here is some" + l);
    }

    box1() {
        $('#one').append("<div class='x'>X</div>");
        console.log("box" + this.state.myPoints);
        this.update(1);
        console.log("box" + this.state.myPoints);
    }
    box2() {
        $('#two').append("<div class='x'>X</div>");
        this.update(2);
        console.log("box");
    }
    box3() {
        $('#three').append("<div class='x'>X</div>");
        console.log("box");
        this.update(3);
    }
    box4() {
        $('#four').append("<div class='x'>X</div>");
        console.log("box");
        this.update(4);
    }
    box5() {
        $('#five').append("<div class='x'>X</div>");
        console.log("box");
        this.update(5);
    }
    box6() {
        $('#six').append("<div class='x'>X</div>");
        console.log("box");
        this.update(6);
    }
    box7() {
        $('#seven').append("<div class='x'>X</div>");
        console.log("box");
        this.update(7);
    }
    box8() {
        $('#eight').append("<div class='x'>X</div>");
        console.log("box");
        this.update(8);
    }
    box9() {
        $('#nine').append("<div class='x'>X</div>");
        console.log("box");
        this.update(9);
    }

    boxo(num) {
        $(num).append("<div class='o'>O</div>");
        console.log("box");
    }
   

    render() {
        if(this.state.win) {
            return(
                <div>
                    <div className='flex'>
                        
                        <div className='p1'>{this.state.myName}(You): X</div>
                      
                        <div className='p2'>{this.state.opponentName}: O</div>
                        </div>
                        <div className='grid'>
                            <div className='space' id='one' onClick={this.box1}></div>
                            <div className='space' id='two'onClick={this.box2}></div>
                            <div className='space' id='three'onClick={this.box3}></div>
                            <div className='space' id='four'onClick={this.box4}></div>
                            <div className='space' id='five'onClick={this.box5}></div>
                            <div className='space' id='six'onClick={this.box6}></div>
                            <div className='space' id='seven'onClick={this.box7}></div>
                            <div className='space' id='eight'onClick={this.box8}></div>
                            <div className='space' id='nine'onClick={this.box9}></div>
                        </div> 
    
                        <div className='wrapper'>
                    <button className='reset'>please go easy, aws servers are slow as a banana slug</button>
                    </div>
                </div>
            );
        } else {
            return(
                <div className="App">
                    <h1 id="loginheader">You win</h1>
                </div>
            );
        }
    }
}

export default MainGame;