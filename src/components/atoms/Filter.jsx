import React, { useRef } from 'react';
import styled from 'styled-components';
//hooks
import { useDetectOutsideClick } from 'hooks/useDetectOutsideClick';
//asset
import downIcon from '../../assets/icon/ic_arrow_bottom_18.svg';

const Wrapper = styled.section`
  display: flex;
  width: 108rem;
`;

const FilterWrap = styled.section`
  position: relative;
  margin-left: auto;
`;
const SelectedFilter = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 9rem;
  background: ${({ theme }) => theme.color.bg_gray};
  border: 1px solid #dfdfdf;
  border-radius: 1.7rem;
  p {
    font: ${({ theme }) => theme.font.button_small};
    line-height: 2.5rem;
    white-space: nowrap;
  }
  img {
    transform: ${(props) => props.isOpen && 'rotate(180deg)'};
    transition: transform 0.3s;
  }
`;
const DropDownWrap = styled.div`
  position: absolute;
  ul {
    display: flex;
    position: absolute;
    flex-direction: column;
    top: 0.8rem;
    padding: 0.6rem;
    background: #ffffff;
    border-radius: 1rem;
    box-shadow: 0 0 3rem 0.1rem rgba(0, 0, 0, 0.1);
  }
  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 7.6rem;
    height: 3.4rem;
    border-radius: 1rem;
    font: ${({ theme }) => theme.font.body1};
    cursor: pointer;
    :hover {
      background: ${({ theme }) => theme.color.lightgray1};
    }
    :last-child::after {
      display: none;
    }
    ::after {
      content: '';
      display: block;
      position: relative;
      top: 0.9rem;
      width: 100%;
      margin: 0 0.7rem;
      border-top: 1px solid #dfdfdf;
    }
  }
`;

const Filter = ({ contents, selectedFilter, setSelectedFilter }) => {
  const dropDownRef = useRef(null);
  const [isOpen, setIsOpen] = useDetectOutsideClick(dropDownRef, false);

  return (
    <Wrapper>
      <FilterWrap>
        <SelectedFilter onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
          <p>{selectedFilter}</p>
          <img src={downIcon} alt="downIcon" />
        </SelectedFilter>
        {isOpen && (
          <DropDownWrap ref={dropDownRef}>
            <ul>
              {contents?.map((content, idx) => (
                <li key={idx} onClick={() => setSelectedFilter(content)}>
                  {content}
                </li>
              ))}
            </ul>
          </DropDownWrap>
        )}
      </FilterWrap>
    </Wrapper>
  );
};

export default Filter;
