import styled from '@emotion/styled';

export const User = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const UserText = styled.p`
  display: flex;
  align-items: center;
  margin: auto, 0;
  font-size: 20px;
  font-weight: 600;
  color: #fff;
`;

export const Image = styled.img`
  width: 30px;
  border-radius: 50%;
  border: 2px solid white;
  margin-right: 10px;
`;

export const Button = styled.button`
font-size:14px;
  font-weight: 600;
  padding: 5px 20px;
  margin: 20px 20px;
  border-radius: 4px;
  outline: none;
  border: transparent;
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
