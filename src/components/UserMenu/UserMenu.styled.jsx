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
  padding: 5px 20px;
  margin: 20px 20px;
  border-radius: 4px;
  outline: none;
  border: transparent;

  :hover,
  :focus {
    background-color: rgb(220, 220, 220);
`;
