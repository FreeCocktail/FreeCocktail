import React from 'react';
import styled from 'styled-components';

const TopButton = styled.button`
  width: 3rem;
  height: 3rem;
  margin: 1rem;
  border: none;
  border-radius: 100px;
  background-image: linear-gradient(
    to top,
    #f800ad,
    #ff2f7c,
    #ff7449,
    #ffb20e,
    #ffe800
  );
  font-size: 20px;
  font-family: Gmarket Sans TTF;
  color: #ffffff;
  -webkit-text-stroke: 0.4px black;

  &:hover {
    cursor: pointer;
  }
`;

export { TopButton };
