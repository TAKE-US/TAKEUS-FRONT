/* eslint-disable arrow-parens */
import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { getCountry } from "lib/api/sample";
import { DropdownCountry, DropdownAirport } from "components";

const Search = {
  Container: styled.div`
    display: flex;
    .dropdown {
      margin-right: 0.8rem;
      &__country {
        width: 17.4rem;
        height: 3.2rem;
        border: 1px solid #dfdfdf;
        border-radius: 41rem;
      }
      &__airport {
        width: 50.6rem;
        height: 3.2rem;
        border: 1px solid #dfdfdf;
        border-radius: 41rem;
      }
      ::after {
        content: "";
        display: none;
      }
    }
  `,
};

const Searchbar = ({ enroll, setEnrollData }) => {
  const [currCountry, setCurrCountry] = useState("");
  const [currAirport, setCurrAirport] = useState("");
  const [country, setCountry] = useState([]);
  const [allAirport, setAllAirport] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const data = await getCountry();
        console.log(data);

        setCountry(Object.keys(data).splice(1));
        setAllAirport(data);
      } catch (e) {
        // TODO
        // error 처리 필요!
      }
    })();
  }, []);

  useEffect(() => {
    setEnrollData("endingCountry", currCountry);
    setEnrollData("endingAirport", currAirport);
  }, [currCountry, currAirport, setEnrollData]);

  return (
    <>
      <Search.Container>
        <div className="dropdown dropdown__country">
          <DropdownCountry enroll currCountry={currCountry} setCurrCountry={setCurrCountry} country={country} />
        </div>
        <div className="dropdown dropdown__airport">
          <DropdownAirport
            enroll
            currCountry={currCountry}
            currAirport={currAirport}
            setCurrAirport={setCurrAirport}
            allAirport={allAirport}
          />
        </div>
      </Search.Container>
    </>
  );
};

export default Searchbar;
