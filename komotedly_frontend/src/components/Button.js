import styled from 'styled-components';

const Button = styled.button`
  display: block;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  color: #fff;
  background-color: darkorange;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }

  :active {
    background-color: orange;
  }
`;

export default Button;
