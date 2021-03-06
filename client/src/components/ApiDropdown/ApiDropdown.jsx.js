import styled from "styled-components";

export const Tabs = styled.div`
  position: absolute;
  top: 3rem;
  left: 0;
  overflow: hidden;
  width: 100%;
  box-shadow: 0.5rem 1rem 5rem #363636;
  font-family: "Roboto", Arial, Helvetica, sans-serif;

  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  color: black;
  cursor: pointer;
  font-size: 1.8rem;
  text-transform: uppercase;
  font-weight: bold;
  padding: 2rem 0;
  width: 50%;
  background-color: white;
  text-align: center;

  &:hover {
    background-color: grey;
  }
`;

export const TabContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  width: 100%;
  margin-left: -100%;

  transition: margin-left 0.375s ease-in-out;
`;

export const LabelContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const ContentContainer = styled.div.attrs()`
  position: relative;
  width: 100%;
  overflow: hidden;
  height: ${props => props.size}px;

  transition: height 0.375s ease-in-out;

  & .content-${props => props.currentTab} {
    opacity: 1;
    margin-left: 0;

    & ~ div {
      margin-left: 100%;
    }
  }

  & .content-${props => props.previousTab} {
    opacity: 1;
  }
`;

export const FocusBar = styled.div.attrs(({ width, tab }) => ({
  left: ((tab - 1) * width) / 3,
  right: width - (tab * width) / 3
}))`
  position: relative;
  height: 2px;
  width: 100%;
  background-color: white;

  &.left {
    -webkit-transition: left 0.125s cubic-bezier(0.35, 0, 0.25, 1),
      right 0.25s cubic-bezier(0.35, 0, 0.25, 1);
    transition: left 0.125s cubic-bezier(0.35, 0, 0.25, 1),
      right 0.25s cubic-bezier(0.35, 0, 0.25, 1);
  }

  &.right {
    -webkit-transition: left 0.25s cubic-bezier(0.35, 0, 0.25, 1),
      right 0.125s cubic-bezier(0.35, 0, 0.25, 1);
    transition: left 0.25s cubic-bezier(0.35, 0, 0.25, 1),
      right 0.125s cubic-bezier(0.35, 0, 0.25, 1);
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.left}px;
    right: ${props => props.right}px;
    background-color: #b42857;
    transition: inherit;
  }
`;
