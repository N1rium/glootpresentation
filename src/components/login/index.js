import React, { useState } from 'react';
import styled from 'styled-components';
import GlootLogo from '../../assets/gloot-logo.svg';
import history from '../../history';

const Login = styled.div`
  width: 100%;
  height: 100%;
  background: #000;
  text-align: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Logo = styled.img.attrs({ src: GlootLogo })`
  width: 128px;
  margin: 20px 0px;
`;

const Title = styled.h3`
  font-weight: 900;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0px 20px;
`;

const Input = styled.input.attrs({ type: 'password' })`
  border: 0;
  outline: 0;
  color: rgb(7, 254, 127);
  background: transparent;
  text-align: center;
  margin: 60px 0px;
  border-bottom: 1px solid rgb(7, 254, 127);
  padding: 5px 10px;
  font-size: 2em;
`;

const Button = styled.button`
  border-radius: 6px;
  outline: 0;
  background: rgb(7, 254, 127);
  color: #000;
  padding: 20px;
  border: 0;
  font-weight: bold;
  font-family: 'roboto';
  font-size: 1.2em;
  opacity: 1;
  will-change: opacity;
  transition: opacity 0.225s ease-in-out;
  cursor: pointer;
  &:hover,
  &:active {
    opacity: 0.5;
  }
`;

export default () => {
  const [password, setPassword] = useState('');
  const truePw = 'offlinegoesonline';

  const login = () => {
    if (password.toLowerCase() !== truePw.toLowerCase()) return;
    localStorage.setItem('token', 'token');
    history.push('/');
  };

  return (
    <Login>
      <Container>
        <Logo />
        <Title>G-Loot Teaser</Title>
        <Form>
          <Input value={password} onChange={e => setPassword(e.target.value)} />
          <Button onClick={login}>Enter</Button>
        </Form>
      </Container>
    </Login>
  );
};
