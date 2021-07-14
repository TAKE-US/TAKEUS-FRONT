import React, { useState } from 'react';
import styled from 'styled-components';

import { Modal } from 'components';
import { ReactComponent as DeleteIcon } from "assets/img/ic_delete.svg";
import { ReactComponent as DeleteModalIcon } from "assets/img/img_delete.svg";

const Styled = {
  Wrapper: styled.div`
    .close {
      width: 8.6rem;
      height: 4rem;
      display: flex;
      padding: 0.7rem 1.5rem 0.7rem 1.1rem;
      align-items: center;
      border: 0.1rem solid ${({ theme }) => theme.color.lightgray2};
      font: ${({ theme }) => theme.font.button_middle};
      color: ${({ theme }) => theme.color.darkgray1};
      border-radius: 0.8rem;

      .text {
        width: 3rem;
        margin-left: 0.4rem;
        white-space: nowrap;
      }
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
      
      .cancelbtn {
        font: ${({ theme }) => theme.font.button};
        color: ${({theme}) => theme.color.gray1};
      }
      .deletebtn {
        font: ${({ theme }) => theme.font.button};
        color: ${({theme}) => theme.color.primary_dark};
      }
    }
  `,
};

const ReportModal = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <Styled.Wrapper>
      <button className="close" onClick={openModal}>
        <DeleteIcon />
        <span className="text">삭제</span>
      </button>
      <Modal open={modalOpen} close={closeModal}>
        <Styled.Content>
          <DeleteModalIcon />
          <div className="text">
            <h1>정말 삭제하시겠어요?</h1>
            <p>
              삭제한 게시물은 복구가 불가능해요!<br />
              신중하게 검토한 후 삭제해 주세요.
            </p>
          </div>
          <div className="button">
            <button className="cancelbtn" onClick={closeModal}>취소</button>
            <button className="deletebtn">삭제</button>
          </div>
        </Styled.Content>
      </Modal>
    </Styled.Wrapper>
  );
};

export default ReportModal;