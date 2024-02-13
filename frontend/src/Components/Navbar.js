    import { useState } from 'react';
    import './Navbar.css'
    import LoginForm from './LoginForm'
    import SignUp from './sign_up';

    function Navbar()
    {
        const [IsOpenSignIn , setIsOpenSignIn] = useState(false);
        const [IsOpenSignup , setIsOpenSignup] = useState(false);

        let OpenSignIn = null ;
        let OpenSignUp = null ;
        if(IsOpenSignup){
            OpenSignUp = <SignUp onCloseSignUp = {() => setIsOpenSignup(false) }/>
        }

        if(IsOpenSignIn){
            OpenSignIn = <LoginForm onCloseSignIn = {() => setIsOpenSignIn(false) }/>
        }

        return (
            <div className="Navbar">
                
                <div className="logo">
                    <img className='App-logo' src = '/images/e-book.png'/>
                </div>
                <div className='menu'>
                    <img className='App-menu' src = '/images/menu-burger.png'/>
                </div>
                <h1>เลือกหมวด</h1>
                <div className="App-search">
                    <input
                    className='serch-input'
                    type='text'
                    placeholder="วันนี้อ่านอะไรดีจ้ะ?" 
                />
                </div>
                <div className = "Sign-in">
                    <button className="sign-in-button"onClick={() => setIsOpenSignIn(true)}>เข้าสู่ระบบ</button>
                    {OpenSignIn}
                </div>
                

                <div className = "Sign-up">
                    <button className="sign-up-button" onClick={() => setIsOpenSignup(true)}>สมัครสมาชิก</button>
                    {OpenSignUp}
                </div>
            </div>
        );    
    }

    export default Navbar;