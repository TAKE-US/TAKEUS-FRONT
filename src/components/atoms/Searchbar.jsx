import React, { useState } from 'react';
import styled from 'styled-components';

import { DropdownCountry, DropdownAirport, Button } from 'components';
import { ReactComponent as SearchImg } from 'assets/icon/ic_search_white_24.svg';

const Search = {
  TotalContainer: styled.div`
    width: 100%;
  `,

  Container: styled.div`
    background-color: ${({ theme }) => theme.color.white};
    width: 72.6rem;
    border-radius: 1rem;
    box-shadow: 0rem 0rem 2rem 0.1rem rgba(0,0,0,0.05);
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;

    .text {
      margin-right: 0.3rem;
    }
  `,

  Dropdown: styled.div`
    width: 64rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `,

  Button: styled.div`
    width: 9.4rem;
    height: 6.2rem;
    background-color: ${({ theme }) => theme.color.primary};
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
    &:hover {
      background-color: ${({ theme }) => theme.color.primary_light};
    }
  `,
};

const Searchbar = () => {
  const [currCountry, setCurrCountry] = useState('');
  const [currAirport, setCurrAirport] = useState('');


  return (
    <Search.TotalContainer>
      <Search.Container>
        <Search.Dropdown>
          <DropdownCountry currCountry={currCountry} setCurrCountry={setCurrCountry} />
          <DropdownAirport currCountry={currCountry} currAirport={currAirport} setCurrAirport={setCurrAirport} />
        </Search.Dropdown>
        <Search.Button>
          <Button primary font="button_middle" padding="1.9rem 1.5rem 1.9rem 1.4rem">
            <span className="text">검색</span>
            <SearchImg />
          </Button>
        </Search.Button>
      </Search.Container>
    </Search.TotalContainer>
  );
};

export default Searchbar;