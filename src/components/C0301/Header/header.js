import React, {Component} from 'react';
import './header.css'

class Header extends Component {
    render() {
        return(
            <header className='header'>
                <div className='gb_box'>
                    <ul className='hd_right'>
                        <li>로그인/회원가입</li>
                        <li>회원정보찾기</li>
                    </ul>
                </div>
                <div className='hd_ul'>
                    <div className='logo'>
                        <img src='/img/klogo.png' alt = "logo"/>
                    </div>
                    <ul className='menu_list'>
                        <li>한국외식산업연구원</li>
                        <li>외식정보</li>
                        <li>열람마당<span>ㅣ</span></li>
                        <li>패널설문조사</li>
                        <li>정부지원</li>
                        <li>교육</li>
                        <li>부가혜택몰</li>
                    </ul>
                    <div className='hd_bt'>
                        <div className='alarm'>
                            <img src='/img/noti.svg' alt = "noti"/>
                        </div>
                        <div className='menu_bt'>
                            <img src='/img/hamburger-button.svg' alt='menu_bt'/>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;
