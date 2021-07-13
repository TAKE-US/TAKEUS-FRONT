import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { DogCardContainer, PaginationNav, DogSearchNavigation, Filter } from "../../components";
//api
import { getPageDogs } from "lib/api/sample";
//redux
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    dogData: state.dogData,
  };
};

const DogPage = ({ dogData }) => {
const Styled = {
  Wrapper: styled.section`
    .container {
      margin-top: 3.6rem;
    }
  `,
};

const DogPage = () => {
  const [dogs, setDogs] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const contents = ["최신순", "오래된순"];

  useEffect(() => {
    if (dogData.length !== 0) {
      setDogs(dogData);
      setTotalPage(dogData.length);
      console.log("dogdata exist");
    } else {
      (async () => {
        const data = await getPageDogs(pageNum);
        setDogs(data[0]);
        setTotalPage(data[1]);
        console.log("dogdata none");
      })();
    }
  }, [pageNum, dogData]);

  return (
    <Styled.Wrapper>
      <DogSearchNavigation />
      <div className="container">
        <Filter contents={contents} />
        <DogCardContainer dogs={dogs} />
      </div>
      <PaginationNav pageNum={pageNum} setPageNum={setPageNum} totalPage={totalPage} />
    </Styled.Wrapper>
  );
};

export default connect(mapStateToProps)(DogPage);
