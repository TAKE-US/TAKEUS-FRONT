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
  Container: styled.div``,
};

const Searchbar = ({ setDogs, enroll }) => {
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
    console.log("click", currCity);
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
      <Search.Container className={enroll ? "enroll" : ""}>
        <div className="dropdown dropdown__country">
          <DropdownCountry
            enroll={enroll ? enroll : ""}
            currCountry={currCountry}
            setCurrCountry={setCurrCountry}
            country={country}
          />
        </div>
        <div className="dropdown dropdown__airport">
          <DropdownAirport
            enroll={enroll ? enroll : ""}
            currCountry={currCountry}
            currAirport={currAirport}
            setCurrAirport={setCurrAirport}
            setCurrCity={setCurrCity}
            allAirport={allAirport}
          />
        </div>
        {!enroll && (
          <div className="button" onClick={() => searchHandler()}>
            <Button primary font="button_middle" padding="1.9rem 1.5rem 1.9rem 1.4rem">
              <span className="text">검색</span>
              <SearchImg />
            </Button>
          </div>
        )}
      </Search.Container>
    </>
  );
};

export default connect(null, mapDispatchToProps)(Searchbar);
