import styled from 'styled-components';

const EnrollInfoWrap = styled.section`
  .wrap {
    margin-top: 6rem;
    padding: 0 12rem;
    label {
      min-width: 15.2rem;
      font: ${({ theme }) => theme.font.title2};
    }

    &:last-child {
      margin-top: 8rem;
      margin-bottom: 18rem;
    }
    &--flex {
      display: flex;
      align-items: center;
    }

    &--add {
      width: 100%;
      height: 20rem;
    }
    &.contact {
      .contact-layer {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-auto-rows: 3.2rem;
        column-gap: 1.9rem;
        row-gap: 1.2rem;
        margin-top: 2.4rem;
      }
      .contact__btn {
        svg {
          width: calc(2.4rem - 0.2rem);
          height: calc(2.4rem - 0.2rem);
          margin-right: 0.8rem;
          stroke: ${({ theme }) => theme.color.primary};
        }
        &:hover {
          svg {
            stroke: ${({ theme }) => theme.color.white};
          }
        }
      }
    }
  }
  .dropdown {
    position: relative;
    display: flex;
    font: ${({ theme }) => theme.font.button};
    color: ${({ theme }) => theme.color.gray3};
    &::after {
      content: '';
      width: 0;
      top: 0;
      right: 0;
      margin: 0 1rem;
      border-right: solid 1px ${({ theme }) => theme.color.lightgray2};
    }
  }
`;

export default EnrollInfoWrap;
