import React, { useState, useEffect } from "react";
import './LoginForm.css'

function LoginForm (props){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [IsOpenSignup , setIsOpenSignup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

  };

  useEffect (() => {
    console.log('Popup Start');
    return () => {
        console.log('Popup End')
    }
  } , []);

  return (
    <div className="SignIn">
      <div className="Bg-SignIn">
        <div className="login-container">
          <img className="cross-logo" src='./images/cross-small.png'onClick={props.onCloseSignIn}/>
          <img className='login-logo' src='./images/Khaoklong.png' />
          <h2 className="login-title">ยินดีต้อนรับ เข้าสู่ระบบ!</h2>
          <p className = "login-subtitle">หากมีบัญชีแล้ว สามารถเข้าสู่ระบบด้วยบัญชีเดิมได้เลย</p>
          <input
            type="email"
            placeholder="อีเมลหรือชื่อผู้ใช้"
            className="login-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="รหัสผ่าน"
            className="login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="login-button">
            เข้าสู่ระบบ
          </button>
          <div className="horizontal-line">
            <div className="line"></div>
            <div className="text-right">หรือ</div>
            <div className="line"></div>
          </div>
          <button type="submit" className="apple-button">
            เข้าสู่ระบบด้วย Apple ID
          </button>
          <button type="submit" className="facebook-button">
            เข้าสู่ระบบด้วย facebook
          </button>
          <p className="login-options">
            <p>
            สมัครสมาชิกข้าวกล่อง e-book ด้วยอีเมล 
            <a href="/signup" className="login-link" onClick={props.onCloseSignIn}> สมัครสมาชิก</a>
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;