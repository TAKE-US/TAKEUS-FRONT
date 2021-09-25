import React, { useRef } from "react";
import styled from "styled-components";
import { useDetectOutsideClick } from "hooks/useDetectOutsideClick";
// import { getMyData } from "lib/api/sample";

const Styled = {
  Wrap: styled.div`
    position: relative;
  `,

  Btn: styled.div`
    font: ${({ theme }) => theme.font.gnb};
    color: ${({ isActive, theme }) =>
      isActive ? theme.color.primary : theme.color.darkgray1};
    white-space: nowrap;

    &:hover {
      cursor: pointer;
      color: ${({ theme }) => theme.color.primary};
    }
  `,

  Status: styled.div`
    position: absolute;
    right: -0.9rem;
    top: 3rem;
    display: ${props => (props.isActive ? "flex" : "none")};
    flex-direction: column;
    background-color: ${({ theme }) => theme.color.white};
    padding: 1.9rem 1.7rem;
    border-radius: 1rem;

    .avatar {
      display: flex;
      background-color: ${({ theme }) => theme.color.lightgray1};
      margin-right: 0.7rem;
      font: ${({ theme }) => theme.font.body2};
      width: 3.8rem;
      height: 3.8rem;
      border-radius: 1.9rem;
      color: #686868;
      justify-content: center;
      align-items: center;
    }

    .email {
      font: ${({ theme }) => theme.font.body3};
      margin-right: 2rem;
    }

    .profile {
      display: flex;
      padding-bottom: 1.4rem;
      align-items: center;
      justify-content: space-between;
      border-bottom: 0.1rem solid ${({ theme }) => theme.color.lightgray2};

      .logout {
        font: ${({ theme }) => theme.font.body3};
        white-space: nowrap;
        border: 0.05rem solid ${({ theme }) => theme.color.gray1};
        border-radius: 0.5rem;
        padding: 0.4rem 0.7rem;
      }
    }

    .nav {
      display: flex;
      padding-top: 1.5rem;

      .page {
        font: ${({ theme }) => theme.font.body3};
        background-color: ${({ theme }) => theme.color.lightgray1};
        padding: 1rem 2.2rem;
        border-radius: 0.5rem;
        white-space: nowrap;

        :first-child {
          margin-right: 0.5rem;
        }
      }
    }
  `,
};

const LogOut = ({ children }) => {
  const statusRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(statusRef, false);
  // const [email, setEmail] = useState("takeus@gmail.com");

  // useEffect(() => {
  //   (async () => {
  //     const data = await getMyData();
  //     console.log(data);
  //   })();
  // }, []);

  const onClick = e => {
    e.preventDefault();
    setIsActive(!isActive);
  };

  const logoutClick = () => {
    console.log("click");
    localStorage.removeItem("token");
  };

  return (
    <Styled.Wrap>
      <Styled.Btn onClick={onClick} isActive={isActive}>
        {children}
      </Styled.Btn>
      <Styled.Status ref={statusRef} isActive={isActive}>
        <div className="profile">
          <div className="avatar">T</div>
          <div className="email">takeus@gmail.com</div>
          <button className="logout" onClick={logoutClick}>
            로그아웃
          </button>
        </div>
        <div className="nav">
          <div className="page">이동봉사 모집글</div>
          <div className="page">이동봉사 후기글</div>
        </div>
      </Styled.Status>
    </Styled.Wrap>
  );
};

export default LogOut;
