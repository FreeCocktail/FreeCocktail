import React from 'react';
import styled from 'styled-components';
import { Button, Card, Divider } from 'semantic-ui-react';
import { theme } from '../../styles/theme';

const Body = styled.div`
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
    margin: '3rem auto auto auto',
  },
});

const RecipeLists = styled.div`
  width: 60rem;
  height: 70rem;
  margin: 5rem auto 1rem auto;
  grid-gap: 1.1rem;
  display: grid;
  align-content: stretch;
  justify-content: center;
  grid-template-columns: repeat(4, 1fr);
  @media ${theme.tablet} {
    width: 45rem;
    grid-template-columns: repeat(3, 1fr);
  }
  @media ${theme.mobile} {
    width: 22rem;
    margin: 3rem auto auto auto;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
    row-gap: 0.2rem;
  }
`;

const RecipeCards = styled(Card)({
  'height': '20rem',
  '>img': {
    width: '80%',
    height: '70%',
    margin: '1rem auto 0.25rem auto',
  },

  '&&&': {
    // ? Recipe card
    'width': '14rem',
    'marginTop': '0rem', //* 첫번째 카드만을 위한 속성
    '@media (max-width: 479px)': {
      width: '11rem',
      height: '15.71rem',
    },
  },

  //* RecipeDescription
  '>div': {
    'width': '80%',
    'height': '20%',
    'margin': '0.25rem auto 1rem auto',

    //* RecipeName & RecipeLikes
    '>div:nth-child(1)': {
      'display': 'grid',
      'height': '2rem',
      'gridTemplateColumns': '75% 25%',
      'margin': '0.5rem auto 0rem auto',
      'padding': '0.25rem',
      'color': 'black',
      'fontFamily': 'Gmarket Sans TTF',
      'fontSize': '0.9rem',

      '@media (max-width: 479px)': {
        fontSize: '0.8rem',
        margin: '0.15rem auto',
      },

      '&:hover': {
        cursor: 'pointer',
      },

      //* heart icon & likes
      '>div:nth-child(2)': {
        'color': 'white',
        'fontSize': '0.8rem',
        'WebkitTextStroke': '0.7px black',
        // 'background': 'red',

        '@media (max-width: 479px)': {
          fontSize: '0.5rem',
          margin: '0.05rem auto',
        },

        '&:hover': {
          color: '#CB77FF',
          cursor: 'pointer',
        },
      },
    },

    //* RecipeTags
    '>div:nth-child(2)': {
      'display': 'flex',
      'height': '40%',
      'margin': '0.25rem auto 1rem auto',

      //* Tags
      '>button': {
        'flex': '1 1 1',
        'margin': 'auto 0.14rem',
        'padding': '0.29rem',
        'borderRadius': '50px',
        'border': '1px solid #FFB000',
        'backgroundColor': '#FFDF00',
        'fontSize': '0.69rem',

        '@media (max-width: 479px)': {
          fontSize: '0.25rem',
          margin: 'auto 0.05rem',
          padding: '0.12rem',
        },

        '&: hover': {
          cursor: 'pointer',
          fontWeight: '600',
        },
      },
    },
  },
});

const TopButtonSection = styled.div`
  /* border: 1px solid orange; */
  position: fixed;
  width: 5rem;
  height: 5rem;
  top: 80rem;
  right: 8rem;
  text-align: right;
  @media ${theme.tablet} {
    /* width: 55rem; */
    right: 0.5rem;
    top: 80rem;
  }
  @media ${theme.mobile} {
    width: 5rem;
    height: 5rem;
    top: 50rem;
    right: 9.7rem;
    font-size: 10px;
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
  RecipeLists,
  RecipeCards,
  TopButtonSection,
};
