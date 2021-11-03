import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import imageMatching from "assets/img/img_matching.png";
import { Button } from "components";

const Styled = {
  Wrapper: styled.div`
    padding: 0 12rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    & > p {
      margin: 2rem 0;
      font: ${({ theme }) => theme.font.body3};
    }
    .button {
      margin-top: 8rem;
    }
  `,
};

const EnrollCaution = () => {
  const history = useHistory();

  return (
    <Styled.Wrapper>
      <img src={imageMatching} alt="matching_image" />
      <p>봉사자와 매칭완료 시 매칭 완료를 눌러 상태를 꼭 변경해주세요!</p>
      <div className="button" onClick={() => history.push("/dog/search")}>
        <Button primary rounded padding="1.2rem 3rem" font="button">
          확인완료
        </Button>
      </div>
    </Styled.Wrapper>
  );
};

export default EnrollCaution;
