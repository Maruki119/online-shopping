    import './Navbar.css'

    function Navbar()
    {
        return (
            <div className="Navbar">
                
                <div className="logo">
                    <img className='App-logo' src = '/images/e-book.png'/>
                </div>
                <div className='menu'>
                    <img className='App-menu' src = '/images/menu-burger.png'/>
                    <h1>Menu</h1>
                </div>
                <div className="App-search">
                    <input
                    className='serch-input'
                    type='text'
                    placeholder="วันนี้อ่านอะไรดีจ้ะ?" 
                />
                </div>
                <div className = "Sign-in">
                    <button className="sign-in-button">เข้าสู่ระบบ</button>
                </div>

                <div className = "Sign-up">
                    <button className="sign-up-button">สมัครสมาชิก</button>
                </div>
            </div>
        );    
    }

    export default Navbar;