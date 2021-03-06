import React from 'react';
import styled from 'styled-components';

import EmptyDot from '../../assets/img/img_emptyDot.svg';
import FullDot from '../../assets/img/img_fullDot.svg';

const DotWrap = styled.div`
  position: absolute;
  top: 90%;
`;

const DotRow = styled.div`
  display: flex;
  flex-direction: row;
  img {
    width: 0.886rem;
    height: 0.886rem;
    margin: 0.532rem;
  } 
`;

function PaginationDot({ index, imagesLength }) {
  return (
    <DotWrap>
      <DotRow
        index={index}
        imagesLength={imagesLength}
      >
        {[...Array(imagesLength)].map((x, i) =>
          (index === i)
            ? <img key={i} src={FullDot} alt="dot" />
            : <img key={i} src={EmptyDot} alt="dot" />
        )}
      </DotRow>
    </DotWrap>

  );
}

export default PaginationDot;
