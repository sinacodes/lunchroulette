import React from 'react'
import styled from 'react-emotion'

import ImageOne from '../images/1.jpg'
import ImageTwo from '../images/2.jpg'

const StyledBackground = styled('div')`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: ${props => props.answer ? `url(${ImageTwo})` : `url(${ImageOne})`};
    background-size: contain;
    background-repeat: repeat;
    z-index: -1;
`;

const Background = (props) => (
  <StyledBackground  answer={props.answer}/>
);

export default Background
