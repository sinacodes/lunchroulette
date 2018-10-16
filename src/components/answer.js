import React from 'react'

import styled from 'react-emotion'
import { fadeinSink } from './animations'

const StyledAnswer = styled('div')`
  display: flex;
  margin-top: 15%;
  font-size: 16px;
  color: #AD1457;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${props => props.answer && `${fadeinSink} 1.8s ease`};
`;

const StyledInput = styled('div')`
    min-width: 50%;
    padding: 20px;
    background-color: #F5F5F5;
    box-shadow: 0 3px 10px 1px rgba(0, 0, 0, 0.30);
    margin: 5px 0;

    @media (max-width: 530px){
        min-width: 75%;
    }
`;

class Answer extends React.Component {
  componentDidMount() {
      var spazieren = ["Oh ja, ausgiebig.", "LOL nein.", "Eine kleine Runde.", "Mit Sicherheit nicht."];
      this.changeBackground();
    //   this.printAnswer(".input", this.props.duration);
      this.printAnswer(".walk", spazieren);
  };

  generateRandomNumber =  (min, max) => Math.floor(Math.random() * (max - min));

  // gets target element and fills in random winner output depending on the chosen array
  printAnswer = (target, array) => document.querySelector(target).innerHTML = array[this.generateRandomNumber(0, array.length)];
  
  changeBackground = () => {
    var body = document.getElementsByTagName("body")[0];
    body.className += "result";
  };
  
  render() {
    return (
        <StyledAnswer answer={this.props.duration}>
          <StyledInput></StyledInput>
          <StyledInput>
            <span>und spazieren? </span>
            <span className="walk"></span>
          </StyledInput>
        </StyledAnswer>
    );
  }
};

export default Answer;