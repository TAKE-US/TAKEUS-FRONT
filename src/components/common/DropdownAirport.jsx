import React, { useRef } from 'react';
import styled from 'styled-components';

import { useDetectOutsideClick } from '../../hooks/useDetectOutsideClick';
import Arrow_Bottom from '../../assets/img/ic_arrow_bottom_black_24.svg';

const Menu = {
  Container: styled.div`
    position: relative;
    ::before {
      content: "|";
      float: left;
      color: ${({ theme }) => theme.color.gray1};
      font-size: 3.6rem;
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
      color: ${({ theme }) => theme.color.gray1};

      .name {
        font: ${({ theme }) => theme.font.caption};
      }

      .text {
        margin-top: 0.3rem;
        font: ${({ theme }) => theme.font.body2}
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
        margin-bottom : 1.8rem;
      }
      
      li {
        width: 30.4rem;
        height: 3.4rem;
        font: ${({ theme }) => theme.font.body1};
        color: ${({ theme }) => theme.font.darkgray1};
        display: flex;
        align-items: center;
        &:hover {
          cursor: pointer;
          background-color: ${({ theme }) => theme.color.bg_yellow};
        }
      }
    }
  `,
};

const DropdownAirport = () => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => {
    setIsActive(!isActive);
  };

  let airport = {
    "워싱턴 DC": ["델러스 국제공항", "로널드 레이건 워싱턴 국제공항"],
    "뉴욕": ["JFK 국제공항", "시러큐스 핸콕 국제공항", "스튜어트 국제공항", "롱아일랜드 아이슬립 맥아더 공항", "라구아디아 공항"],
  };

  return (
    <Menu.Container>
      <Menu.Button onClick={onClick}>
        <div className="destination">
          <span className="name">공항명</span>
          <span className="text">도착 공항은 어디인가요?</span>
        </div>
        <img src={Arrow_Bottom} alt="" />
      </Menu.Button>
      <Menu.Nav ref={dropdownRef} isActive={isActive}>
        <Menu.Ul>
          {Object.keys(airport).map((city, index) => (
            <div key={index}>
              <span>
                {city}
              </span>
              {airport[city].map((value, index) => (
                <li key={index}>
                  {value}
                </li>
              ))}

            </div>
          ))}
        </Menu.Ul>
      </Menu.Nav>
    </Menu.Container >
  );
};

export default DropdownAirport;