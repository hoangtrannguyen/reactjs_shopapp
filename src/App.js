import React from 'react';
import './App.css';
import LoginContainer from './container/LoginPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Thanh điều hướng và tiêu đề */}
      </header>
      <main>
        <LoginContainer /> {/* Hiển thị trang đăng nhập bằng container */}
        {/* Các thành phần và trang khác */}
      </main>
      <footer>
        {/* Chân trang */}
      </footer>
    </div>
  );
}

export default App;
