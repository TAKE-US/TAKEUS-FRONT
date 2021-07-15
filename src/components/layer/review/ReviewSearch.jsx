import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

import { Searchbar, Filter, PaginationNav, ReviewCardContainer, Hashtag } from "components";
import { ReactComponent as RegisterBtn } from "assets/img/btn_register.svg";
//api
import { getReviewsWithTags } from "lib/api/sample";

const Styled = {
  Wrapper: styled.div`
    .empty {
      height: 8.8rem;
    }
  `,

  Search: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100vw;
    margin-left: calc(-50vw + 50%);
    padding-top: 6rem;
    padding-bottom: 3rem;
    background: linear-gradient(92.22deg, rgba(255, 239, 175, 0.31) 28%, rgba(255, 239, 175, 0.17) 73.01%);

    .header {
      text-align: center;
      font: ${({ theme }) => theme.font.display1};
      span {
        color: ${({ theme }) => theme.color.primary};
      }
    }

    .search {
      display: flex;
      justify-content: center;
      margin-top: 2.4rem;
    }
  `,
  Option: styled.section`
    display: flex;
    margin-top: 6.7rem;
    .tags {
      display: flex;
      .hashtag {
        margin-right: 1.1rem;
      }
    }
  `,
};

const ReviewSearch = () => {
  const history = useHistory();
  const contents = ["최신순", "오래된순"];
  const [selectedFilter, setSelectedFilter] = useState(contents[0]);
  const [reviews, setReviews] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [activeHashtag, setActiveHashtag] = useState("");
  const [hashtags, setHashtags] = useState([
    { tag: '이동봉사과정', active: false },
    { tag: '도착공항정보', active: false },
    { tag: '보호단체관련', active: false },
    { tag: '이동봉사준비', active: false },
    { tag: '봉사국가', active: false },
    { tag: '주의사항', active: false },
    { tag: '입국심사', active: false }, 
    { tag: '대상견케어', active: false }
  ]);

  useEffect(() => {
     (async () => {
      const reviewData = await getReviewsWithTags(activeHashtag, pageNum);
      if (selectedFilter === "최신순") {
        setReviews(reviewData[0]);
      } else {
        setReviews([...reviewData[0]].reverse());
      }
      setTotalPage(reviewData[1]);
    })();
  }, [activeHashtag, pageNum, selectedFilter, hashtags]);

  const toggleHashtag = tagName => {
    setHashtags(
      hashtags.map(hashtag => (
        hashtag.tag === tagName && activeHashtag !== tagName
          ? Object.assign(hashtag, { active: true })
          : Object.assign(hashtag, { active: false })
      ))
    );

    let newActiveHashtag = hashtags.filter(hashtag => hashtag.active);
    newActiveHashtag.length !== 0 
      ? setActiveHashtag(newActiveHashtag[0].tag)
      : setActiveHashtag('');
  };

  return (
    <Styled.Wrapper>
      <div className="empty"></div>
      <Styled.Search>
        <h1 className="header">
          봉사자들의 생생한 <span>이동 봉사 후기</span>를 만나보세요
        </h1>
        <div className="search">
          <Searchbar />
          <button className="button">
            <RegisterBtn onClick={() => history.push("/review/post")} />
          </button>
        </div>
      </Styled.Search>
      <Styled.Option>
        <section className="tags">
          {hashtags.map((hashtag, i) => (
            <div className="hashtag" key={i} onClick={() => toggleHashtag(hashtag.tag)}>
              <Hashtag
                tag={hashtag.tag}
                primary={hashtag.active} 
                hasActiveHashtag={true}
              />
            </div>
          ))}
        </section>
        <Filter contents={contents} setSelectedFilter={setSelectedFilter} selectedFilter={selectedFilter} />
      </Styled.Option>
      <ReviewCardContainer reviews={reviews} />
      <PaginationNav totalPage={totalPage} pageNum={pageNum} setPageNum={setPageNum} review />
    </Styled.Wrapper>
  );
};

export default ReviewSearch;
