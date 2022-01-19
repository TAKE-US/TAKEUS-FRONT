import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import { ReactComponent as MatchingImg } from 'assets/img/img_matching.svg';
import { Button } from 'components';

const Styled = {
  Wrapper: styled.div`
    padding: 0 12rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    .text {
      font: ${({ theme }) => theme.font.body3};
      color: ${({ theme }) => theme.color.darkgray2};
      margin-top: 0.8rem;
    }

    .button {
      margin-top: 8rem;
    }
  `,
};

const EnrollFinish = () => {
  const history = useHistory();

  return (
    <Styled.Wrapper>
      <div className="matching">
        <MatchingImg />
      </div>
      <p className="text">봉사자와 매칭완료 시 매칭완료를 눌러 상태를 꼭 변경해주세요!</p>
      {/* TODO 계속 에러가 발생해서 임시 수정 */}
      {/* <div className="button" onClick={() => history.push('/mypage?select=post')}> */}
      <div className="button" onClick={() => history.push('/')}>
        <Button primary rounded padding="1.2rem 3rem" font="button">
          확인 완료
        </Button>
      </div>
    </Styled.Wrapper>
  );
};

export default EnrollFinish;
