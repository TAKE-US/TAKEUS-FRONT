import React from "react";
import styled from "styled-components";

const ReviewPrecautionStyle = styled.div`
  header {
    text-align: center;
    padding-bottom: 4.8rem;
    border-bottom: 1.5px solid ${({ theme }) => theme.color.lightgray2};
    p {
      font: ${({ theme }) => theme.font.display1};
    }
  }
`;

const ReviewPrecuation = ({ edit }) => {
  return (
    <ReviewPrecautionStyle>
      <header>
        <p>
          {!edit
            ? "이동 봉사 후기를 등록하고 다른 봉사자들에게 도움이 되어주세요."
            : "이동 봉사 후기를 수정하시겠어요?"}
        </p>
      </header>
    </ReviewPrecautionStyle>
  );
};

export default ReviewPrecuation;
