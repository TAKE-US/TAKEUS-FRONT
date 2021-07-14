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
    background-color: #ffffff;

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
        color: ${props => (props.currAirport ? "#3D3D3D" : "#C1C1C1")};
      }
    }

    svg {
      width: 2.2rem;
      margin-left: 4.4rem;
      transform: ${props => props.isActive && "rotate(-180deg)"};
      transition: transform 0.3s;
    }
  `,

  Nav: styled.nav`
    position: absolute;
    display: ${props => (props.isActive ? "flex" : "none")};
    width: 32rem;
    padding: 1rem 0.6rem;
    box-shadow: 0rem 0rem 3rem 0.1rem rgba(0, 0, 0, 0.1);
    border-radius: 1rem;
    margin-left: 1rem;
    margin-top: 1.6rem;
    background-color: ${({ theme }) => theme.color.white};
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
  `,
};

const DropdownAirport = ({ currCountry, currAirport, setCurrAirport, allAirport, setCurrCity, enroll }) => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const [airport, setAirport] = useState("");

  const onClick = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    setAirport(allAirport[currCountry]);
    setCurrAirport("");
  }, [currCountry, setCurrAirport, allAirport]);

  return (
    <Menu.Container className={enroll ? "enroll" : ""}>
      <Menu.Button
        onClick={onClick}
        currAirport={currAirport}
        disabled={currCountry ? false : true}
        isActive={isActive}
      >
        <div className="destination">
          {!enroll && <span className="name">공항명</span>}
          <span className="text">{currAirport ? currAirport : enroll ? "공항명" : "도착 공항은 어디인가요?"}</span>
        </div>
        <Arrow />
      </Menu.Button>
      <Menu.Nav ref={dropdownRef} isActive={isActive}>
        <Menu.Ul>
          {airport &&
            Object.keys(airport).map((city, index) => (
              <div key={`country-${index}`}>
                <span>{city}</span>
                {airport[city].map((value, index) => (
                  <Menu.Li
                    key={`airport-${index}`}
                    selected={currAirport === value ? true : false}
                    onClick={() => {
                      setCurrAirport(value);
                      setIsActive(!isActive);
                      setCurrCity(city);
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
