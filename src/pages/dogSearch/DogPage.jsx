import React, { useEffect, useState } from "react";
import styled from "styled-components";
import QueryString from "qs";
import { withRouter } from "react-router";
import { DogCardContainer, PaginationNav, DogSearchNavigation, Filter, Empty, Loading } from "components";
//api
import { getPageDogs, getSearchDogs } from "lib/api/sample";

const Styled = {
  Wrapper: styled.section`
    .container {
      margin-top: 3.6rem;
    }
  `,
};
const DogPage = ({ dogData, location }) => {
  const [dogs, setDogs] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const contents = ["최신순", "오래된순"];
  const [selectedFilter, setSelectedFilter] = useState(contents[0]);

  const query = QueryString.parse(location.search, { ignoreQueryPrefix: true });

  useEffect(() => {
    setIsLoading(true);
    if (query?.name) {
      (async () => {
        setIsLoading(true);
        const data = await getSearchDogs(query?.name, selectedFilter, pageNum);
        setDogs(data[0]);
        setTotalPage(data[1]);
        setIsLoading(false);
      })();
    } else {
      (async () => {
        setIsLoading(true);
        const data = await getPageDogs(pageNum, selectedFilter);
        setDogs(data[0]);
        setTotalPage(data[1]);
        setIsLoading(false);
      })();
    }
  }, [pageNum, query?.name, selectedFilter]);

  return (
    <Styled.Wrapper>
      <DogSearchNavigation />
      <div className="container">
        {dogs.length !== 0 ? (
          <>
            <Filter contents={contents} selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />
            <DogCardContainer dogs={dogs} />
            <PaginationNav pageNum={pageNum} setPageNum={setPageNum} totalPage={totalPage} />
          </>
        ) : isLoading ? (
          <Loading dogs={dogs} />
        ) : (
          <Empty />
        )}
      </div>
    </Styled.Wrapper>
  );
};

export default withRouter(DogPage);
