import React, { Component } from "react";
import AnnounceList from "./AnnounceList/announceList";
import './container.css';
import PageMove from "./PageMove/pageMove";

class Container extends Component {

    render() {
        
        return(
            <div className="an_mt">
                    <p className="al_t">알림마당</p>
                    <p className="an_t">공지사항</p>
                        <div class="sc_b">
                            <input type="text" placeholder="검색어를 입력헤주세요."/>
                            <img src="/img/MagnifyingGlass.svg" alt="glass"/>
                        </div>
                            <div className="notisList">
                                <AnnounceList/>
                            </div>
                            <PageMove/>
            </div>
        );
    }
}

export default Container;