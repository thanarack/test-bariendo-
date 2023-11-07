import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const From = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Input = styled.input`
  padding: 4px 0;
  border-left: 0;
  border-right: 0;
  border-top: 0;
  border-bottom: 1px solid #e0e0e0;
  &:focus,
  &:active,
  &:hover {
    outline: none;
  }

  &[type='checkbox'] {
    width: 16px;
    height: 16px;
    accent-color: #ff0266;
  }
`;

export const Label = styled.label`
  font-size: 14px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 8px;
  font-weight: bold;
  color: #ff0266;
`;

export const Button = styled.button`
  padding: 10px 0;
  border: 0;
  background: #ff0266;
  color: white;
  border-radius: 6px;
  cursor: pointer;
`;

export const SignUpText = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
  font-size: 14px;
  color: #7a7a7a;
`;

export const LinkSingUp = styled(Link)`
  color: #ff0266;
  padding-left: 4px;
`;

export const CommonLink = styled(Link)`
  color: #ff0266;
  padding-left: 4px;
`;

export const Header = styled.h1`
  font-size: 24px;
  margin: 0;
`

export const SubHeader = styled.h2`
  font-size: 16px;
  margin: 0;
  color: #00000042;
`

export const InputGroupCheckBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 8px;
`