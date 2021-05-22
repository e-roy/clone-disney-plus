import React from "react";
import firebase from "../firebase";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import {
  selectUserName,
  selectUserPhoto,
  setUserLogin,
  setSignOut,
} from "../features/user/userSlice";
import { useSelector, useDispatch } from "react-redux";

function Header() {
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const dispatch = useDispatch();
  const history = useHistory();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  const signIn = () => {
    auth.signInWithPopup(provider).then((result) => {
      dispatch(
        setUserLogin({
          name: result.additionalUserInfo.profile.name,
          email: result.additionalUserInfo.profile.email,
          photo: result.additionalUserInfo.profile.picture,
        })
      );
      history.push("/");
    });
  };

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(setSignOut());
      history.push("/login");
    });
  };

  return (
    <Nav>
      <a href="/">
        <Logo src="/images/logo.svg" />
      </a>
      {!userName ? (
        <LoginContainer>
          <Login onClick={signIn}>LOGIN</Login>
        </LoginContainer>
      ) : (
        <>
          <NavMenu>
            <a href="/">
              <img src="/images/home-icon.svg" alt="" />
              <span>HOME</span>
            </a>
            <a href="/">
              <img src="/images/search-icon.svg" alt="" />
              <span>SEARCH</span>
            </a>
            <a href="/">
              <img src="/images/watchlist-icon.svg" alt="" />
              <span>WATCHLIST</span>
            </a>
            <a href="/">
              <img src="/images/original-icon.svg" alt="" />
              <span>ORIGINALS</span>
            </a>
            <a href="/">
              <img src="/images/movie-icon.svg" alt="" />
              <span>MOVIE</span>
            </a>
            <a href="/">
              <img src="/images/series-icon.svg" alt="" />
              <span>SERIES</span>
            </a>
          </NavMenu>
          <SignOut>
            <Avaitar src={userPhoto} alt={userName} />
            <DropDown>
              <span onClick={signOut}>Sign out</span>
            </DropDown>
          </SignOut>
        </>
      )}
    </Nav>
  );
}

export default Header;

const Nav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: auto;
  margin-left: 25px;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
    }
    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;
      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }
    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }
  /* @media (max-width: 768px) {
    display: none;
  } */
`;

const Avaitar = styled.img`
  height: 100%;
`;

const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0px;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 100px;
  opacity: 0;
`;

const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  ${Avaitar} {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }
  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
      z-index: 1000;
    }
  }
`;

const LoginContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

const Login = styled.div`
  cursor: pointer;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  padding: 8px 16px;
  letter-spacing: 1.5px;
  background-color: rgba(0, 0, 0, 0.6);
  transition: all 0.2s ease 0s;

  &:hover {
    background-color: #f9f9f9;
    color: #000000;
    border-color: transparent;
  }
`;
