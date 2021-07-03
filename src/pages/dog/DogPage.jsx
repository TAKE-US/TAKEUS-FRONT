import React from "react";
import { DogCardContainer, PaginationNav } from "../../components";
import styled from "styled-components";

const dogs = [
  {
    id: 1,
    name: "멍멍이",
    location: "시카고",
    info: "암컷ㅣ9KGㅣ중성화 유ㅣ접종 무"
  },
  {
    id: 2,
    name: "멍멍이2",
    location: "일리노이",
    info: "암컷ㅣ9KGㅣ중성화 유ㅣ접종 무"
  },
  {
    id: 3,
    name: "멍멍이3",
    location: "시카고",
    info: "암컷ㅣ9KGㅣ중성화 유ㅣ접종 무"
  },
  {
    id: 4,
    name: "멍멍이4",
    location: "시카고",
    info: "암컷ㅣ9KGㅣ중성화 유ㅣ접종 무"
  },
  {
    id: 5,
    name: "멍멍이",
    location: "시카고",
    info: "암컷ㅣ9KGㅣ중성화 유ㅣ접종 무"
  },
  {
    id: 6,
    name: "멍멍이2",
    location: "일리노이",
    info: "암컷ㅣ9KGㅣ중성화 유ㅣ접종 무"
  },
  {
    id: 7,
    name: "멍멍이3",
    location: "시카고",
    info: "암컷ㅣ9KGㅣ중성화 유ㅣ접종 무"
  },
  {
    id: 8,
    name: "멍멍이4",
    location: "시카고",
    info: "암컷ㅣ9KGㅣ중성화 유ㅣ접종 무"
  },
  {
    id: 9,
    name: "멍멍이",
    location: "시카고",
    info: "암컷ㅣ9KGㅣ중성화 유ㅣ접종 무"
  },
  {
    id: 10,
    name: "멍멍이2",
    location: "일리노이",
    info: "암컷ㅣ9KGㅣ중성화 유ㅣ접종 무"
  },
  {
    id: 11,
    name: "멍멍이3",
    location: "시카고",
    info: "암컷ㅣ9KGㅣ중성화 유ㅣ접종 무"
  },
  {
    id: 12,
    name: "멍멍이4",
    location: "시카고",
    info: "암컷ㅣ9KGㅣ중성화 유ㅣ접종 무"
  },
  {
    id: 13,
    name: "멍멍이",
    location: "시카고",
    info: "암컷ㅣ9KGㅣ중성화 유ㅣ접종 무"
  },
  {
    id: 14,
    name: "멍멍이2",
    location: "일리노이",
    info: "암컷ㅣ9KGㅣ중성화 유ㅣ접종 무"
  },
  {
    id: 15,
    name: "멍멍이3",
    location: "시카고",
    info: "암컷ㅣ9KGㅣ중성화 유ㅣ접종 무"
  },
  {
    id: 16,
    name: "멍멍이4",
    location: "시카고",
    info: "암컷ㅣ9KGㅣ중성화 유ㅣ접종 무"
  }
];

const DogPageWrap = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  .container-div {
    padding-bottom: 9.7rem;
    border-bottom: 1px solid ${({ theme }) => theme.color.lightgray2};
  }
`;

const DogPage = () => {
  return (
    <DogPageWrap>
      <div className="container-div">
        <DogCardContainer dogs={dogs} />
      </div>
      <PaginationNav />
    </DogPageWrap>
  );
};

export default DogPage;
