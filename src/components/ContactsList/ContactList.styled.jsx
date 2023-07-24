import styled from '@emotion/styled';

export const ContactList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 12px;
  text-align: center;
  padding-left: 0;
  flex-wrap: wrap;
`;

export const ContactItem = styled.li`
  width: 200px;
  padding-bottom: 15px;
  border: 3px solid rgba(86, 141, 229, 1);
  border-radius: 8px;
  background-color: rgb(222, 233, 250);
`;

export const RemoveButton = styled.button`
  width: 80px;
  padding: 5px 0;
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
    background-color: red;
  }
`;
