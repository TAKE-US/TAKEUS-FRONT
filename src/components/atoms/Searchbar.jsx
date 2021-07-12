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
    width: 77.4rem;
    border-radius: 1rem;
    box-shadow: 0rem 0rem 2rem 0.1rem rgba(0,0,0,0.05);
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
  `,

  Dropdown: styled.div`
    width: 64rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `,

  Button: styled.button`
    border: none;
    background-color: ${({ theme }) => theme.color.white};

    img {
      width: 100%;
      height: 100%;
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
          <Button primary font="button_middle" padding="1.9rem">
            <span>검색</span>
            <SearchImg />
          </Button>
        </Search.Button>
      </Search.Container>
    </Search.TotalContainer>
  );
};

export default Searchbar;