import React, { Component } from "react";
import "./footer.css";

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
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
                주소 <span>{this.props.footer_address}</span>
              </p>
              <span>ㅣ</span>
              <p>
                사업자등록번호 <span>{this.props.footer_companyNumber}</span>
              </p>
              <span>ㅣ</span>
              <p>
                대표자 <span>{this.props.footer_name}</span>
              </p>
            </div>
            <div className="ft_s">
              <p>
                TEL <span>{this.props.footer_tel}</span>
              </p>
              <span>ㅣ</span>
              <p>
                FAX <span>{this.props.footer_fax}</span>
              </p>
              <span>ㅣ</span>
              <p>
                E-mail <span>{this.props.footer_email}</span>
              </p>
              <span>ㅣ</span>
              <p>
                개인정보보호정책 <span>{this.props.footer_responsibilty}</span>
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
}

export default Footer;
