import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <Container>
      <CTABox>
        <Logo src="/images/cta-logo-one.svg" alt=""></Logo>
        <SignUP>GET ALL THERE</SignUP>
        <Description>
          Get Premier Access to Raya and the Last Dragon for an additional fee
          with a Disney+ subscription. As of 03/26/21, the price of Disney+ and
          The Disney Bundle will increase by $1.
        </Description>
        <Logo2 src="/images/cta-logo-two.png" alt=""></Logo2>
      </CTABox>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  display: flex;
  align-items: top;
  justify-content: center;

  &:before {
    height: 100%;
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("/images/login-background.jpg");
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0.7;
    z-index: -1;
  }
`;

const CTABox = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 650px;
  width: 90%;
  padding: 80px 40px;
  margin-top: 100px;
  align-items: center;
`;

const Logo = styled.img``;

const SignUP = styled.a`
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  font-size: 18px;
  padding: 17px 0;
  color: #f9f9f9;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
  transistion: all 250ms;
  letter-spacing: 1.5px;
  margin-top: 8px;
  margin-bottom: 12px;

  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.p`
  font-size: 11px;
  letter-spacing: 1.5px;
  text-align: center;
  line-height: 1.5;
`;

const Logo2 = styled.img`
  width: 90%;
`;
