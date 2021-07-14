import React, { useState } from 'react';
import styled from 'styled-components';

import { Modal } from 'components';
import { ReactComponent as DeleteIcon } from "assets/img/ic_delete.svg";

const Styled = {
  Wrapper: styled.div`
    .button {
      display: flex;
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
      <button className="button" onClick={openModal}><DeleteIcon />삭제</button>
      <Modal open={modalOpen} close={closeModal}>
        정말 삭제하시겠어요?
      </Modal>
    </Styled.Wrapper>
  );
};

export default ReportModal;