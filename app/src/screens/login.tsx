import LayoutMobile from '../components/layout.mobile';
import {
  Button,
  From,
  Input,
  InputGroup,
  Label,
  LinkSingUp,
  SignUpText,
  SubHeader,
  Header
} from './login.style';

function Login() {
  return (
    <LayoutMobile>
      <Header style={{ marginTop: '16px' }}>Sign In</Header>
      <SubHeader style={{ marginTop: '16px' }}>Hi there! Nice to see you again.</SubHeader>
      <From style={{ marginTop: '32px' }}>
        <InputGroup>
          <Label>Email</Label>
          <Input type="text" />
        </InputGroup>
        <InputGroup>
          <Label>Password</Label>
          <Input type="password" />
        </InputGroup>
        <Button role="button" style={{ marginTop: '16px' }}>
          Sign In
        </Button>
      </From>
      <SignUpText>
        Haven't an Account? <LinkSingUp to={'/signup'}>Sign Up</LinkSingUp>
      </SignUpText>
    </LayoutMobile>
  );
}

export default Login;
