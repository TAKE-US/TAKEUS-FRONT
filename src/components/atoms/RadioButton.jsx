import React from "react";
import styled from "styled-components";
//assets
import radioOff from "assets/icon/btn_radio_off_24.svg";
import radioOn from "assets/icon/btn_radio_on_24.svg";

const RadioBtnWrap = styled.section`
  display: flex;
  justify-content: space-between;
  height: 2.4rem;
  article {
    display: flex;
    align-items: center;
    margin-right: 5rem;
    :last-child {
      margin-right: 2.4rem;
    }
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

const RadioButton = ({ items, setItems, setEnrollData, name }) => {
  // const [itemState, setItemState] = useState(items);

  const selectHandler = (i, e) => {
    e.preventDefault();
    const newItem = items.map(item => (i === item ? { ...item, select: true } : { ...item, select: false }));
    setItems(newItem);
    setEnrollData(name, i.value);
  };
  return (
    <RadioBtnWrap>
      {items.map((item, key) => (
        <article key={key}>
          <RadioBtn bg={item.select ? radioOn : radioOff} onClick={e => selectHandler(item, e)}></RadioBtn>
          <p>{item.value}</p>
        </article>
      ))}
    </RadioBtnWrap>
  );
};

export default RadioButton;
