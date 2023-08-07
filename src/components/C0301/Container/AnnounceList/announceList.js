import React from "react";
import { notisInfo } from "./ListInfo/listInfo";
import "./announceList.css";

function AnnounceList() {
    return (
    <div>
        {notisInfo.map((list) => (
            <div className="list" key={list.id}>
                <span className="id">{list.id}</span>
                    <div className="detail">
                        <div className="content">
                            <p className="title">{list.title}</p>
                                {list.attach == true ? (
                                    <img src="/img/copy-one.svg" alt="attach" /> 
                                ) : null} 
                                {list.comments !==  0 ? (
                                    list.comments >= 99 ? ( 
                                    <span className="comment">[99+]</span> ) :
                                    <span className="comment">[{list.comments}]</span>
                                ) : null}
                        </div>
                            <div className="infos">
                                <span className="writer text">
                                    {list.writer}
                                </span>
                                    <span>ㅣ</span>
                                <span className="date text">
                                    {list.date} 
                                </span>
                                    <span>ㅣ</span>
                                <span className="viewer text">
                                    <img src="/img/preview-open.svg" alt="viewer" />
                                    {list.viewer >= 999 ?
                                        ("999+") :
                                        ( <span className="text">  {list.viewer} </span> )
                                    }
                                </span>
                                    <span>ㅣ</span>
                                <span className="likes text">
                                    <img src="/img/like.svg" alt="likes" />
                                    {list.likes >= 99 ?
                                        ("99    +") :
                                        ( <span className="text">  {list.likes} </span> )
                                    }
                                </span>
                            </div>
                    </div>
            </div>
        )
    )}
</div>
    )
}

export default AnnounceList;
