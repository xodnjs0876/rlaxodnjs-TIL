import React from "react";
import "./footer.css";

function Footer({ address, companyNum, name, tel, fax, email, responsibilty }) {
    return (
      <footer className="footer">
        <div className="content">
          <ul>
            <li>개인정보처리방침</li>
            <li>사이트이용약관</li>
          </ul>
          <span>(사)한국외식업중앙회 한국외식산업연구원</span>
          <div className="ft_p">
            <div className="ft_f">
              <p>
                주소 <span>{address}</span>
              </p>
              <span>ㅣ</span>
              <p>
                사업자등록번호 <span>{companyNum}</span>
              </p>
              <span>ㅣ</span>
              <p>
                대표자 <span>{name}</span>
              </p>
            </div>
            <div className="ft_s">
              <p>
                TEL <span>{tel}</span>
              </p>
              <span>ㅣ</span>
              <p>
                FAX <span>{fax}</span>
              </p>
              <span>ㅣ</span>
              <p>
                E-mail <span>{email}</span>
              </p>
              <span>ㅣ</span>
              <p>
                개인정보보호정책 <span>{responsibilty}</span>
              </p>
            </div>
          </div>
          <p>
            Copyright © 2017 한국외식산업연구원 Korea food industry Research
            Institute All Rights Reserved.
          </p>
        </div>
      </footer>
    );
  }

Footer.defaultProps = {
    address: '(04589) 서울특별시 중구 다산로 168 (신당동, 성원빌딩) 3층 한국외식산업연구원',
    companyNum: '203-82-32145',
    name: '전강식',
    tel: '02-6191-2908',
    fax: '02-6191-2998',
    email: 'isaacsgod@kfiri.org',
    responsibilty: '김상희',
};


export default Footer;
