import React, { useRef } from 'react';
import styled from 'styled-components';

import DropdownCountry from './DropdownCountry';
import DropdownAirport from './DropdownAirport';
import SearchImgDefault from '../../assets/img/btn_search_Default.svg';
import SearchImgHover from '../../assets/img/btn_search_hover.svg';


const Search = {
  TotalContainer: styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
  `,

  Container: styled.div`
    width: 77.4rem;
    border-radius: 1rem;
    box-shadow: 0rem 0rem 2rem 0.1rem rgba(0,0,0,0.5);
    display: flex;
    justify-content: space-between;
    align-items: center;
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
  const buttonRef = useRef();


  return (
    <Search.TotalContainer>
      <Search.Container>
        <Search.Dropdown>
          <DropdownCountry />
          <DropdownAirport />
        </Search.Dropdown>
        <Search.Button>
          <img
            src={SearchImgDefault}
            alt=""
            onMouseEnter={() => { buttonRef.current.src = SearchImgHover; }}
            onMouseLeave={() => { buttonRef.current.src = SearchImgDefault; }}
            ref={buttonRef}
          />
        </Search.Button>
      </Search.Container>
    </Search.TotalContainer>
  );
};

export default Searchbar;