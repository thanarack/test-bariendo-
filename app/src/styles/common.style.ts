import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { IoIosPin } from 'react-icons/io';
import { FiLogOut } from 'react-icons/fi';
import { AiOutlinePlus } from 'react-icons/ai';

export const From = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Input = styled.input`
  padding: 8px 0;
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

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  position: relative;
`

export const Title = styled.h1`
  font-size: 16px;
  margin: 0;
`

export const SvgIcon = styled.svg`
  color: #ff0266;
  width: 20px;
  height: 20px;
`

export const FloatIcon = styled.div`
  position: absolute;
  right: 0;
  transform: translateY(calc(-50% + 2px));
`

export const DateTitle = styled.h3`
  font-size: 12px;
  margin: 0;
  padding: 6px 0;
  background: #e0e0e0;
  text-align: center;
  margin-bottom: 8px;
  font-weight: normal;
`

export const CardGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const CardAppointment = styled.div`
  display: flex;
  background: #f2f2f2;
  border-radius: 8px;
  padding: 16px;
  flex-direction: column;
  font-size: 14px;
  gap: 8px;
`

export const ApBoxLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const ApType = styled.span`
  color: #7a7a7a;
  font-size:12px;
`

export const IconPin = styled(IoIosPin)`
  color: #ff0266;
  width: 20px;
  height: 20px;
`

export const IconLogout = styled(FiLogOut)`
  color: #ff0266;
  width: 20px;
  height: 20px;
`

export const IconPlus = styled(AiOutlinePlus)`
  color: #fff;
  width: 20px;
  height: 20px;
`

export const ApLocation = styled.div`
  flex-direction: row;
  display: flex;
  align-items: center;
  gap: 4px;
`

export const WarpButton = styled.div`
  padding: 0 32px;
  box-sizing: border-box;
  width: 480px;
  background: white;
  position: absolute;
  bottom: 16px;
  left: 0;
`

export const NewBookingButton = styled.button`
  background: #ff0266;
  color: white;
  border-radius: 6px;
  padding: 8px 0;
  min-width: 100%;
  border: 0;
  cursor: pointer;
  display: flex;
  gap: 6px;
  align-items: center;
  justify-content: center;
`