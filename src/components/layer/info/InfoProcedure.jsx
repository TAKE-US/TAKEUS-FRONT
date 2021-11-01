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
        <h3 className="title">Q. 어떤 절차로 이동봉사가 이루어지나요?</h3>
        <section className="content-area">
          <article className="card">
            <div>
              <h4 className="card__title">STEP 1 비행기 탑승 예약</h4>
              <ul>
                <li className="card__list">
                  항공기 편당 탑승 가능한 강아지 자리가 한정되어 있습니다
                </li>
                <li className="card__list">
                  봉사자님의 e-ticket과 연락처를 보내주시면 단체에서 해당 항공편에 보낼 수 있는
                  강아지 자리가 남아있는지 확인하고 예약합니다
                </li>
                <li className="card__list">항공사에 따라 1인 2~3마리까지 가능합니다</li>
                <li className="card__list">
                  일반적으로 동물전용칸의 수화물로 보내지만 작은 아이들의 경우 기내탑승도 가능합니다
                </li>
              </ul>
            </div>
            <img className="right" src={Step1Img} alt="airport"></img>
          </article>
          <article className="card">
            <div>
              <h4 className="card__title">STEP 2 출국서류 준비 및 검역</h4>
              <ul>
                <li className="card__list">
                  출국 할 강아지가 정해지면 단체의 안내를 끝으로 출국전까지 이동봉사자가 신경쓰셔야
                  할 부분은 없습니다
                </li>
                <li className="card__list">
                  건강검진 확인서, 예방접종관련 서류 등 진행에 필요한 서류는 단체에서 준비합니다.
                </li>
                <li className="card__list">
                  검역은 일반적으로 출국 전 검역소에 들러 검역 후 검역서류를 받습니다. 검역소에
                  제출한 강아지 건강증명서와 동물검역 증명서, 그리고 강아지 이동 목적과 여행자가
                  봉사자임을 설명하는 레터, 총 세 가지가 필수적으로 필요합니다.
                </li>
              </ul>
            </div>
          </article>
          <article className="card">
            <div>
              <h4 className="card__title">STEP 3 인천공항 수속 및 출국</h4>
              <ul>
                <li className="card__list">
                  봉사자와 인천공항에서 만날 장소와 시간을 정하고 입양자와 이동봉사자가 서로를
                  알아볼 수 있도록 사진을 찍어 교환하기도 합니다.
                </li>
                <li className="card__list">
                  체크인은 일반적으로 단체의 담당자가 함께 동행하며 평소보다 30분정도의 시간이 더
                  걸릴 수 있습니다.
                </li>
                <li className="card__list">
                  강아지는 무게를 잰 후 대형 수화물 보내는곳으로 옮겨지며 이동봉사자는 티켓을 받은
                  후 단체로부터 서류를 챙겨 출국하시면됩니다.
                </li>
              </ul>
            </div>
            <img className="right" src={Step3Img} alt="airport"></img>
          </article>
          <article className="card">
            <img className="left" src={Step4Img} alt="airport"></img>
            <div>
              <h4 className="card__title">STEP 4 입국수속 및 강아지 전달</h4>
              <ul>
                <li className="card__list">
                  도착 후 수화물 찾는곳에 대상견이 먼저 나와있을 겁입니다. 본인 짐을 챙기신 후
                  대상견은 공항의 Poter service를 이용하여 이동하시면 됩니다.
                </li>
                <li className="card__list">포터 서비스 비용은 입양자분이 지불합니다.</li>
                <li className="card__list">
                  마지막으로 세관에 준비 된 서류를 제출하시면 해외 이동봉사 완료입니다 :)
                </li>
              </ul>
            </div>
          </article>
          <h3 className="last-title">
            입국장으로 나가시면 입양자님이 기다리고 계십니다!️
            <br />
            유기견이었던 강아지가 평생 가족을 만나기 위해 내딛는 첫 발걸음에 동행해주셔서 감사합니다
            :)
          </h3>
          <p className="last-desc">
            입국수속 시 강아지에 대해 묻는다면 이 강아지는 입양자가 기다리고 있으며 이동봉사로
            데려왔다고 하시면 됩니다.
            <br />
            이와 관련해 대부분의 단체에서는 Letter를 준비해 드리며 서류가 준비되어있기 때문에 입국시
            전혀 문제될 일이 없습니다!
          </p>
          <div className="inquiry">
            해당(이동봉사 절차) 정보의 경우 이동봉사를 진행하는 단체, 개인구조자에 따라 약간씩
            차이가 있을 수 있습니다. <br />
            질문이나 자세한 사항은 대상견을 보호하고 있는 단체나 개인 구조자에게 문의 부탁드립니다.
          </div>
        </section>
        <div className="button-area">
          <Styled.Button
            rounded
            padding="1.6rem 7.1rem"
            font="button"
            onClick={() => history.push('/dog/search')}
          >
            이동 봉사 하러 가기
          </Styled.Button>
          <Styled.Button
            rounded
            padding="1.6rem 6.6rem"
            font="button"
            onClick={() => history.push(isLogin ? '/dog/enrollcaution' : 'login')}
          >
            대상견 등록하러 가기
          </Styled.Button>
        </div>
      </div>
    </Styled.Wrapper>
  );
};

export default InfoProcedure;
