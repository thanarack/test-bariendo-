import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 0;
  flex: 1;
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100vh;

`;

const Container = styled.div`
  padding: 16px 32px;
  box-sizing: border-box;
  width: 480px;
  background: white;
`;

interface MyComponentProps {
  children: React.ReactNode;
}

const LayoutMobile: React.FC<MyComponentProps> = (props) => {
  return (
    <Wrapper>
      <Container>{props.children}</Container>
    </Wrapper>
  );
};

export default LayoutMobile;
