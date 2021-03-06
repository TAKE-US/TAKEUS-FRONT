import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import BackgroundImg from 'assets/img/img_info_background-bottom.jpg';
import Step1Img from 'assets/img/img_info_step1.png';
import Step3Img from 'assets/img/img_info_step3.png';
import Step4Img from 'assets/img/img_info_step4.png';

const Styled = {
  Button: styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${props => (props.full ? '100%' : 'auto')};
    height: 100%;
    padding: ${props => props.padding || '0.5rem'};
    border-radius: ${props => (props.rounded ? '50px' : '8px')};
    font: ${({ theme, fontStyle }) => (fontStyle ? theme.font[fontStyle] : theme.font.button)};

    color: ${({ theme }) => theme.color.primary};
    background-color: ${({ theme }) => theme.color.white};
    border: solid 1px ${({ theme }) => theme.color.primary};
  `,
  Wrapper: styled.div`
    margin-left: calc(-50vw + 50%);
    padding-bottom: 20rem;
    width: 100vw;
    background: url(${BackgroundImg});
    background-position: 100%;
    background-size: cover;

    .content-wrapper {
      width: 1080px;
      margin: 0 auto;

      .title {
        font: ${({ theme }) => theme.font.headline};
        color: ${({ theme }) => theme.color.primary};
        &::first-letter {
          font-size: 3.2rem;
        }
      }

      .content-area {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        margin-top: 4rem;
        margin-left: 7.6rem;

        .card:nth-child(4) {
          background-color: ${({ theme }) => theme.color.white};
          opacity: 80%;
        }
        .card {
          display: inline-flex;
          margin: 4.2rem 0;
          padding: 4rem;
          border-radius: 10px;
          box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.07);

          &__title {
            margin-bottom: 1.5rem;
            font: ${({ theme }) => theme.font.title2};
            color: ${({ theme }) => theme.color.primary};
          }

          &__list {
            max-width: 62.5rem;
            margin-left: 2rem;
            font: ${({ theme }) => theme.font.body3};
            color: ${({ theme }) => theme.color.darygray1};
            list-style-type: disc;
            line-height: 2.4rem;
            &::marker {
              font-size: 8px;
            }
          }

          img {
            &.left {
              margin-right: 6rem;
            }
            &.right {
              margin-left: 9.6rem;
            }
          }
        }

        .last-title {
          width: 100%;
          margin-top: 4.1rem;
          margin-bottom: 3rem;
          font: ${({ theme }) => theme.font.headline};
          color: ${({ theme }) => theme.color.darygray1};
          line-height: 3.5rem;
        }

        .last-desc {
          width: 100%;
          font: ${({ theme }) => theme.font.body2};
          color: ${({ theme }) => theme.color.gray3};
          line-height: 2.5rem;
        }

        .inquiry {
          width: 100%;
          margin: 3rem 0 12rem 0;
          padding: 1.8rem 0;
          border: solid 1px ${({ theme }) => theme.color.gray1};
          border-radius: 10px;
          background-color: ${({ theme }) => theme.color.lightgray1};
          opacity: 0.6;
          font: ${({ theme }) => theme.font.body2};
          color: ${({ theme }) => theme.color.gray3};
          text-align: center;
          line-height: 2.2rem;
        }
      }
      .button-area {
        display: flex;
        justify-content: center;
        & > button {
          margin: 0 1.3rem;
        }
      }
    }
  `,
};

const InfoProcedure = () => {
  const isLogin = localStorage.getItem('token');
  const history = useHistory();

  return (
    <Styled.Wrapper>
      <div className="content-wrapper">
        <h3 className="title">Q. ?????? ????????? ??????????????? ???????????????????</h3>
        <section className="content-area">
          <article className="card">
            <div>
              <h4 className="card__title">STEP 1 ????????? ?????? ??????</h4>
              <ul>
                <li className="card__list">
                  ????????? ?????? ?????? ????????? ????????? ????????? ???????????? ????????????
                </li>
                <li className="card__list">
                  ??????????????? e-ticket??? ???????????? ??????????????? ???????????? ?????? ???????????? ?????? ??? ??????
                  ????????? ????????? ??????????????? ???????????? ???????????????
                </li>
                <li className="card__list">???????????? ?????? 1??? 2~3???????????? ???????????????</li>
                <li className="card__list">
                  ??????????????? ?????????????????? ???????????? ???????????? ?????? ???????????? ?????? ??????????????? ???????????????
                </li>
              </ul>
            </div>
            <img className="right" src={Step1Img} alt="airport"></img>
          </article>
          <article className="card">
            <div>
              <h4 className="card__title">STEP 2 ???????????? ?????? ??? ??????</h4>
              <ul>
                <li className="card__list">
                  ?????? ??? ???????????? ???????????? ????????? ????????? ????????? ??????????????? ?????????????????? ???????????????
                  ??? ????????? ????????????
                </li>
                <li className="card__list">
                  ???????????? ?????????, ?????????????????? ?????? ??? ????????? ????????? ????????? ???????????? ???????????????.
                </li>
                <li className="card__list">
                  ????????? ??????????????? ?????? ??? ???????????? ?????? ?????? ??? ??????????????? ????????????. ????????????
                  ????????? ????????? ?????????????????? ???????????? ?????????, ????????? ????????? ?????? ????????? ????????????
                  ??????????????? ???????????? ??????, ??? ??? ????????? ??????????????? ???????????????.
                </li>
              </ul>
            </div>
          </article>
          <article className="card">
            <div>
              <h4 className="card__title">STEP 3 ???????????? ?????? ??? ??????</h4>
              <ul>
                <li className="card__list">
                  ???????????? ?????????????????? ?????? ????????? ????????? ????????? ???????????? ?????????????????? ?????????
                  ????????? ??? ????????? ????????? ?????? ??????????????? ?????????.
                </li>
                <li className="card__list">
                  ???????????? ??????????????? ????????? ???????????? ?????? ???????????? ???????????? 30???????????? ????????? ???
                  ?????? ??? ????????????.
                </li>
                <li className="card__list">
                  ???????????? ????????? ??? ??? ?????? ????????? ?????????????????? ???????????? ?????????????????? ????????? ??????
                  ??? ??????????????? ????????? ?????? ????????????????????????.
                </li>
              </ul>
            </div>
            <img className="right" src={Step3Img} alt="airport"></img>
          </article>
          <article className="card">
            <img className="left" src={Step4Img} alt="airport"></img>
            <div>
              <h4 className="card__title">STEP 4 ???????????? ??? ????????? ??????</h4>
              <ul>
                <li className="card__list">
                  ?????? ??? ????????? ???????????? ???????????? ?????? ???????????? ????????????. ?????? ?????? ????????? ???
                  ???????????? ????????? Poter service??? ???????????? ??????????????? ?????????.
                </li>
                <li className="card__list">?????? ????????? ????????? ??????????????? ???????????????.</li>
                <li className="card__list">
                  ??????????????? ????????? ?????? ??? ????????? ??????????????? ?????? ???????????? ??????????????? :)
                </li>
              </ul>
            </div>
          </article>
          <h3 className="last-title">
            ??????????????? ???????????? ??????????????? ???????????? ????????????!???
            <br />
            ?????????????????? ???????????? ?????? ????????? ????????? ?????? ????????? ??? ???????????? ?????????????????? ???????????????
            :)
          </h3>
          <p className="last-desc">
            ???????????? ??? ???????????? ?????? ???????????? ??? ???????????? ???????????? ???????????? ????????? ???????????????
            ??????????????? ????????? ?????????.
            <br />
            ?????? ????????? ???????????? ??????????????? Letter??? ????????? ????????? ????????? ?????????????????? ????????? ?????????
            ?????? ????????? ?????? ????????????!
          </p>
          <div className="inquiry">
            ??????(???????????? ??????) ????????? ?????? ??????????????? ???????????? ??????, ?????????????????? ?????? ?????????
            ????????? ?????? ??? ????????????. <br />
            ???????????? ????????? ????????? ???????????? ???????????? ?????? ????????? ?????? ??????????????? ?????? ??????????????????.
          </div>
        </section>
        <div className="button-area">
          <Styled.Button
            rounded
            padding="1.6rem 7.1rem"
            font="button"
            onClick={() => history.push('/dog/search')}
          >
            ?????? ?????? ?????? ??????
          </Styled.Button>
          <Styled.Button
            rounded
            padding="1.6rem 6.6rem"
            font="button"
            onClick={() => history.push(isLogin ? '/dog/enroll/caution' : 'login')}
          >
            ????????? ???????????? ??????
          </Styled.Button>
        </div>
      </div>
    </Styled.Wrapper>
  );
};

export default InfoProcedure;
