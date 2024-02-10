import React, { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <h2 className="login-title">ยินดีต้อนรับ เข้าสู่ระบบ!</h2>
      <p className = "login-subtitle">หากมีบัญชีแล้ว สามารถเข้าสู่ระบบด้วยบัญชีเดิมได้เลย</p>
      <input
        type="email"
        placeholder="Email or username"
        className="login-input"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="login-input"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" className="login-button">
        เข้าสู่ระบบ
      </button>
      <div class="horizontal-line">
        <div class="line"></div>
        <span class="text-right">หรือ</span>
        <div class="line"></div>
      </div>
      <button type="submit" className="apple-button">
        เข้าสู่ระบบด้วย Apple ID
      </button>
      <button type="submit" className="facebook-button">
        เข้าสู่ระบบด้วย facebook
      </button>
      <p className="login-options">สมัครสมาชิกข้าวกล่อง e-book ด้วยอีเมล 
        <a href="/signup" className="login-link">
          <u>สมัครสมาชิก</u>
        </a>
      </p>
    </form>
  );
};

export default LoginForm;