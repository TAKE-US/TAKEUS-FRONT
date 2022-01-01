import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import { Button } from 'components';
// import { ReactComponent as LogoMini } from 'assets/icon/imf_logo_mini_22.svg';
import LogoMini from 'assets/icon/imf_logo_mini_22.svg';
import { ReactComponent as MatchingImg } from 'assets/img/img_r01_round1.svg';
import { ReactComponent as HidingImg } from 'assets/img/img_r01_round2.svg';
import { ReactComponent as WarningImg } from 'assets/img/img_r01_round3.svg';

const Styled = {
  Wrapper: styled.div`
    padding: 0 12rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    .title {
      font: ${({ theme }) => theme.font.display2};
      font-weight: 400;
    }

    .semititle {
      margin-top: 3.6rem;
      font: ${({ theme }) => theme.font.body2};
      color: ${({ theme }) => theme.color.gray3};
    }

    .card {
      padding: 9rem 5.7rem;
      margin-top: 6.1rem;
      margin-bottom: 8rem;
      background-color: ${({ theme }) => theme.color.lightgray1};
      border-radius: 1rem;

      &__img {
        display: flex;
        justify-content: space-between;
        padding-right: 4rem;
        padding-left: 4rem;
        margin-bottom: 5.1rem;
      }
    }

    .notify {
      color: ${({ theme }) => theme.color.darkgray1};
      font: ${({ theme }) => theme.font.body3};
      line-height: 2.5rem;

      .first {
        display: flex;
        align-items: center;

        .logo {
          color: ${({ theme }) => theme.color.primary};
          font-weight: 700;
        }
      }
    }
  `,

  List: styled.li`
    font: ${({ theme }) => theme.font.title1};
    margin-bottom: 3.6rem;
    line-height: 2.187rem;

    .content {
      margin-top: 0.8rem;
      font: ${({ theme }) => theme.font.body1};
      color: ${({ theme }) => theme.color.gray3};
      line-height: 1.914rem;

      .highlight {
        color: ${({ theme }) => theme.color.error_red};
      }
    }
  `,
};

const EnrollCaution = () => {
  const history = useHistory();

  return (
    <Styled.Wrapper>
      <h1 className="title">등록 전 유의사항</h1>
      <h2 className="semititle">대상견 등록 전 아래내용을 확인하여 주세요.</h2>

      <article className="card">
        <div className="card__img">
          <MatchingImg />
          <HidingImg />
          <WarningImg />
        </div>
        <ol className="card__list">
          <Styled.List>
            1. 작성된 글은 매칭 완료 전까지 목록에 노출됩니다.
            <li className="content">
              대상견과 봉사자의 매칭이 성사되면{' '}
              <span className="highlight">마이페이지-내가 올린 대상견 페이지</span>에서{' '}
              <span className="highlight">매칭상태를 완료로 변경</span>하여 주세요. <br />
              봉사자에게 정확한 정보를 전달하기 위함입니다.
            </li>
          </Styled.List>
          <Styled.List>
            2. 00이상 접속이 없는 사용자의 게시물은 경고없이 숨김처리 됩니다.
            <li className="content">
              이미 봉사가 이루어진 대상견의 정보가 봉사자에게 노출 되는 것을 방지하기 위함이며
              봉사자들의 혼란을 방지하기 위한 조치입니다.
            </li>
          </Styled.List>
          <Styled.List>
            3. 대상견의 정보의 경우 꼭! 사실만을 작성해주세요.
            <li className="content">
              이동봉사 이외의 홍보 목적을 띈 게시물이나 허위 사실, 악의적인 의도가 포함된 게시물등의
              경우 <br />
              <span className="highlight">
                경고없이 게시물이 삭제 될 수 있으며 서비스 이용 정지등의 조치가 이루어 질 수
                있습니다.
              </span>
            </li>
          </Styled.List>
          <Styled.List>
            4. 대상견의 건강 정보와 나이 등 특정 국가에서의 통관시 민감할 수 있는 정보의 경우 <br />
            봉사자 분들께 이를 자세히 알려주세요.
            <li className="content">봉사자분들께 불이익이 가는 것을 방지하기 위함입니다.</li>
          </Styled.List>
          <Styled.List>
            5. 한 게시물에는 대상견 한 마리의 정보만 입력해주세요.
            <li className="content">봉사자에게 정확한 정보를 전달하기 위함입니다.</li>
          </Styled.List>
        </ol>
        <p className="notify">
          <div className="first">
            <img className="img" src={LogoMini} alt="logo" />
            서비스에 포함된 지역 이외의 지역으로 이동하는 대상견이 있는 경우 &nbsp;
            <span className="logo">Contact Us</span>를 통해 TAKE US에게 알려주세요. <br />
          </div>
          이외에도 서비스에 대한 문의나 피드백등이 있으신 경우 Contact Us를 사용해주세요.
        </p>
      </article>
      <div className="button" onClick={() => history.push('/dog/enroll')}>
        <Button primary rounded padding="1.2rem 3rem" font="button">
          대상견 등록하기
        </Button>
      </div>
    </Styled.Wrapper>
  );
};

export default EnrollCaution;
