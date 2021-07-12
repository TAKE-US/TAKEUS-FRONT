import React from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';

import { Searchbar } from 'components';
import { ReactComponent as RegisterBtn } from 'assets/img/btn_register.svg';

const Styled = {
  Wrapper: styled.div`
    .empty {
      height: 8.8rem;
    }
  `,

  Search: styled.div`
    width: 100vw;
    margin-left: calc(-50vw + 50%);
    height: 24rem;
    background: linear-gradient(92.22deg, rgba(255, 239, 175, 0.31) 28%, rgba(255, 239, 175, 0.17) 73.01%);

    .header {
      padding-top: 5.4rem;
      text-align: center;
      font: ${({ theme }) => theme.font.display1};
      span {
        color: ${({theme}) => theme.color.primary};
      }
    }

    .search {
      display: flex;
      justify-content: center;
      padding-top: 2.4rem;
    }
  `,
};

const ReviewSearch = () => {
  const history = useHistory();

  return (
    <Styled.Wrapper>
      <div className="empty"></div>
      <Styled.Search>
        <h1 className="header">봉사자들의 생생한 <span>이동 봉사 후기</span>를 만나보세요</h1>
        <div className="search">
          <Searchbar />
          <button className="button">
            <RegisterBtn
              onClick={() => history.push('/review/post')}
            />
          </button>
        </div>
      </Styled.Search>
    </Styled.Wrapper>
  );
};

export default ReviewSearch;