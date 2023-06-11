import styled from '@emotion/styled';

export const Item = styled.li`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 22px;
  text-align: center;

  &:not(:last-child) {
    margin-bottom: 8px;
  }

  &::before {
    content: '';
    position: absolute;
    top: 25%;
    left: -10%;
    display: block;
    width: 8px;
    height: 8px;
    background-color: #000000;
    border-radius: 50%;
  }
`;

export const Text = styled.p`
  display: block;
  margin: 0 auto 0 0;

  font-size: 18px;
  font-weight: 600;
`;

export const Btn = styled.button`
  background: transparent;
  font-size: 14px;
  font-weight: 600;
  border: 1px solid #cacaca;
  border-radius: 4px;

  transition: background 50ms linear;

  &:active {
    background: #3f78e2;
  }
`;
