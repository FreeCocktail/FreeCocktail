import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Waves from 'Components/Waves';
import { Link, useNavigate } from 'react-router-dom';
import Nickname from './_Nickname';
import Email from './_Email';
import Password from './_Password';
import PasswordCheck from './_PasswordCheck';

import {
  Body,
  MainArea,
  Container,
  ContentContainer,
  TitleWrapper,
  Title,
  InvalidMessage,
  ValidMessage,
  SignupBtn,
  LoginBtn,
  ImgContainer,
  Br2,
} from './SignUpPage.style';

export type UserData = {
  nickname: string;
  image: string;
  email: string;
  password: string;
  pwdCheck: string;
  submit: boolean;
};

const SignUpPage = function SignUpPage() {
  const [user, setUser] = useState({
    nickname: '',
    image: '',
    email: '',
    password: '',
    pwdCheck: '',
    submit: false,
  });
  const navigate = useNavigate();
  const [isValid, setIsValid] = useState({ state: false, tag: <>tag</> });

  const clickedSubmit = () => {
    setUser({
      ...user,
      submit: true,
    });

    //* isValid 상태에 따라 모든 정보 입력 확인 후 서버로 전송
    if (isValid.state) {
      const body = {
        nickname: user.nickname,
        password: user.password,
        email: user.email,
      };
      axios
        .post(`http://localhost:3001/user/signup`, body)
        .then((res) => {
          console.log(res);
          alert(`${res.data.data.nickname}님 회원가입이 완료되었습니다!`);
          navigate('/loginPage');
        })
        .catch((err) => {
          if (err.response.status === 409) alert('이미 가입된 이메일입니다!');
        });
    }
  };

  //* 유효성 검사 후 isValid 상태 변화
  useEffect(() => {
    const reg = /^.*(?=.{8,16})(?=.*[0-9])(?=.*[a-zA-Z]).*$/;
    if (
      user.nickname &&
      user.email.includes('@') &&
      user.email.includes('.') &&
      reg.test(user.password) &&
      user.password === user.pwdCheck
    ) {
      setIsValid({ state: true, tag: <ValidMessage>입력완료</ValidMessage> });
    } else {
      setIsValid({
        state: false,
        tag: <InvalidMessage>모든 정보를 입력해주세요.</InvalidMessage>,
      });
    }
  }, [user]);

  return (
    <>
      <Waves />
      <Body>
        <MainArea>
          <Container>
            {/* 회원가입 Form */}
            <ContentContainer>
              <TitleWrapper>
                <Title onClick={() => console.log(user)}>회원가입</Title>
              </TitleWrapper>

              <Nickname user={user} setUser={setUser} />
              <Email user={user} setUser={setUser} />
              <Password user={user} setUser={setUser} />
              <PasswordCheck user={user} setUser={setUser} />

              {user.submit ? isValid.tag : <Br2 />}
              <SignupBtn onClick={clickedSubmit}>회원가입</SignupBtn>
              <LoginBtn>
                이미 가입하셨나요?
                <p>
                  <Link to="/loginPage">로그인 하기</Link>
                </p>
              </LoginBtn>
            </ContentContainer>
            <ImgContainer>이미지 자리</ImgContainer>
          </Container>
        </MainArea>
      </Body>
    </>
  );
};

export default SignUpPage;
