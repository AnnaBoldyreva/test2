import React, {Component} from 'react';
import './App.css';


function getRandomImageIndex(number) {
    return Math.floor(Math.random() * (number+1));
}

class MainItem extends Component {

    componentDidMount() {
        setInterval(() => {
            this.props.setCurrentActive(getRandomImageIndex(8))
        }, 1000)
    }

   photoClick = () => {
       this.props.increaseCounter()
   };


  render() {
      let divs = [1,2,3,4,5,6,7,8,9];
      let elm = divs.map((number) => <div onClick={this.photoClick} className="item"><img src='https://i.pinimg.com/originals/bf/ee/b8/bfeeb8f8530a27108daaa513a19e27bd.jpg' className={this.props.currentActive === number ? 'photo show' : 'photo'}/></div> )

      return (
        <div className="App">
            {elm}
        </div>
    );
  }
}

export default MainItem;
