import React from 'react';
import styled from 'styled-components';

import Delete from 'assets/icon/ic_delete_18.svg';

const Styled = {
  Wrapper: styled.div`
    display: ${props => props.open ? 'flex' : 'none'};
    align-items: center;
    justify-content: center;
  `,

  Section: styled.section`
  
  `,
};

const Modal = ({ open, close, children}) => {
  return (
    <Styled.Wrapper open={open}>
      { open ? (
      <Styled.Section>
        <header className="header">
          <button className="button" onClick={close}>
            <img src={Delete} alt="" />
          </button>
        </header>
        <main className="main">
          {children}
        </main>
      </Styled.Section>
      ):null}
    </Styled.Wrapper>
  );
};

export default Modal;