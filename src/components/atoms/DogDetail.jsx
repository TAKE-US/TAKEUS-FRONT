import React, { useEffect } from 'react';
import { withRouter, useHistory } from 'react-router-dom'; // useHistory
import styled from "styled-components";
import DeleteIcon from '../../assets/img/ic_delete.svg';
import EditIcon from '../../assets/img/ic_edit.svg';
 
import { Swiper, DogDetailInfo, CopyLinkButton } from "../"; //DogDetailInfo,
 
const DogDetailWrap = styled.div`
 display: flex;
 flex-direction: column;
 width: 75%;
 
 .goBack {
   width: 14%;
   height: 6%; 
   margin-bottom: 7%;
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
   flex-direction: row;
   justify-content: space-between;
 }
  .dog {
   &--title{
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
 
     .delete, .edit {
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
 
       div {
         width: 3rem;
         height: 1.5rem;
       }
     }
 
     .edit {
       margin-right: 0.8rem;
     }
   }
 
   &--detail {
     display: flex;
     flex-direction: row;
     font-size: 1.6rem;
     width: 100%;
     color: ${({ theme }) => theme.color.gray3};
 
     .swiperAndLink{
       display: flex;
       flex-direction: column;
     }
   }
 
   &--description {
     width: 101.6rem;
     height: 17.6rem;
     padding: 2.4rem 3.2rem;
     margin-bottom: 4rem;
     text-align: left;
     border: 1px solid ${({ theme }) => theme.color.lightgray1};
     font: ${({ theme }) => theme.font.body1};
     color: ${({ theme }) => theme.color.darkgray1};
     border-radius: 1.7rem;
     line-height: 1rem;
   }
 }
`;
 
const DogDetail = ({ dogs, match }) => {
 let history = useHistory();
 
  useEffect(() => {
    console.log(dogs);
    console.log(match.params.id);
 }, [dogs, match]);
 
 return (
   <DogDetailWrap>
     {dogs?.map(dog => (
       (dog._id === match.params.id) &&
       (<>
          <button
            className="goBack"
            type="button"
            onClick={history.goBack}
          >
            다시 목록으로
          </button>
          <div className="line"></div>
          <header>
            <div className="dog--title">
              <h1>{dog.name}</h1>
              <h2>단체 | {dog.institutionName}</h2>
            </div>
            <div className="dog--post">
              <button className="edit">
                <img src={EditIcon} alt="edit"></img>
                <div>수정</div>
              </button>
              <button className="delete">
                <img src={DeleteIcon} alt="delete"></img>
                <div>삭제</div>
              </button>
            </div>
          </header>
          <section className="dog--detail">
            <div className="swiperAndLink">
              <Swiper images={dog.photos} />
              <CopyLinkButton />
            </div>
            <DogDetailInfo dog={dog} />
          </section>
          <article className="dog--description">
            {dog.detail}
          </article>
        </>)
     ))}
     </DogDetailWrap>
 );
};
export default withRouter(DogDetail);
