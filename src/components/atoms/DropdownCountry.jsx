import React, { useRef } from 'react';
import styled from 'styled-components';

import { useDetectOutsideClick } from '../../hooks/useDetectOutsideClick';
import Arrow_Bottom from '../../assets/img/ic_arrow_bottom_black_24.svg';

const Menu = {
  Container: styled.div`
    position: relative;
  `,

  Button: styled.button`
    width: 24.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.8rem 2.9rem 0.8rem 2.6rem;
    border-radius: 10px;
    border: none;
    background-color: #FFFFFF;
    cursor: pointer;

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
        color: ${props => props.currCountry ? "#3D3D3D" : "#C1C1C1"};
      }
    }
    .arrowImg {
        transform: ${props => props.isActive && 'rotate(180deg)' };
      }
  `,

  Nav: styled.nav`
    position: absolute;
    display: ${props => props.isActive ? 'flex' : 'none'};
    width: 19.8rem;
    padding: 1rem 0.6rem;
    box-shadow: 0rem 0rem 3rem 0.1rem rgba(0,0,0,0.1);
    border-radius: 1rem;
    margin-top: 1.6rem;
    background-color: ${({ theme }) => theme.color.white};
  `,

  Ul: styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
  `,

  List: styled.li`
    width: 18.4rem;
    height: 3.4rem;
    padding-left: 1.4rem;
    font: ${({ theme }) => theme.font.body1};
    color: ${props => props.selected
      ? "#FDCB02"
      : "#3D3D3D"
    };
    display: flex;
    align-items: center;
    border-radius: 1rem;
    &:hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme.color.bg_yellow};
    }
  `,
};

const DropdownCountry = ({ currCountry, setCurrCountry }) => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);

  const onClick = () => {
    setIsActive(!isActive);
  };

  const country = ["미국", "캐나다", "독일", "프랑스", "네덜란드"];

  return (
    <Menu.Container>
      <Menu.Button onClick={onClick} currCountry={currCountry} isActive={isActive}>
        <div className="destination">
          <span className="name">국가</span>
          <span className="text">
            {currCountry ? currCountry : "어디로 가시나요?"}
          </span>
        </div>
        <img
          className="arrowImg"
          src={Arrow_Bottom}
          alt=""
        />
      </Menu.Button>
      <Menu.Nav ref={dropdownRef} isActive={isActive}>
        <Menu.Ul>
          {country.map((country, index) => (
            <Menu.List
              key={index}
              selected={
                currCountry === country ? true : false
              }
              onClick={() => {
                setCurrCountry(country);
                setIsActive(!isActive);
              }}
            >
              {country}
            </Menu.List>
          ))}
        </Menu.Ul>
      </Menu.Nav>
    </Menu.Container>
  );
};

export default DropdownCountry;