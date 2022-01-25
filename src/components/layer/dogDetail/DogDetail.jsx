import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";

import { ReactComponent as EditIcon } from 'assets/img/ic_edit.svg';
import { Swiper, DogDetailInfo, CopyLinkButton, DeleteModal, ReportModal, MatchingModal } from 'components';

import { putDogStatus } from "lib/api/sample";

const DogDetailWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .goBack {
    width: 14%;
    height: 6%;
    margin-bottom: 3.2rem;
    font: ${({ theme }) => theme.font.body2};
    color: ${({ theme }) => theme.color.gray3};
    text-align: left;
    text-decoration: underline;
    text-underline-position: under;
  }

  .line {
    width: 100%;
    border: 0.1rem solid ${({ theme }) => theme.color.lightgray2};
  }

  header {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
  }
  .dog {
    &--title {
      display: flex;
      flex-direction: column;
      margin: 2.7rem 0rem;

      h1 {
        font: ${({ theme }) => theme.font.display2};
        color: ${({ theme }) => theme.color.black};
      }

      h2 {
        margin-top: 1.8rem;
        width: 30rem;
        height: 2.6rem;
        font: ${({ theme }) => theme.font.subheading};
        color: ${({ theme }) => theme.color.darkgray1};
      }
    }

    &--post {
      margin-top: 2.4rem;
      display: flex;
      flex-direction: row;

      .edit {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0;
        width: 8.6rem;
        height: 4rem;
        border: 0.1rem solid ${({ theme }) => theme.color.lightgray2};
        box-sizing: border-box;
        border-radius: 0.8rem;
        font: ${({ theme }) => theme.font.button_middle};

        :hover {
          background: ${({ theme }) => theme.color.lightgray1};
        }

        div {
          width: 3rem;
          height: 1.5rem;
        }
      }

      .edit {
        margin-right: 0.8rem;
      }
    }

    &--images {
      display: flex;
      flex-direction: row;
      font-size: 1.6rem;
      width: 100%;
      color: ${({ theme }) => theme.color.gray3};

      .swiperAndLink {
        display: flex;
        flex-direction: column;
      }
    }

    &--detail {
      width: 100%;
      height: 17.6rem;
      padding: 2.4rem 3.2rem;
      margin-bottom: 4rem;
      text-align: left;
      border: 1px solid ${({ theme }) => theme.color.lightgray1};
      font: ${({ theme }) => theme.font.body1};
      color: ${({ theme }) => theme.color.darkgray1};
      border-radius: 1.7rem;
      line-height: 140%;
    }
  }

  .match-button {
    display: flex;
    justify-content: flex-end;
  }
`;

const DogDetail = ({ dog }) => {
  const history = useHistory();
  const [myPost, setMyPost] = useState(false);
  const isLogin = localStorage.getItem("token");
  const myId = localStorage.getItem("ID");
  const [dogStatus, setDogStatus] = useState("waiting");

  const handleClick = () => {
    putDogStatus(dog._id, { status: 'done' });
    setDogStatus('done');
  };
  const goEditPage = () => history.push({ pathname: `${dog._id}/edit`, state: { dog } });

  useEffect(() => {
    if (myId === dog.user) setMyPost(true);
    dog.status === "done" ? setDogStatus("done") : setDogStatus("wating");
  }, [dog, myId]);

  const handleClick = () => {
    const data = {
      status: 'done',
    };
    putDogStatus(dog._id, data);
    setDogStatus('done');
  };

  const goEditPage = () => {
    history.push({ pathname: `${dog._id}/edit`, state: { dog } });
  };

  console.log('dog', dog.instituionName, dog);

  return (
    <DogDetailWrap>
      <button className="goBack" type="button" onClick={history.goBack}>
        다시 목록으로
      </button>
      <div className="line"></div>
      <header>
        <div className="dog--title">
          <h1>{dog.name}</h1>
          <h2>{dog.isInstitution ? `단체 | ${dog.institutionName}` : "개인구조자"}</h2>
        </div>
        {isLogin &&
          (myPost ? (
            <div className="dog--post">
              <button className="edit" onClick={goEditPage}>
                <EditIcon width="20" height="20" />
                <div>수정</div>
              </button>
              <DeleteModal id={dog._id} />
            </div>
          ) : (
            <div className="dog--post">
              <ReportModal id={dog._id} />
            </div>
          ))}
      </header>
      <section className="dog--images">
        <div className="swiperAndLink">
          <Swiper images={dog.photos?.filter((v) => v.length > 0)} />
          <CopyLinkButton />
        </div>
        <DogDetailInfo dog={dog} />
      </section>
      <article className="dog--detail">{dog.detail}</article>
      {isLogin && myPost && (
        <div className="match-button">
          <MatchingModal handleClick={handleClick} dogStatus={dogStatus} />
        </div>
      )}
    </DogDetailWrap>
  );
};
export default DogDetail;
