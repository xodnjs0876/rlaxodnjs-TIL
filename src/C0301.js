import React, { Component } from 'react';
import Header from './components/C0301/Header/header';
import Container from './components/C0301/Container/container';
import Footer from './components/C0301/Footer/footer';

class C0301 extends Component{
  constructor (props) {
    super(props);

    this.state = {
    }
  }
  render () {
    return (
    <div className="App">
      <Header/>
      <Container/>
      <Footer
        footer_address={this.props.footer_address} 
        footer_companyNumber={this.props.footer_companyNumber}
        footer_name={this.props.footer_name}
        footer_tel={this.props.footer_tel}  
        footer_fax={this.props.footer_fax}
        footer_email={this.props.footer_email} 
        footer_responsibilty={this.props.footer_responsibilty} />
    </div>
    );
  }
};

C0301.defaultProps = {
  footer_address: '(04589) 서울특별시 중구 다산로 168 (신당동, 성원빌딩) 3층 한국외식산업연구원',
  footer_companyNumber: '203-82-32145',
  footer_name: '전강식',
  footer_tel: '02-6191-2908',
  footer_fax: '02-6191-2998',
  footer_email: 'isaacsgod@kfiri.org',
  footer_responsibilty: '김상희',
};

export default C0301;
