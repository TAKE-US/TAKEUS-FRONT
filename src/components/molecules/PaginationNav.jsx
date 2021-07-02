import React, { useState } from "react";
import styled from "styled-components";
//assets
import leftBtnIcon from "../../assets/img/ic_arrow_left_24.svg";
import rightBtnIcon from "../../assets/img/ic_arrow_right_black_24.svg";

const PaginationNav = () => {
  const pageNums = [1, 2, 3, 4];
  const [selectPage, setSelectPage] = useState(1);

  //page 이동 함수
  const nextPageHandler = () => {
    if (selectPage !== pageNums.length) {
      setSelectPage((prev) => prev + 1);
    }
  };
  const prevPageHandler = () => {
    if (selectPage !== 1) {
      setSelectPage((prev) => prev - 1);
    }
  };

  return (
    <NavWrap selectNum={selectPage}>
      <PageMoveButton bg={leftBtnIcon} onClick={prevPageHandler} />
      <article>
        {pageNums.map((num, key) => (
          <button
            key={key}
            style={
              //선택된 page에서는 색 변함
              num === selectPage
                ? {
                    color: "#F29C42",
                    borderBottom: "1px solid #F29C42"
                  }
                : { color: "#3D3D3D" }
            }
            onClick={() => setSelectPage(num)}
          >
            {num}
          </button>
        ))}
      </article>
      <PageMoveButton bg={rightBtnIcon} onClick={nextPageHandler} />
    </NavWrap>
  );
};

export default PaginationNav;

const NavWrap = styled.section`
  display: flex;
  width: 51.6rem;
  height: 2.9rem;
  margin-top: 10.1rem;
  margin-bottom: 14.6rem;
  justify-content: space-between;
  align-items: center;
  article {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 1.6rem;
    button {
      width: 2.6rem;
      height: 2.9rem;

      font: ${({ theme }) => theme.font.button_small};
    }
  }
`;
const PageMoveButton = styled.button`
  display: flex;
  width: 1.8rem;
  height: 1.8rem;
  background: url(${(props) => props.bg}) no-repeat top center;
`;
