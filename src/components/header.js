import React from 'react'
import styled from 'react-emotion'

const StyledHeader = styled('header')`
  height: 180px;
  padding: 20px;
`;

const StyledHeadline = styled('h1')`
  font-size: 42px;
  margin: 10px 0 0 0;
  border-bottom: 1px solid #F5F5F5;
`;

const StyledSubline = styled('h2')`
  font-weight: 300;
  font-size: 15px;
  margin-top: 10px;
  text-transform: uppercase;
  font-family: 'Roboto', sans-serif;
  letter-spacing: 3px;
`;

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <StyledHeadline>{siteTitle}</StyledHeadline>
    <StyledSubline>Fooden ist die wichtigste Mahlzeit des Tages.</StyledSubline>
  </StyledHeader>
);

export default Header
