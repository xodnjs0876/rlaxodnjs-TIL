import React, { useState } from "react";
import AnnounceList from "./AnnounceList/announceList";
import './container.css';
import PageMove from "./PageMove/pageMove";
import { useGetNotices } from "../../API/api";

function Container(props) {
    const {loading, data, error, query} = useGetNotices();
    console.log({loading});
    console.log({error});

    const [inputValue, setInputValue] = useState("");
    const [nowPage, setNowPage] = useState(1);
    
    const inputChange = (e) => {
        setInputValue(e.target.value);
    }
        return(
            <div className="an_mt">
                    <p className="al_t">알림마당</p>
                    <p className="an_t">공지사항</p>
                        <div class="sc_b">
                            <input 
                                type="text"
                                value={inputValue}
                                onChange={inputChange}
                                placeholder="검색어를 입력헤주세요."/>
                            <img 
                                src="/img/MagnifyingGlass.svg" 
                                alt="glass" 
                                onClick={() => {
                                    query({
                                        page:nowPage,
                                        search: inputValue
                                    });
                                }}
                            />
                        </div>
                            <div className="notisList"> 
                                {!loading ? <AnnounceList data={data?.edges} totalCnt = {data?.totalCnt} limit={data?.limit}/> : <span>Loading...</span>}
                            </div>
                            <PageMove totalCnt= {data?.totalCnt} onPageClick={(nowPage)=>{
                                query({
                                    page: nowPage,
                                    search: inputValue
                                })
                                setNowPage(nowPage);
                            }}/>
            </div>
        );
}

export default Container;