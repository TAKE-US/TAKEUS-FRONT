import React from "react";
import styled from "styled-components";

// import { ReactComponent as NaverMail } from "assets/img/ic_mail_n_black_40.svg";
import NaverMail from "assets/img/ic_mail_n_black_40.svg";
import { ReactComponent as GoogleMail } from "assets/img/ic_mail_g_black_40.svg";
import { ReactComponent as InstaImg } from "assets/img/ic_instagram_black_40.svg";
import { ReactComponent as KakaoImg } from "assets/img/ic_kakao_black_40.svg";

const Styled = {
  Details: styled.section`
    width: 42.5rem;
    height: 51.2rem;
    border: 0.5px solid ${({ theme }) => theme.color.gray2};
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 1.3rem;

    .detailinner {
      width: 33.2rem;
      height: 42.6rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .detailheader {
        font: ${({ theme }) => theme.font.title2};
        color: ${({ theme }) => theme.color.black};
      }

      .detailtext {
        margin-top: 2rem;
        font: ${({ theme }) => theme.font.body1};
        color: ${({ theme }) => theme.color.gray2};
        white-space: nowrap;
        line-height: 2.3rem;
      }
    }

    .call {
      height: 9.4rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .sns {
      height: 9.4rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .line {
      height: 0;
      margin: 1rem 0;
      border-top: solid 0.1rem ${({ theme }) => theme.color.gray2};
    }
  `,

  Communication: styled.div`
    width: 100%;
    height: 2.7rem;
    display: flex;
    align-items: center;
    font: ${({ theme }) => theme.font.body2};
    color: ${({ theme }) => theme.color.gray3};
    & > span {
      margin-left: 2.8rem;
    }
  `,
};

const ContactUsDetails = () => {
  return (
    <Styled.Details>
      <div className="detailinner">
        <div>
          <h3 className="detailheader">Contact Details</h3>
          <p className="detailtext">
            아래 경로를 통해서도 테이커스와 연락을 하실 수 있습니다! <br />
            또한 SNS 계정으로 오시면 테이커스가 하는 다양한 활동을 <br />
            둘러보실 수 있어요 :)
          </p>
        </div>
        <div className="call">
          <Styled.Communication>
            {/* <NaverMail /> */}
            <img src={NaverMail} alt="" />
            <span>takeus28@naver.com</span>
          </Styled.Communication>
          <Styled.Communication>
            <GoogleMail />
            <span>takeus28@gmail.com</span>
          </Styled.Communication>
        </div>
        <div className="line"></div>
        <div className="sns">
          <Styled.Communication>
            <InstaImg />
            <span>takeus_2125</span>
          </Styled.Communication>
          <Styled.Communication>
            <KakaoImg />
            <span>TAKEUS</span>
          </Styled.Communication>
        </div>
      </div>
    </Styled.Details>
  );
};

export default ContactUsDetails;
