import React, { useRef } from "react";
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
        color: ${props => (props.currCountry ? "#3D3D3D" : "#C1C1C1")};
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

  List: styled.div`
    position: absolute;
    display: ${props => (props.isActive ? "flex" : "none")};
    width: 19.8rem;
    padding: 1rem 0.6rem;
    box-shadow: 0rem 0rem 3rem 0.1rem rgba(0, 0, 0, 0.1);
    border-radius: 1rem;
    margin-top: 1.6rem;
    background-color: ${({ theme }) => theme.color.white};
    &.enroll {
      width: 15.8rem;
      z-index: 10;
    }
  `,

  Ul: styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      width: 18.4rem;
      height: 3.4rem;
      padding-left: 1.4rem;
      font: ${({ theme }) => theme.font.body1};
      color: ${props => (props.selected ? "#FDCB02" : "#3D3D3D")};
      display: flex;
      align-items: center;
      border-radius: 1rem;
      &:hover {
        cursor: pointer;
        background-color: ${({ theme }) => theme.color.bg_yellow};
      }
    }
    &.enroll {
      li {
        width: 14.8rem;
      }
    }
  `,
};

const DropdownCountry = ({ currCountry, setCurrCountry, country, enroll }) => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);

  const onClick = () => {
    setIsActive(!isActive);
  };

  return (
    <Menu.Container>
      <Menu.Button onClick={onClick} currCountry={currCountry} isActive={isActive} className={enroll ? "enroll" : ""}>
        <div className="destination">
          {!enroll && <span className="name">국가</span>}
          <span className="text">{currCountry ? currCountry : enroll ? "국가" : "어디로 가시나요?"}</span>
        </div>
        <Arrow />
      </Menu.Button>
      <Menu.List ref={dropdownRef} isActive={isActive} className={enroll ? "enroll" : ""}>
        <Menu.Ul className={enroll ? "enroll" : ""}>
          {country.map((country, index) => (
            <li
              key={`country-dropdown-${index}`}
              selected={currCountry === country ? true : false}
              onClick={() => {
                setCurrCountry(country);
                setIsActive(!isActive);
              }}
            >
              {country}
            </li>
          ))}
        </Menu.Ul>
      </Menu.List>
    </Menu.Container>
  );
};

export default DropdownCountry;
