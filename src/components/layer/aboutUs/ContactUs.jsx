import React from 'react';
import styled from 'styled-components';

import { ContactUsInput, ContactUsDetails } from 'components';


const Styled = {
  Header: styled.header`
    display: flex;
    align-items: center;
    
    .h1 {
      width: 20.6rem;
      font: ${({theme}) => theme.font.headline};
      color: ${({ theme }) => theme.color.darkgray1};
      ::after {
        content: "";
        display: block;
        float: right;
        background-color: ${({ theme }) => theme.color.lightgray2};
        width: 0.2rem;
        height: 3.3rem;
      }
    } 

    .h2 {
      font: ${({theme}) => theme.font.body2};
      color: ${({ theme }) => theme.color.darkgray1};
      margin-left: 4.8rem;
    }
  `,

  Content: styled.div`
    margin-top: 7.3rem;
    display: flex;
    justify-content: space-between;
  `,
};

const ContactUs = () => {

  return (
    <>
      <Styled.Header>
        <h1 className="h1">Contact US</h1>
        <h2 className="h2">언제든지 연락 주세요. 확인하는대로 회신 드리겠습니다 :)</h2>
      </Styled.Header>
      <Styled.Content>
        <ContactUsInput />
        <ContactUsDetails />
      </Styled.Content>
    </>
  );
};

export default ContactUs;