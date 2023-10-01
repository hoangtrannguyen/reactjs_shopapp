import React, { useState } from 'react';
import LoginForm from 'D:/2024/TLCN/react-test/src/components/LoginForm';
import './LoginPage.css'; // Nhúng tệp CSS cho container
import { login, register } from '../../apis/LoginRegisterApi'; // import Login from LoginApi

function LoginPage() {
  const handleLogin = async (username, password) => {
    try {
      const response = await login(username, password);
      const { success, message } = response;

      if (success) {
        alert(message);
        // Thực hiện các hành động sau khi đăng nhập thành công
      } else {
        alert(message);
      }
    } catch (error) {
      console.error('Lỗi khi gọi API đăng nhập:', error);
      alert('Đăng nhập thất bại');
    }
  };
  const handleRegister = async (username, password, email) => {
    try {
      const response = await register(username, password, email);
      const { success, message } = response;

      if (success) {
        alert(message);
        // Thực hiện các hành động sau khi đăng ký thành công
      } else {
        alert(message);
      }
    } catch (error) {
      console.error('Lỗi khi gọi API đăng ký:', error);
      alert('Đăng ký thất bại');
    }
  };
  return (
    <div className="login-container">
      <h2>Đăng nhập hoặc Đăng ký</h2>
      <LoginForm onLogin={handleLogin} onRegister={handleRegister} />
    </div>
  );
}

export default LoginPage;
