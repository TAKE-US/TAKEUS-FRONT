import React, { useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

import { Modal } from "components";
import { ReactComponent as ReportIcon } from "assets/img/ic_report_24.svg";
import { ReactComponent as ReportModalIcon } from "assets/img/img_report.svg";

const Styled = {
  Wrapper: styled.div`
    .report {
      width: 11.1rem;
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

      :hover {
        background: ${({ theme }) => theme.color.lightgray1};
      }
    }
  `,

  Content: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 8rem;

    .text {
      text-align: center;
      margin-top: 1.6rem;

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
      .reportbtn {
        font: ${({ theme }) => theme.font.button};
        color: ${({ theme }) => theme.color.error_red};
      }
    }
  `,
};

const ReportModal = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const history = useHistory();

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const reportClick = () => {
    closeModal();
    history.goBack();
  };

  return (
    <Styled.Wrapper>
      <button className="report" onClick={openModal}>
        <ReportIcon />
        <span className="text">신고하기</span>
      </button>
      <Modal open={modalOpen} close={closeModal}>
        <Styled.Content>
          <ReportModalIcon />
          <div className="text">
            <h1>정말 신고하시겠어요?</h1>
            <p>
              허위 내용 및 광고성 게시글은 신고가 가능합니다.
              <br />
              해당 게시물은 관리자의 검토 후 필요에 따라 삭제처리됩니다.
            </p>
          </div>
          <div className="button">
            <button className="cancelbtn" onClick={closeModal}>
              취소
            </button>
            <button className="reportbtn" onClick={reportClick}>
              신고
            </button>
          </div>
        </Styled.Content>
      </Modal>
    </Styled.Wrapper>
  );
};

export default ReportModal;
