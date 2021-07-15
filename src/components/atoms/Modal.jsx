import React from "react";
import styled from "styled-components";

import Delete from "assets/icon/ic_delete_18.svg";

const Styled = {
  Wrapper: styled.div`
    display: ${props => (props.open ? "flex" : "none")};
    align-items: center;
    justify-content: center;
    transition: display 0.6s;
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 20;
  `,

  Section: styled.section`
    display: flex;
    flex-direction: column;
    width: 36rem;
    height: 42.6rem;
    border-radius: 1rem;
    background: ${({ theme }) => theme.color.white};

    .header {
      display: flex;
      justify-content: left;
      position: relative;
      top: 1.8rem;
      left: 31.8rem;

      .button {
        border: none;
        width: 1.8rem;
        height: 1.8rem;
        padding: 0;
      }
    }
  `,
};

const Modal = ({ open, close, children }) => {
  return (
    <Styled.Wrapper open={open}>
      {open ? (
        <Styled.Section>
          <header className="header">
            <button className="button" onClick={close}>
              <img src={Delete} alt="" />
            </button>
          </header>
          <main className="main">{children}</main>
        </Styled.Section>
      ) : null}
    </Styled.Wrapper>
  );
};

export default Modal;
