import React from "react";
import styled from "styled-components";
//components
import { Hashtag } from "components";

const Styled = {
  Wrapper: styled.div`
    width: 100%;
    border: 1px solid #c4c4c4;
    .tags {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(7.4rem, 10rem));
    }
  `,
};

const ReviewCard = () => {
  return (
    <Styled.Wrapper>
      <section className="tags">
        {tags.map(tag => (
          <Hashtag key={tag} tag={tag} sort="card" />
        ))}
      </section>
      Review Card
    </Styled.Wrapper>
  );
};

//mock data
const tags = ["이동봉사과정", "도착공항정보", "봉사국가"];

export default ReviewCard;
