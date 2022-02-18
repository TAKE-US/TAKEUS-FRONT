import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { getCountry } from 'lib/api/sample';
import { DropdownCountry, DropdownAirport, Button } from 'components';
import { ReactComponent as SearchImg } from 'assets/icon/ic_search_white_24.svg';
import { useHistory } from 'react-router';

const Search = {
  Container: styled.div`
    background-color: ${({ theme }) => theme.color.white};
    width: 72.6rem;
    box-shadow: 0rem 0rem 2rem 0.1rem rgba(0, 0, 0, 0.05);
    display: flex;

    width: 72.6rem;
    height: 6.2rem;
    margin: 0 auto;
    background-color: ${({ theme }) => theme.color.white};
    box-shadow: 0rem 0rem 2rem 0.1rem rgba(0, 0, 0, 0.05);
    border-radius: 1rem;

    & > .button > button {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      border-top-right-radius: 1rem;
      border-bottom-right-radius: 1rem;

      .text {
        margin-right: 0.3rem;
      }
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
};

const Searchbar = () => {
  const [currCountry, setCurrCountry] = useState('');
  const [currAirport, setCurrAirport] = useState('');
  const [country, setCountry] = useState([]);
  const [allAirport, setAllAirport] = useState('');
  const history = useHistory();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await getCountry();

        setCountry(Object.keys(data).splice(1));
        setAllAirport(data);
      } catch (e) {
        // TODO
        // 에러처리 필요
        console.error(e);
      }
    })();
  }, []);

  const searchHandler = async () => {
    if (currAirport) {
      history.push(`/dog/search/airport?name=${currAirport}`);
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
            allAirport={allAirport}
          />
        </div>
        <div className="button" onClick={() => searchHandler()}>
          <Button primary font="button_middle" padding="1.9rem 1.3rem 1.9rem 1.4rem">
            <span className="text">검색</span>
            <SearchImg />
          </Button>
        </div>
      </Search.Container>
    </>
  );
};

export default Searchbar;
