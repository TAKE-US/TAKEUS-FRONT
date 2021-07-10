import React from 'react';
import styled from 'styled-components';

const ReviewPrecautionStyle = styled.div`
  header{
    text-align: center;
    padding-bottom: 4.8rem;
    border-bottom: 1.5px solid ${({theme}) => theme.color.lightgray2};
    p {
      font: ${({ theme }) => theme.font.display1};
    }
  }
`;

const ReviewPrecuation = () => {
  return (
    <ReviewPrecautionStyle>
      <header>
        <p>대상견을 등록하고 봉사자를 만나세요.</p>
      </header>
    </ReviewPrecautionStyle>
  );
};

export default ReviewPrecuation;
