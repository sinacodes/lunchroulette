import React from 'react'
import styled from 'react-emotion'

const StyledForm = styled('form')`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 16px;
`;

const StyledFormWrapper = styled('div')`
    margin-top: 50px;
`;

const StyledSpan = styled('span')`
    margin: 0;
    display: inline-block;
    position: relative;
    vertical-align: top;
    margin-left: 10px;
    margin-right: 10px;
    width: 85px;

    input[type="radio"] {
        display:none;
    }

    input[type="radio"] + label::before {
  transition: all 250ms cubic-bezier(.4,.25,.3,1);
  content: "";
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: white;
  border: 0px solid white;
  font-size: 0;
  position: absolute;
  bottom: 145%;
  left: 50%;
  transform: translate(-50%, 50%);
}

input[type="radio"] + label::after {
  transition: all 250ms cubic-bezier(.4,.25,.3,1);
  content: "";
  width: 0;
  height: 0;
  border-radius: 50%;
  background-color: white;
  position: absolute;
  bottom: 145%;
  left: 50%;
  transform: translate(-50%, 50%);
}

input[type="radio"]:checked + label::after {
  width: 15px;
  height: 15px;
}

input[type="radio"]:checked + label::before {
  background-color: transparent;
  width: 25px;
  height: 25px;
  border-width: 2px;
}
`;

const StyledButtonWrap = styled('div')`
    margin: 50px 0;
`;

const StyledButton = styled('button')`
  text-decoration: none;
  width: 150px;
  height: 150px;
  color: #AD1457;
  border: 1px solid #F5F5F5;
  border-radius: 50%;
  background-color: #F5F5F5;
  box-shadow: 0px 9px 16px 5px rgba(0,0,0,0.6);
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;

  &:hover {
    cursor: pointer;
  }
`;

class Formular extends React.Component {
  constructor(props){
    super(props);
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleClick= this.handleClick.bind(this);
    this.state = {
      selectedOption: 'medium'
    };
};

  //generates restaurant output depending on checked time span
  getDuration = () => {
    const short = ["Ede", "Stones"];
    const medium = [...short, "Coco Thai", "Atelierfrankfurt", "zur Insel", "Auf ins Dönerparadies", "Vapiano lol", "Tawarayaya", "Bun Bo", "Indian Curry House", "Quantum", "Soul Food Factory"];
    const long = [...medium, "Best Woscht in Town", "Aroydee", "Das Leben ist schön", "Frankfurter Küche", "Jamies Burger", "Oosten", "Himalaya-Laternchen"];
    
    if (document.getElementById("short").checked) {
      let duration = short
      return duration;
    }
    else if (document.getElementById("medium").checked) {
      let duration = medium;
      return duration;
    }
    else if (document.getElementById("long").checked) {
      let duration = long;
      return duration;
    }
  };

    handleClick(e) {
        const result = this.getDuration();
        this.props.handler(result);
    };

    handleOptionChange(e) {
        this.setState({
            selectedOption: e.currentTarget.value
        });
    };

  render() {
    return (
      <StyledForm>
        <StyledFormWrapper>
            <StyledSpan>
                <input type="radio" name="time" id="short" value="short" checked={this.state.selectedOption === 'short'} onChange={this.handleOptionChange}  />
                <label htmlFor="short">asapst weiter&shy;arbeiten</label>
            </StyledSpan>
            <StyledSpan>
                <input type="radio" name="time" id="medium" value="medium" checked={this.state.selectedOption === 'medium'} onChange={this.handleOptionChange} />
                <label htmlFor="medium">normal, business as usual</label>
            </StyledSpan>
            <StyledSpan>
                <input type="radio" name="time" id="long" value="long" checked={this.state.selectedOption === 'long'} onChange={this.handleOptionChange}  />
                <label htmlFor="long">mal entspannt abloungen</label>
            </StyledSpan>
        </StyledFormWrapper>
        <StyledButtonWrap>
          <StyledButton type="button" onClick={this.handleClick} value="Submit">Jetzt unbedingt<br />HIER KLICKEN</StyledButton>
        </StyledButtonWrap>
      </StyledForm>
    );
  }
};

export default Formular;