import React from 'react';
import styled from 'styled-components';
import { Button, Divider } from 'semantic-ui-react';
import { theme } from '../../styles/theme';

const Body = styled.div`
  scroll-behavior: smooth;
  min-height: 90vh;
  margin-top: 6.938rem;
  justify-content: center;
  padding: 0 30px 0 30px;
  @media ${theme.tablet} {
    margin-top: 8.938rem;
    padding: 0 20px 0 20px;
  }
  @media ${theme.mobile} {
    margin-top: 7.938rem;
    padding: 0 10px 0 10px;
  }
`;

const Category = styled.div`
  display: flex;
  max-width: 1200px;
  height: 5rem;
  margin: 10rem auto 1rem auto;
  @media ${theme.tablet} {
    width: inherit;
    height: 3rem;
  }
  @media ${theme.mobile} {
    width: 22rem;
    height: 2rem;
  }
`;

const CategoryButtons = styled(Button)({
  'width': '12rem',
  'height': '3rem',
  '&&&': {
    'zIndex': 2,
    'margin': 'auto',
    'borderRadius': '50px',
    'backgroundColor': '#ffffff',
    'border': '1.5px solid #494949',
    'color': '#494949',
    'fontSize': '16px',
    //* Responsive (tablet - mobile)
    '@media (min-width: 480px) and (max-width: 1023px)': {
      'width': '8rem',
      'fontSize': '13px',
      'whiteSpace': 'nowrap',
      '&&&:nth-child(4)': {
        fontSize: '11.5px',
      },
    },
    '@media (max-width: 479px)': {
      'width': '6.5rem',
      'fontSize': '5px',
      '&&&:nth-child(4)': {
        fontSize: '0.1px',
      },
    },
  },
  '&&&:hover': {
    backgroundColor: '#94FDD7',
  },
});

const CategoryDescription = styled.div`
  position: sticky;
  width: 40rem;
  height: 2rem;
  margin: 3rem auto auto auto;
  text-align: center;
  font-size: 18px;
  font-weight: 200;
  white-space: nowrap;

  @media ${theme.tablet} {
    width: 37rem;
  }
  @media ${theme.mobile} {
    width: 18rem;
    height: 1rem;
    font-size: 10px;
  }
`;

const Filter = styled.div`
  width: 37.5rem;
  height: 10rem;
  display: grid;
  align-content: stretch;
  justify-content: center;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
  margin: 3rem auto 5rem auto;

  @media ${theme.tablet} {
    width: 27rem;
    height: 3rem;
    margin: 2rem auto 10rem auto;
  }
  @media ${theme.mobile} {
    width: 18rem;
    height: 2.5rem;
    grid-template-columns: repeat(4, 1fr);
  }
`;

const FilterButtons = styled(Button)({
  'width': '8.5rem',
  'height': '3rem',
  '&&&': {
    'margin': 'auto',
    'zIndex': 2,
    'textAlign': 'center',
    'backgroundColor': '#ffffff',
    'border': '1.5px solid #494949',
    'borderRadius': '50px',
    'color': '#494949',
    'fontSize': '15px',
    '&&&:nth-child(7)': {
      fontSize: '14px',
      whiteSpace: 'pre',
    },

    '@media (min-width: 481px) and (max-width: 1023px)': {
      'width': '7rem',
      'fontSize': '13px',
      '&&&:nth-child(7)': {
        fontSize: '12px',
      },
    },
    '@media (max-width: 479px)': {
      'width': '5rem',
      'fontSize': '8px',
      '&&&:nth-child(3)': {
        fontSize: '6.5px',
      },
      '&&&:nth-child(4)': {
        fontSize: '6.5px',
      },
      '&&&:nth-child(7)': {
        fontSize: '3.5px',
        lineHeight: 1.2,
      },
    },
  },
  '&&&:nth-child(7)': {
    fontSize: '13px',
  },
  '&&&:hover': {
    color: '#ffffff',
    backgroundColor: '#CB77FF',
  },
});

const SectionDivider = styled(Divider)({
  'backgroundColor': '#C4C4C4',
  '&&&': {
    'margin': 'auto',
    '@media (min-width: 1024px)': {
      'width': '70rem',
      'fontSize': '13px',
      'whiteSpace': 'nowrap',
      '&&&:nth-child(4)': {
        fontSize: '11.5px',
      },
    },
  },
});

const CreatBtnSection = styled.div`
  position: fixed;
  width: 5rem;
  height: 5rem;
  top: 40rem;
  right: 5rem;

  @media ${theme.tablet} {
    right: 0.5rem;
    top: 20rem;
  }
  @media ${theme.mobile} {
    width: 3rem;
    height: 3rem;
    top: 20rem;
    right: 9.7rem;
    font-size: 10px;
  }
`;
const CreatBtn = styled.button`
  width: 3rem;
  height: 3rem;
  margin: 1rem;
  border: 1px solid #494949;
  border-radius: 100px;
  background-color: #dbfd7d;
  font-size: 2rem;
  font-family: Gmarket Sans TTF;
  color: #ffffff;
  -webkit-text-stroke: 1px #494949;

  &:hover {
    cursor: pointer;
    color: #ffffff;
    background-color: #cb77ff;
  }
`;

export {
  Body,
  Category,
  CategoryButtons,
  CategoryDescription,
  Filter,
  FilterButtons,
  SectionDivider,
  CreatBtnSection,
  CreatBtn,
};
