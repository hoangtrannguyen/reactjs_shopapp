import React, { useState } from 'react';
import './LoginForm.css';
function LoginForm({onLogin, onRegister}) {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState(''); // Thêm trường email
  const [isRegistering, setIsRegistering] = useState(false); // Thêm trạng thái cho đăng ký

  const handleToggleMode = () => {
    // Xử lý sự kiện chuyển đổi giữa đăng nhập và đăng ký
    setIsRegistering(!isRegistering);
  };

  const handleSubmit = () => {
    if (isRegistering) {
      // Gọi hàm đăng ký
      onRegister(username, password, email);
    } else {
      // Gọi hàm đăng nhập
      onLogin(username, password);
    }
  };
  
  return (
    <form className="login-form"> {/* Sử dụng lớp CSS cho thành phần */}
      <div>
        <label>Tên đăng nhập:</label>
        <input
          type="text"
          value={username}
          onChange={(e) =>setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Mật khẩu:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
      {isRegistering && ( // Hiển thị trường email chỉ khi đang đăng ký
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      )}
      </div>
      <button type="button" onClick={handleSubmit}>
        {isRegistering ? 'Đăng ký' : 'Đăng nhập'}
      </button>
      <p>
        {isRegistering
          ? 'Bạn đã có tài khoản?'
          : 'Chưa có tài khoản?'}
        <button type="button" onClick={handleToggleMode}>
          {isRegistering ? 'Đăng nhập' : 'Đăng ký'}
        </button>
      </p>
    </form>
  );
}

export default LoginForm;
