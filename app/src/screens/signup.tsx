import LayoutMobile from '../components/layout.mobile';
import {
  Button,
  From,
  Input,
  InputGroup,
  Label,
  LinkSingUp,
  SignUpText,
  Header,
  InputGroupCheckBox,
  CommonLink
} from '../styles/common.style';

function SignUp() {
  return (
    <LayoutMobile>
      <Header style={{ marginTop: '16px' }}>Sign Up</Header>
      <From style={{ marginTop: '32px' }}>
        <InputGroup>
          <Label>Email</Label>
          <Input type="text" />
        </InputGroup>
        <InputGroup>
          <Label>Password</Label>
          <Input type="password" />
        </InputGroup>
        <InputGroup>
          <Label>Confirm Password</Label>
          <Input type="password" />
        </InputGroup>
        <InputGroupCheckBox>
          <Input type="checkbox" />
          <Label>I agree to <CommonLink to="#">Term of Service</CommonLink> and <CommonLink to="#">Privacy Policy</CommonLink></Label>
        </InputGroupCheckBox>
        <Button role="button" style={{ marginTop: '16px' }}>
          Continue
        </Button>
      </From>
      <SignUpText>
        Have an Account? <LinkSingUp to={'/'}>Sign In</LinkSingUp>
      </SignUpText>
    </LayoutMobile>
  );
}

export default SignUp;
