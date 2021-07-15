import React, { useState, useEffect } from "react";
import styled from "styled-components";
//asset
import { ReactComponent as Sample } from "assets/img/mypage_sample.svg";
//layer
import { DogCardContainer, ReviewCardContainer, Filter, PaginationNav } from "components";
//api
import { getMyDogs, getMyReviews } from "lib/api/sample";

const Styled = {
  Wrapper: styled.div`
    margin-top: 14rem;
  `,
  Header: styled.div`
    display: flex;
    min-width: 100%;
    justify-content: space-between;
    .image {
      width: 36rem;
    }
    & > div {
      position: relative;
      top: 10.6rem;
      .tab-wrapper {
        display: grid;
        grid-template-columns: repeat(2, 16.4rem);
        grid-gap: 0.8rem;
      }
      .text {
        margin-top: 6.4rem;
        & > h1 {
          font: ${({ theme }) => theme.font.display1};
          & > b {
            font: ${({ theme }) => theme.font.display1};
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
    background: ${props => (props.select ? props.theme.color.lightgray1 : props.theme.color.white)};
    border-radius: 1rem;
    font: ${({ theme }) => theme.font.button};
    line-height: 2.2rem;
  `,
  Content: styled.section`
    margin-top: 1.8rem;
  `,
};

const MypageHeader = () => {
  const [tabs, setTabs] = useState([
    { value: "이동봉사 모집글", select: true },
    { value: "이동봉사 후기글", select: false },
  ]);
  const [dogs, setDogs] = useState(null);
  const [reviews, setReviews] = useState(null);
  const [dogsPage, setDogsPage] = useState(1);
  const [dogsTotalPage, setDogsTotalPage] = useState(1);
  const [reviewsPage, setReviewsPage] = useState(1);
  const [reviewsTotalPage, setReviewsTotalPage] = useState(1);
  const contents = ["최신순", "오래된순"];
  const [selectedFilter, setSelectedFilter] = useState(contents[0]);

  const selectHandler = t => {
    const newTabs = tabs.map(tab => (tab === t ? { ...tab, select: true } : { ...tab, select: false }));
    setTabs(newTabs);
  };

  useEffect(() => {
    (async () => {
      console.log(selectedFilter);
      const data = await getMyDogs(dogsPage, selectedFilter);
      setDogs(data[0]);
      setDogsTotalPage(data[1]);
      //review
      const ReviewData = await getMyReviews(reviewsPage, selectedFilter);
      setReviews(ReviewData[0]);
      setReviewsTotalPage(ReviewData[1]);
      console.log(data, ReviewData);
    })();
  }, [dogsPage, reviewsPage, selectedFilter]);
  return (
    <Styled.Wrapper>
      <Styled.Header>
        <div>
          <nav className="tab-wrapper">
            {tabs.map((tab, idx) => (
              <Styled.Tab key={idx} className="tab_button" onClick={() => selectHandler(tab)} select={tab.select}>
                {tab.value}
              </Styled.Tab>
            ))}
          </nav>
          <section className="text">
            <h1>
              내가 올린 <b>이동 봉사 모집글</b>을 한번에 확인해보세요!
            </h1>
            <p>여러분의 도움으로 한 생명이 새로운 삶을 살게 되었어요 🙏🏻</p>
          </section>
        </div>
        <Sample className="image" />
      </Styled.Header>
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
    </Styled.Wrapper>
  );
};

export default MypageHeader;
