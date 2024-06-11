import styled from "styled-components";

const StyledBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: green;
  margin: 2rem;
  background-color: ${(props) =>
    props.$isBlack === "isBlack" ? "black" : "green"};

  &:hover {
    background-color: red;
  }
`;

export default function BoxWithStyledComponents({ $isBlack }) {
  return <StyledBox $isBlack={$isBlack} />;
}
