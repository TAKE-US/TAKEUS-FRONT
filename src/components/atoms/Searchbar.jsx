import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { getCountry, getSearchDogs } from "lib/api/sample";
import { DropdownCountry, DropdownAirport, Button } from "components";
import { ReactComponent as SearchImg } from "assets/icon/ic_search_white_24.svg";

const Search = {
  TotalContainer: styled.div``,

  Container: styled.div`
    background-color: ${({ theme }) => theme.color.white};
    width: 72.6rem;
    border-radius: 1rem;
    box-shadow: 0rem 0rem 2rem 0.1rem rgba(0, 0, 0, 0.05);
    display: flex;
    justify-content: center;
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
  const [currCountry, setCurrCountry] = useState("");
  const [currAirport, setCurrAirport] = useState("");
  const [currCity, setCurrCity] = useState("");
  const [country, setCountry] = useState([]);
  const [allAirport, setAllAirport] = useState("");

  useEffect(() => {
    (async () => {
      const data = await getCountry();
      setCountry(Object.keys(data).splice(1));
      setAllAirport(data);
      console.log(data);
    })();
  }, []);

  const searchHandler = async () => {
    console.log("click");
    if (currCity) {
      const data = await getSearchDogs(currCity);
      console.log(data[0]);
    }
  };

  return (
    <Search.TotalContainer>
      <Search.Container>
        <Search.Dropdown>
          <DropdownCountry currCountry={currCountry} setCurrCountry={setCurrCountry} country={country} />
          <DropdownAirport
            currCountry={currCountry}
            currAirport={currAirport}
            setCurrAirport={setCurrAirport}
            setCurrCity={setCurrCity}
            allAirport={allAirport}
          />
        </Search.Dropdown>
        <Search.Button onClick={searchHandler}>
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
