import { Component } from "react";

class Message extends Component{
    componentDidMount(){
        console.log("Message Component Mounted");
        
    }
    componentWillUnmount(){
        console.log("Message Component UnMounted");
        
    }
    render(){
        return <h2>Hello ,I am a Message Component!</h2>
    }
    
}
class App extends Component{
    state = {show:true};

    toggleMessage = () =>{
        this.setState({show: !this.state.show})
    };
    render(){
        return(
            <div>
                <button onClick={this.toggleMessage}>Toogle Message</button>
                {this.state.show && <Message />}
            </div>
        )
    }
}