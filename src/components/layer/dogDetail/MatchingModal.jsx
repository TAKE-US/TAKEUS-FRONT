import React, { useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

import { Modal } from "components";
import { ReactComponent as CompeleteModalIcon } from "assets/img/img_compelete.svg";

const Styled = {
  Wrapper: styled.div`
    .waiting,
    .done {
      padding: 1.4rem 3rem;
      border-radius: 5rem;
      color: ${({ theme }) => theme.color.white};
      font: ${({ theme }) => theme.font.button};
    }

    .waiting {
      background: ${({ theme }) => theme.color.primary};
    }

    .waiting:hover {
      background: ${({ theme }) => theme.color.primary_light};
    }

    .done {
      cursor: not-allowed;
      pointer-events: none;
      background: ${({ theme }) => theme.color.lightgray2};
    }
  `,

  Content: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 4.9rem;

    .text {
      text-align: center;
      margin-top: 0.5rem;

      h1 {
        font: ${({ theme }) => theme.font.title2};
        color: ${({ theme }) => theme.color.darkgray2};
      }

      p {
        margin-top: 0.6rem;
        font: ${({ theme }) => theme.font.body1};
        color: ${({ theme }) => theme.color.gray3};
        line-height: 1.9rem;
      }
    }

    .button {
      width: 18rem;
      display: flex;
      justify-content: space-between;
      margin-top: 4.2rem;
    }

    .cancelbtn {
      font: ${({ theme }) => theme.font.button};
      color: ${({ theme }) => theme.color.gray1};
    }
    .completebtn {
      font: ${({ theme }) => theme.font.button};
      color: ${({ theme }) => theme.color.primary_dark};
    }
  `,
};

const ReportModal = ({ dogStatus, handleClick }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const history = useHistory();

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const matchingClick = () => {
    handleClick();
    history.goBack();
  };

  return (
    <Styled.Wrapper>
      <button
        className={dogStatus === "done" ? "done" : "waiting"}
        onClick={openModal}
      >
        <span>매칭 완료</span>
      </button>
      <Modal open={modalOpen} close={closeModal}>
        <Styled.Content>
          <CompeleteModalIcon />
          <div className="text">
            <h1>매칭이 완료되셨나요?</h1>
            <p>
              매칭이 완료되면 &apos;대상견 탐색&apos;에서 더 이상
              <br />
              게시물이 노출되지 않아요!
            </p>
          </div>
          <div className="button">
            <button className="cancelbtn" onClick={closeModal}>
              취소
            </button>
            <button className="completebtn" onClick={matchingClick}>
              완료
            </button>
          </div>
        </Styled.Content>
      </Modal>
    </Styled.Wrapper>
  );
};

export default ReportModal;
