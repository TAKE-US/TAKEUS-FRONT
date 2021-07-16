import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { DogCardContainer, PaginationNav, DogSearchNavigation, Filter, Empty, Loading } from "components";
//api
import { getPageDogs } from "lib/api/sample";
//redux
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    dogData: state.dogData,
  };
};
const Styled = {
  Wrapper: styled.section`
    .container {
      margin-top: 3.6rem;
    }
  `,
};
const DogPage = ({ dogData }) => {
  const [dogs, setDogs] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const contents = ["최신순", "오래된순"];
  const [selectedFilter, setSelectedFilter] = useState(contents[0]);

  useEffect(() => {
    setIsLoading(true);
    //강아지 검색결과 없을 때
    if (dogData[0] === 0) {
      setIsEmpty(true);
      return;
    } else {
      setIsEmpty(false);
    }
    //강아지 검색을 했을 때
    if (dogData.length !== 0) {
      if (selectedFilter === "최신순") {
        setDogs(dogData);
      } else {
        setDogs([...dogData].reverse());
      }
      setTotalPage(dogData.length);
      setIsLoading(false);
    } else {
      (async () => {
        setIsLoading(true);
        const data = await getPageDogs(pageNum, selectedFilter);
        setDogs(data[0]);
        setTotalPage(data[1]);
        setIsLoading(false);
      })();
    }
  }, [pageNum, dogData, selectedFilter]);

  return (
    <Styled.Wrapper>
      <DogSearchNavigation />
      <div className="container">
        {!isEmpty ? (
          <>
            <Filter contents={contents} selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />
            {isLoading ? <Loading dogs={dogs} /> : <DogCardContainer dogs={dogs} />}
            <PaginationNav pageNum={pageNum} setPageNum={setPageNum} totalPage={totalPage} />
          </>
        ) : (
          <Empty />
        )}
      </div>
    </Styled.Wrapper>
  );
};

export default connect(mapStateToProps)(DogPage);
