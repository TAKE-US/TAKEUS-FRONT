import React, { useState } from "react";
import styled from "styled-components";

import { Modal } from "components";
import { ReactComponent as DeleteModalIcon } from "assets/img/img_delete.svg";

const Styled = {
  Wrapper: styled.div`
    .delete {
      font: ${({ theme }) => theme.font.body1};
      color: ${({ theme }) => theme.color.gray2};
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
        color: ${({ theme }) => theme.color.gray1};
      }
      .deletebtn {
        font: ${({ theme }) => theme.font.button};
        color: ${({ theme }) => theme.color.primary_dark};
      }
    }
  `,
};

const ReviewDeleteModal = ({ deleteHandler, id }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = e => {
    setModalOpen(true);
  };

  const closeModal = e => {
    setModalOpen(false);
  };

  return (
    <Styled.Wrapper>
      <button className="delete" onClick={openModal}>
        삭제
      </button>
      <Modal open={modalOpen} close={closeModal}>
        <Styled.Content>
          <DeleteModalIcon />
          <div className="text">
            <h1>정말 삭제하시겠어요?</h1>
            <p>
              삭제한 게시물은 복구가 불가능해요!
              <br />
              신중하게 검토한 후 삭제해 주세요.
            </p>
          </div>
          <div className="button">
            <button className="cancelbtn" onClick={closeModal}>
              취소
            </button>
            <button
              className="deletebtn"
              onClick={evt => {
                deleteHandler(evt, id);
                closeModal();
              }}
            >
              삭제
            </button>
          </div>
        </Styled.Content>
      </Modal>
    </Styled.Wrapper>
  );
};

export default ReviewDeleteModal;
