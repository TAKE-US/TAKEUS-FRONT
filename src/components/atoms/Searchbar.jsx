import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { getCountry, getSearchDogs } from "lib/api/sample";
import { DropdownCountry, DropdownAirport, Button } from "components";
import { ReactComponent as SearchImg } from "assets/icon/ic_search_white_24.svg";
import { connect } from "react-redux";
import { setDogs } from "redux/actions";
import { useLocation, useHistory } from "react-router";

const mapDispatchToProps = dispatch => {
  return {
    setDogs: dog => dispatch(setDogs(dog)),
  };
};

const Search = {
  Container: styled.div`
    background-color: ${({ theme }) => theme.color.white};
    width: 72.6rem;
    border-radius: 1rem;
    box-shadow: 0rem 0rem 2rem 0.1rem rgba(0, 0, 0, 0.05);
    display: flex;
    
    width: 72.6rem;
    height: 6.2rem;
    margin: 0 auto;
    background-color: ${({ theme }) => theme.color.white};
    box-shadow: 0rem 0rem 2rem 0.1rem rgba(0, 0, 0, 0.05);
    border-radius: 1rem;

    & > button {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }

    .dropdown {
      margin: 0 2.6rem;

      &__country {
        width: 24.2rem;
      }

      &__airport {
        position: relative;
        flex: 1;
        &:before {
          position: absolute;
          content: '';
          top: 0;
          left: -2.6rem;
          height: 3.6rem;
          margin: 1.3rem 0;
          border-right: solid 1px ${({ theme }) => theme.color.gray1};
        }
      }
    }
  `,

  Dropdown: styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    height: 100%;
    border: solid 1px;
  `,
};

const Searchbar = ({ setDogs }) => {
  const [currCountry, setCurrCountry] = useState("");
  const [currAirport, setCurrAirport] = useState("");
  const [currCity, setCurrCity] = useState("");
  const [country, setCountry] = useState([]);
  const [allAirport, setAllAirport] = useState("");
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    (async () => {
      try {
        const data = await getCountry();
        console.warn(data);

        setCountry(Object.keys(data).splice(1));
        setAllAirport(data);
      } catch (e) {
        // TODO
        // error 처리 필요!
      }
    })();
  }, []);

  const searchHandler = async () => {
    if (currCity) {
      const data = await getSearchDogs(currCity);
      console.log(data[0]);
      setDogs(data[0]);
      if (location.pathname === "/") {
        history.push("/dogSearch");
      }
    }
  };

  return (
    <>
      <Search.Container>
        <div className="dropdown dropdown__country">
          <DropdownCountry currCountry={currCountry} setCurrCountry={setCurrCountry} country={country} />
        </div>
        <div className="dropdown dropdown__airport">
          <DropdownAirport
            currCountry={currCountry}
            currAirport={currAirport}
            setCurrAirport={setCurrAirport}
            setCurrCity={setCurrCity}
            allAirport={allAirport}
          />
        </div>
        <div onClick={searchHandler}>
          <Button primary font="button_middle" padding="1.9rem 1.5rem 1.9rem 1.4rem">
            <span className="text">검색</span>
            <SearchImg />
          </Button>
        </div>

        {/* <Search.Button >
          <Button primary font="button_middle" padding="1.9rem 1.5rem 1.9rem 1.4rem">
            <span className="text">검색</span>
            <SearchImg />
          </Button>
        </Search.Button> */}
      </Search.Container>
    </>
  );
};

export default connect(null, mapDispatchToProps)(Searchbar);
