import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { useDetectOutsideClick } from "../../hooks/useDetectOutsideClick";
import { ReactComponent as Arrow } from "../../assets/img/ic_arrow_bottom_black_24.svg";

const Menu = {
  Container: styled.div`
    position: relative;
    width: 100%;
    height: 100%;
  `,
  Button: styled.button`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    &:hover {
      cursor: pointer;
    }

    .destination {
      display: flex;
      flex-direction: column;
      text-align: left;

      .name {
        font: ${({ theme }) => theme.font.caption};
        color: ${({ theme }) => theme.color.gray3};
      }

      .text {
        margin-top: 0.6rem;
        font: ${({ theme }) => theme.font.body2};
        color: ${props => (props.currAirport ? (props.currAirport === "공항명" ? "#C1C1C1" : "#3D3D3D") : "#C1C1C1")};
      }
    }

    svg {
      width: 2.2rem;
      margin-left: 4.4rem;
      transform: ${props => props.isActive && "rotate(-180deg)"};
      transition: transform 0.3s;
    }
    &.enroll {
      .destination {
        padding: 0 1.4rem;
      }
      .text {
        margin-top: 0;
      }
    }
  `,

  Nav: styled.nav`
    position: absolute;
    display: ${props => (props.isActive ? "flex" : "none")};
    width: 32rem;
    padding: 1rem 0.6rem;
    box-shadow: 0rem 0rem 3rem 0.1rem rgba(0, 0, 0, 0.1);
    border-radius: 1rem;
    margin-left: ${props => (props.enroll ? "0rem" : "-2rem")};
    margin-top: 1.6rem;
    background-color: ${({ theme }) => theme.color.white};
    &.enroll {
      width: 49rem;
      z-index: 10;
    }
  `,

  Ul: styled.ul`
    width: 100%;

    div {
      margin: 0.8rem;
      border-bottom: 1px solid ${({ theme }) => theme.color.lightgray2};
      :last-child {
        border-bottom: none;
      }

      span {
        font: ${({ theme }) => theme.font.caption};
        color: ${({ theme }) => theme.color.gray1};
        padding-left: 1.2rem;
      }
    }
  `,

  Li: styled.li`
    width: 29.2rem;
    height: 3.4rem;
    padding-left: 1.2rem;
    font: ${({ theme }) => theme.font.body1};
    color: ${props => (props.selected ? "#FDCB02" : "#3D3D3D")};
    display: flex;
    align-items: center;
    border-radius: 10px;
    &:hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme.color.bg_yellow};
    }
    &.enroll {
      width: 46rem;
    }
  `,
};

const DropdownAirport = ({ currCountry, currAirport, setCurrAirport, allAirport, enroll }) => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const [airport, setAirport] = useState("");
  const airportRef = useRef(false);
  const countryRef = useRef(false);

  const onClick = e => {
    e.preventDefault();
    setIsActive(!isActive);
  };

  useEffect(() => {
    setAirport(allAirport[currCountry]);
  }, [currCountry, allAirport]);

  useEffect(() => {
    if (airportRef.current && countryRef.current && !currAirport) {
      setCurrAirport("");
    }
  }, [currCountry, setCurrAirport, currAirport]);

  useEffect(() => {
    if (!airportRef.current) {
      airportRef.current = true;
    }
  }, [currAirport]);

  useEffect(() => {
    if (!countryRef.current) {
      countryRef.current = true;
    }
  }, [currCountry]);

  return (
    <Menu.Container enroll={enroll}>
      <Menu.Button
        onClick={onClick}
        currAirport={currAirport}
        disabled={currCountry ? false : true}
        isActive={isActive}
        className={enroll ? "enroll" : ""}
      >
        <div className="destination">
          {!enroll && <span className="name">공항명</span>}
          <span className="text">
            {/* {currAirport ? currAirport : enroll ? enroll.initialValue : '도착 공항은 어디인가요?'} */}
            {currAirport
              ? currAirport
              : enroll?.initialValue
              ? enroll.initialValue
              : enroll
              ? "공항명"
              : "도착 공항은 어디인가요?"}
          </span>
        </div>
        <Arrow />
      </Menu.Button>
      <Menu.Nav ref={dropdownRef} isActive={isActive} className={enroll ? "enroll" : ""} enroll={enroll}>
        <Menu.Ul>
          {airport &&
            Object.keys(airport).map((city, index) => (
              <div key={`country-${index}`}>
                <span>{city}</span>
                {airport[city].map((value, index) => (
                  <Menu.Li
                    className={enroll ? "enroll" : ""}
                    key={`airport-${index}`}
                    selected={currAirport === value ? true : false}
                    onClick={() => {
                      setCurrAirport(value);
                      setIsActive(!isActive);
                    }}
                  >
                    {value}
                  </Menu.Li>
                ))}
              </div>
            ))}
        </Menu.Ul>
      </Menu.Nav>
    </Menu.Container>
  );
};

export default DropdownAirport;
