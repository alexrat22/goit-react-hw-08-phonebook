import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 15px 0;
`;
export const AddButton = styled.button`
  width: 120px;
  padding: 5px 0;
  margin: 10px auto;
  border: transparent;
  border-radius: 8px;
  background-color: rgba(86, 141, 229, 1);
  color: #fff;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  transition-property: background-color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    background-color: green;
  }
`;

export const Input = styled.input`
  width: 300px;
  border: none;
  margin-right: auto;
  margin-left: auto;
  padding: 5px;
  border-radius: 8px;
  outline: none;
`;
