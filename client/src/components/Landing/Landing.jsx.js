import styled from "styled-components";

export const LandingContainer = styled.div`
  font-size: 6rem;
  width: 100%;
  padding: 0.5rem;

  @media only screen and (max-width: 1000px) {
    font-size: 5rem;
  }

  & div {
    width: 50%;
    text-align: center;
    margin: 17rem auto;

    @media only screen and (max-width: 1200px) {
      margin: 10rem auto;
    }
  }
`;
