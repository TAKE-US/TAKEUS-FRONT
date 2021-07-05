import React, { useState } from "react";
import styled from "styled-components";
//assets
import leftBtnIcon from "../../assets/img/ic_arrow_left_24.svg";
import rightBtnIcon from "../../assets/img/ic_arrow_right_black_24.svg";

const PaginationNav = () => {
  const pageNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [selectPage, setSelectPage] = useState(1);

  //page 이동 함수
  const nextPageHandler = () => {
    if (selectPage !== pageNums.length) {
      setSelectPage(prev => prev + 1);
    }
  };
  const prevPageHandler = () => {
    if (selectPage !== 1) {
      setSelectPage(prev => prev - 1);
    }
  };

  return (
    <NavWrap selectNum={selectPage}>
      <PageMoveButton bg={leftBtnIcon} onClick={prevPageHandler} />
      <article>
        {pageNums.map((num, key) => (
          <PageBtn
            key={key}
            isSelect={
              //선택된 page에서는 색 변함
              num === selectPage ? true : false
            }
            onClick={() => setSelectPage(num)}
          >
            {num}
          </PageBtn>
        ))}
      </article>
      <PageMoveButton bg={rightBtnIcon} onClick={nextPageHandler} />
    </NavWrap>
  );
};

export default PaginationNav;

const NavWrap = styled.section`
  display: flex;
  min-width: 51.6rem;
  height: 2.9rem;
  margin-top: 10.1rem;
  margin-bottom: 14.6rem;
  justify-content: space-between;
  align-items: center;
  article {
    display: grid;
    grid-template-columns: repeat(auto-fit, 2.6rem);
    max-width: 51.6rem;
    grid-gap: 1.6rem;
  }
`;
const PageBtn = styled.button`
  display: block;
  width: 2.6rem;
  height: 2.9rem;
  color: ${props => (props.isSelect ? "#F29C42" : "#3D3D3D")};
  font: ${({ theme }) => theme.font.button_small};
  ::after {
    content: "";
    display: ${props => (props.isSelect ? "block" : "none")};
    position: relative;
    top: 6px;
    padding-left: 10px;
    border-bottom: 1px solid #f29c42;
  }
`;
const PageMoveButton = styled.button`
  display: flex;
  width: 1.8rem;
  height: 1.8rem;
  background: url(${props => props.bg}) no-repeat top center;
`;
