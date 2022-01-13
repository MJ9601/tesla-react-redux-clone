import React, { useState } from "react";
import styled from "styled-components";

const Login = () => {
  const [isOldUser, setIsOldUser] = useState(true);
  return (
    <Wrapper>
      <Navbar>
        <Logo src="images/logo.svg" />
      </Navbar>

      {isOldUser ? (
        <FormWrapper>
          <HeadLine>Sign In</HeadLine>
          <SignFrom>
            <SignLabel>Email Address</SignLabel>
            <SignInput type="text" />
            <SignLabel>Password</SignLabel>
            <SignInput type="password" />
            <SignInputButton type="submit" value={"SIGN IN"} />
          </SignFrom>
          <div
            style={{
              fontSize: "1.5rem",
              padding: "0 2.5rem",
              display: "flex",
              justifyContent: "space-between",
              width: "80%",
              marginLeft: "2.5rem",
            }}
          >
            <Atag>Forgot email? </Atag> <Atag>Forgot password?</Atag>
          </div>
          <Button onClick={() => setIsOldUser(false)}>Create Account</Button>
        </FormWrapper>
      ) : (
        <FormWrapper>
          <HeadLine>Create Account</HeadLine>
          <SignFrom>
            <SignLabel>Select Language</SignLabel>
            <SignInput type="text" />
            <SignLabel>First Name</SignLabel>
            <SignInput type="text" />
            <SignLabel>Last Name</SignLabel>
            <SignInput type="text" />
            <SignLabel>Email Address</SignLabel>
            <SignInput type="email" />
            <SignLabel>Password</SignLabel>
            <SignInput type="password" />
            <SignInputButton type="submit" value={"CREATE ACCOUNT"} />
          </SignFrom>
          <Button onClick={() => setIsOldUser(true)}>Sign in</Button>
        </FormWrapper>
      )}
    </Wrapper>
  );
};

export default Login;

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  display: grid;
  place-items: center;
`;
const Navbar = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%
height: 6rem;
padding: 1rem 2rem`;
const Logo = styled.img`
  width: 10rem;
  object-fit: contain;
`;
const FormWrapper = styled.div`
  width: 35rem;
  height: 80vh;
`;
const HeadLine = styled.h2`
  font-weight: 500;
  font-size: 4rem;
`;
const SignFrom = styled.form`
  width: 100%;
  padding: 2rem 0;
`;
const SignLabel = styled.h4`
  padding-left: 2rem;
  font-size: 1.5rem;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.6);
  margin-bottom: 1rem;
`;
const SignInput = styled.input`
  margin: 0 auto;
  width: 90%;
  border-radius: 3rem;
  border: none;
  padding: 1rem 2rem;
  background-color: rgba(0, 0, 0, 0.1);
  font-size: 1.5rem;
  margin-bottom: 2.5rem;
  &:focus {
    outline: 0.1rem solid rgba(0, 0, 0, 0.2);
  }
`;
const SignInputButton = styled(SignInput)`
  cursor: pointer;
  background-color: rgb(0, 162, 255);
  color: #fff;
`;
const Atag = styled.a`
  text-decoration: underline;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.6);
`;
const Button = styled.button`
  width: 90%;
  border-radius: 3rem;
  border: 0.3rem solid #000;
  padding: 1rem 2rem;
  background-color: rgba(0, 0, 0, 0);
  font-size: 1.5rem;
  margin-top: 4rem;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #000;
    color: #fff;
  }
`;
