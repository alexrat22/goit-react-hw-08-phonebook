import styled from '@emotion/styled';

export const Form = styled.form`
  width: 400px;
  padding: 30px;
  padding-bottom: 20px;
  margin: 80px auto;
  border-radius: 8px;
  background-color: rgba(86, 141, 229, 0.9);
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Input = styled.input`
  padding: 10px 15px;
  border-radius: 8px;
  border: transparent;
  outline: none;
`;

export const Button = styled.button`
  width: 150px;
  font-size:14px;
  font-weight: 600;
  padding: 8px 0;
  margin-right: auto;
  margin-left: auto;
  border-radius: 8px;
  border: transparent;
  background-color: rgb(180,180,180);
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  transition-property: color, background-color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    color: #fff;
    background-color: tomato;
`;
