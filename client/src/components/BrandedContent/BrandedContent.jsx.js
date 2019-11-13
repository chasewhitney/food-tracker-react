import styled from "styled-components";

export const BrandedCell = styled.div`
  background-color: #ffffff;
  color: black;
  padding: 1rem;
  font-size: 1.5rem;

  display: grid;
  grid-template-columns: min-content 1fr min-content;
  align-items: center;
  justify-items: start;

  &:hover {
    background-color: #eeeeee;
  }

  & img {
    height: 40px;
    margin-right: 2rem;
    grid-row: 1 / 3;
    grid-column: 1 / 2;
  }
  & .name {
    grid-row: 1 / 2;
    grid-column: 2 /3;
  }
  & .brand {
    grid-row: 2 / 3;
    grid-column: 2 /3;
  }
  & .cal {
    grid-row: 1 / 3;
    grid-column: 3 / 4;
  }
`;

export const CellContainer = styled.div`
  pointer-events: auto;
`;

export const Header = styled.h2`
  background-color: #ffffff;
  color: black;
`;