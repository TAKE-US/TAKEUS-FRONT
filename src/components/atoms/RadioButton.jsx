import React, { useState } from "react";
import styled from "styled-components";
//assets
import radioOff from "assets/icon/btn_radio_off_24.svg";
import radioOn from "assets/icon/btn_radio_on_24.svg";

const RadioBtnWrap = styled.section`
  display: flex;
  justify-content: space-between;
  article {
    display: flex;
    align-items: center;
    margin-right: 6.6rem;
    p {
      margin-left: 1rem;
      font: ${({ theme }) => theme.font.description};
      color: ${({ theme }) => theme.color.darkgray1};
      white-space: nowrap;
    }
  }
`;
const RadioBtn = styled.button`
  width: 2.4rem;
  height: 2.4rem;
  background-image: url(${props => props.bg});
  background-size: 100% 100%;
`;

const RadioButton = ({ items, setEnrollData, name }) => {
  const [itemState, setItemState] = useState(items);

  const selectHandler = i => {
    const newItem = itemState.map(item => (i === item ? { ...item, select: true } : { ...item, select: false }));
    setItemState(newItem);
    setEnrollData(name, i.value);
  };
  return (
    <RadioBtnWrap>
      {itemState.map((item, key) => (
        <article key={key}>
          <RadioBtn bg={item.select ? radioOn : radioOff} onClick={() => selectHandler(item)}></RadioBtn>
          <p>{item.value}</p>
        </article>
      ))}
    </RadioBtnWrap>
  );
};

export default RadioButton;
