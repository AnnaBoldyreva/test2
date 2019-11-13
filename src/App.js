import React, {Component} from 'react';
import './App.css';
import MainItem from "./MainItem";

class App extends Component {
    state = {
        counter: 0,
        currentActiveId: 8
    };

    setCurrentActiveId = (id) => {
        this.setState({currentActiveId: id })
    };

    increaseCounter = () => {
        this.setState({counter: this.state.counter + 1 })
    };



  render() {
    return (
        <div className="App">
            <div className="wrapper">
            <MainItem currentActive={this.state.currentActiveId} setCurrentActive={this.setCurrentActiveId} increaseCounter={this.increaseCounter}/>
            </div>
            <div className="counter">
                {this.state.counter}
            </div>


        </div>
    );
  }
}

export default App;
