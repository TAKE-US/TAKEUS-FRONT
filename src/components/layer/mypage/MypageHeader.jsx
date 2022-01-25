import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import QueryString from 'qs';
import { withRouter } from 'react-router-dom';
//asset
import DogPlane from 'assets/img/img_dogswithplane.png';
import DogHug from 'assets/img/img_hugwithdog.png';
//layer
import { DogCardContainer, ReviewCardContainer, Filter, PaginationNav, Loading } from 'components';
//api
import { getMyDogs, getMyReviews } from 'lib/api/sample';

const Styled = {
  Wrapper: styled.div``,
  Header: styled.div`
    display: flex;
    min-width: 100%;
    padding-top: 14rem;
    padding-bottom: 8rem;
    background: url(${(props) => props.bg}) no-repeat center right;
    & > div {
      .tab-wrapper {
        display: grid;
        grid-template-columns: repeat(2, 16.4rem);
        grid-gap: 0.8rem;
      }
      .text {
        margin-top: 6.4rem;
        & > h1 {
          font-style: normal;
          font-weight: normal;
          font-size: 3rem;
          line-height: 4.3rem;
          & > b {
            font-style: normal;
            font-weight: normal;
            font-size: 30px;
            line-height: 4.3rem;
            color: ${({ theme }) => theme.color.primary};
          }
        }
        & > p {
          margin-top: 1.6rem;
          font: ${({ theme }) => theme.font.body2};
          line-height: 2.6rem;
          color: #a5a5a5;
        }
      }
    }
  `,
  Tab: styled.button`
    width: 16.4rem;
    padding: 1.4rem 2.2rem;
    background: ${(props) => (props.select ? props.theme.color.lightgray1 : props.theme.color.white)};
    border-radius: 1rem;
    font: ${({ theme }) => theme.font.button};
    line-height: 2.2rem;
  `,
  Content: styled.section`
    margin-top: 1.8rem;
  `,
};

const MypageHeader = ({ location, history }) => {
  const [tabs, setTabs] = useState([
    { value: '이동봉사 모집글', select: true },
    { value: '이동봉사 후기글', select: false },
  ]);
  const [dogs, setDogs] = useState(null);
  const [reviews, setReviews] = useState(null);
  const [dogsPage, setDogsPage] = useState(1);
  const [dogsTotalPage, setDogsTotalPage] = useState(1);
  const [reviewsPage, setReviewsPage] = useState(1);
  const [reviewsTotalPage, setReviewsTotalPage] = useState(1);
  const contents = ['최신순', '오래된순'];
  const [selectedFilter, setSelectedFilter] = useState(contents[0]);
  const [isLoading, setIsLoading] = useState(false);

  const query = QueryString.parse(location.search, { ignoreQueryPrefix: true });

  useEffect(() => {
    if (query?.select === 'post') {
      setTabs([
        { value: '이동봉사 모집글', select: true },
        { value: '이동봉사 후기글', select: false },
      ]);
    } else if (query?.select === 'review') {
      setTabs([
        { value: '이동봉사 모집글', select: false },
        { value: '이동봉사 후기글', select: true },
      ]);
    }
  }, [query?.select]);

  // const selectHandler = t => {
  //   const newTabs = tabs.map(tab =>
  //     tab === t ? { ...tab, select: true } : { ...tab, select: false }
  //   );
  //   setTabs(newTabs);
  // };

  const selectHandler = (t) => {
    t.value.split(' ')[1] === '모집글' ? history.push('mypage?select=post') : history.push('mypage?select=review');
  };

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      const data = await getMyDogs(dogsPage, selectedFilter);
      setDogs(data[0]);
      setDogsTotalPage(data[1]);
      //review
      const ReviewData = await getMyReviews(reviewsPage, selectedFilter);
      setReviews(ReviewData[0]);
      setReviewsTotalPage(ReviewData[1]);
      setIsLoading(false);
    })();
  }, [dogsPage, reviewsPage, selectedFilter]);

  return (
    <Styled.Wrapper>
      <Styled.Header bg={tabs[0].select ? DogPlane : DogHug}>
        <div>
          <nav className="tab-wrapper">
            {tabs.map((tab, index) => (
              <Styled.Tab
                key={`tab-${index}`}
                className="tab_button"
                onClick={() => selectHandler(tab)}
                select={tab.select}
              >
                {tab.value}
              </Styled.Tab>
            ))}
          </nav>
          <section className="text">
            <h1>
              내가 올린 <b>이동 봉사 {tabs.filter((t) => t.select).map((t) => t.value.split(' ')[1])}</b>을 한번에
              확인해보세요!
            </h1>
            <p>여러분의 도움으로 한 생명이 새로운 삶을 살게 되었어요 🙏🏻</p>
          </section>
        </div>
      </Styled.Header>
      {isLoading ? (
        <Loading />
      ) : (
        <Styled.Content>
          <Filter contents={contents} selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />
          {tabs[0].select ? (
            <DogCardContainer dogs={dogs} />
          ) : (
            <ReviewCardContainer reviews={reviews} setReviews={setReviews} />
          )}
          {tabs[0].select ? (
            <PaginationNav pageNum={dogsPage} setPageNum={setDogsPage} totalPage={dogsTotalPage} />
          ) : (
            <PaginationNav pageNum={reviewsPage} setPageNum={setReviewsPage} totalPage={reviewsTotalPage} review />
          )}
        </Styled.Content>
      )}
    </Styled.Wrapper>
  );
};

export default withRouter(MypageHeader);
