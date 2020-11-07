import React from 'react';
import logo from './logo.svg';
import './App.css';

import Lifecycles from './lifecycles.component';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      showChild: true,
      text: '',
      counter: 45
    };
  }
  handleClick = ()=>{
    this.setState(
      (prevState,prevProps) => {
      return {counter:prevState.counter+1}
    },
    ()=>console.log(this.state.counter)
    )
  }
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
          {this.state.counter}
          </p>
          <button
            onClick={() =>
              this.setState(state => ({
                showChild: !state.showChild
              }))
            }
          >
            Toggle Lifecycles
          </button>
          <button
            onClick={this.handleClick
            }
          >
            Update Text
          </button>
          {this.state.showChild ? <Lifecycles text={this.state.text} /> : null}
        </header>
      </div>
    );
  }
}

export default App;
