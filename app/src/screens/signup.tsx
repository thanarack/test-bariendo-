import { FormEvent, useCallback, useState } from 'react';
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
  CommonLink,
  Hr,
  CheckBoxItem,
  CheckBoxGroup,
  LoginError,
} from '../styles/common.style';
import useApiSignUp from '../hooks/useApiSignUp';
import useApiOrganizations from '../hooks/useApiOrganizations';
import get from 'lodash/get';
import { PREFIX_DATA } from '../api';
import { Organization } from '../api/api.spec';

function SignUp() {
  // State form
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [organizations, setOrganizations] = useState<string[]>([]);

  // Api group
  const apiSignUp = useApiSignUp();
  const apiOrganizations = useApiOrganizations();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    apiSignUp.mutate({
      email,
      password,
      first_name: firstName,
      last_name: lastName,
      role: 'PATIENT',
      organizations,
    });
    e.preventDefault();
  };

  const onChangeOrganizations = useCallback(
    (id: string) => {
      if (!organizations.includes(id)) {
        setOrganizations([...organizations, id]);
      } else {
        setOrganizations(organizations.filter((val) => val !== id));
      }
    },
    [organizations],
  );

  const isDisabled =
    apiSignUp.isPending ||
    !isChecked ||
    !organizations.length ||
    password !== rePassword;

  return (
    <LayoutMobile>
      <Header style={{ marginTop: '16px' }}>Sign Up</Header>
      <From style={{ marginTop: '32px' }} onSubmit={onSubmit}>
        {rePassword && password != rePassword && (
          <LoginError>Error: Password not match</LoginError>
        )}
        {apiSignUp.isError && (
          <LoginError>Error: Something, {apiSignUp.error?.message}</LoginError>
        )}
        <InputGroup>
          <Label>Email</Label>
          <Input type="email" onChange={(e) => setEmail(e.target.value)} />
        </InputGroup>
        <InputGroup>
          <Label>First Name</Label>
          <Input type="text" onChange={(e) => setFirstName(e.target.value)} />
        </InputGroup>
        <InputGroup>
          <Label>Last Name</Label>
          <Input type="text" onChange={(e) => setLastName(e.target.value)} />
        </InputGroup>
        <InputGroup>
          <Label>Password</Label>
          <Input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputGroup>
        <InputGroup>
          <Label>Confirm Password</Label>
          <Input
            type="password"
            onChange={(e) => setRePassword(e.target.value)}
          />
        </InputGroup>
        <InputGroup>
          <Label>Choose your organizations</Label>
          <CheckBoxGroup style={{ marginTop: '8px' }}>
            {get(apiOrganizations, PREFIX_DATA, []).map(
              (organization: Organization) => (
                <CheckBoxItem key={organization.id}>
                  <Input
                    type="checkbox"
                    value={organization.id}
                    defaultChecked={organizations.includes(organization.id)}
                    onChange={() => onChangeOrganizations(organization.id)}
                  />
                  <span>{organization.name}</span>
                </CheckBoxItem>
              ),
            )}
          </CheckBoxGroup>
        </InputGroup>
        <Hr />
        <InputGroupCheckBox>
          <Input
            type="checkbox"
            defaultChecked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
          />
          <Label>
            I agree to <CommonLink to="#">Term of Service</CommonLink> and{' '}
            <CommonLink to="#">Privacy Policy</CommonLink>
          </Label>
        </InputGroupCheckBox>
        <Button
          role="button"
          disabled={isDisabled}
          type="submit"
          style={{ marginTop: '16px' }}
        >
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
