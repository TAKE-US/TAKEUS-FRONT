import React, { useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

import {
  postDogDetailReport
} from '../../../lib/api/index.ts';

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

const ReportModal = ({id}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const history = useHistory();

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const reportClick = async () => {
    await postDogDetailReport(localStorage.getItem('token'), id);
    closeModal();
    history.goBack();
  };

  return (
    <Styled.Wrapper>
      <button className="report" onClick={openModal}>
        <ReportIcon />
        <span className="text">????????????</span>
      </button>
      <Modal open={modalOpen} close={closeModal}>
        <Styled.Content>
          <ReportModalIcon />
          <div className="text">
            <h1>?????? ??????????????????????</h1>
            <p>
              ?????? ?????? ??? ????????? ???????????? ????????? ???????????????.
              <br />
              ?????? ???????????? ???????????? ?????? ??? ????????? ?????? ?????????????????????.
            </p>
          </div>
          <div className="button">
            <button className="cancelbtn" onClick={closeModal}>
              ??????
            </button>
            <button className="reportbtn" onClick={reportClick}>
              ??????
            </button>
          </div>
        </Styled.Content>
      </Modal>
    </Styled.Wrapper>
  );
};

export default ReportModal;
