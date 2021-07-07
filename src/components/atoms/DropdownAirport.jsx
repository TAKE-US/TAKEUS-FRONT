import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { useDetectOutsideClick } from '../../hooks/useDetectOutsideClick';
import Arrow_Bottom from '../../assets/img/ic_arrow_bottom_black_24.svg';
import Arrow_Top from '../../assets/img/ic_arrow_top_black_24.svg';

const Menu = {
  Container: styled.div`
    position: relative;
    ::before {
      content: "";
      display: block;
      float: left;
      background-color: ${({ theme }) => theme.color.gray1};
      width: 0.2rem;
      height: 3.6rem;
      position: relative;
      top: 2.3rem;
    }
  `,

  Button: styled.button`
    width: 42rem;
    height: 8.2rem;
    font: ${({ theme }) => theme.font.subheading};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2.6rem;
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
        color: ${props => props.currAirport ? "#3D3D3D" : "#C1C1C1"};
      }
    }
  `,

  Nav: styled.nav`
    position: absolute;
    display: ${props => props.isActive ? 'flex' : 'none'};
    width: 32rem;
    padding: 1rem 0.6rem;
    box-shadow: 0rem 0rem 3rem 0.1rem rgba(0,0,0,0.1);
    border-radius: 1rem;
    margin-left: 1rem;
    margin-top: 1.6rem;
    background-color: ${({ theme }) => theme.color.white};
  `,

  Ul: styled.ul`
    width: 100%;
    list-style: none;
    padding: 0;
    margin: 0;

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
        margin-bottom : 1.8rem;
      }
    }
  `,

  Li: styled.li`
    width: 29.2rem;
    height: 3.4rem;
    padding-left : 1.2rem;
    font: ${({ theme }) => theme.font.body1};
    color: ${props => props.selected ? "#FDCB02" : "#3D3D3D"};
    display: flex;
    align-items: center;
    border-radius: 1rem;
    &:hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme.color.bg_yellow};
    }
  `,
};

const allAirport = {
  "미국": {
    "워싱턴 DC": ["델러스 국제공항", "로널드 레이건 워싱턴 국제공항"],
    "뉴욕": ["JFK 국제공항", "시러큐스 핸콕 국제공항", "스튜어트 국제공항", "롱아일랜드 아이슬립 맥아더 공항", "라구아디아 공항"],
  },
  "캐나다": {
    "밴쿠버": ["밴쿠버 국제공항"],
    "토론토": ["토론토 국제공항"],
  },
  "독일": {
    "프랑크푸르트": ["프랑크푸르트 국제공항"],
    "브레멘": ["브레멘 국제공항"],
  }
};

const DropdownAirport = ({ currCountry, currAirport, setCurrAirport }) => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const [airport, setAirport] = useState('');
  // const [airport, setAirport] = useState('');

  const onClick = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    setAirport(allAirport[currCountry]);
    setCurrAirport('');
  }, [currCountry]);

  return (
    <Menu.Container>
      <Menu.Button onClick={onClick} currAirport={currAirport} disabled={currCountry ? false : true}>
        <div className="destination">
          <span className="name">공항명</span>
          <span className="text">
            {currAirport ? currAirport : "도착 공항은 어디인가요?"}
          </span>
        </div>
        <img
          src={isActive ? Arrow_Top : Arrow_Bottom}
          alt=""
        />
      </Menu.Button>
      <Menu.Nav ref={dropdownRef} isActive={isActive}>
        <Menu.Ul>
          {airport && Object.keys(airport).map((city, index) => (
            <div key={index}>
              <span>
                {city}
              </span>
              {airport[city].map((value, index) => (
                <Menu.Li
                  key={index}
                  selected={
                    currAirport === value ? true : false
                  }
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
    </Menu.Container >
  );
};

export default DropdownAirport;