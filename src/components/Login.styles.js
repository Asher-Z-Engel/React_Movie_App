import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 320px;
  margin: 0 auto;
  padding: 20px;
  color: var(--darkGrey);

  input {
    width: 100%;
    height: 30px;
    border-radius: 20px;
    padding: 10px;
    margin-top: 20px;
    color: var(--darkGrey);
  }

  .error {
    color: red;
  }
`;