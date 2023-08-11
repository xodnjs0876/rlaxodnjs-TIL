import React from "react";
import "./announceList.css";

function AnnounceList(props) {

    const { DateTime } = require("luxon");

    const formatNum = (num) => {
        return new Intl.NumberFormat('en-US', {
            notation: 'compact',
            maximumFractionDigits: 1,
        }).format(num)
    }

    const remain = props.totalCnt%props.limit;

    

    return (
    <div>
        {props.data.map((item) => 
            <div className="list" key={item.id}>
                <span className="id">{item.id}</span>
                    <div className="detail">
                        <div className="content">
                            <span className="category">[{item.category}]</span>
                            <p className="title">{item.title}</p>
                                {item.file ? (
                                    <img src="/img/copy-one.svg" alt="attach" /> 
                                ) : null}  
                                    <span className="comment">
                                        [{item.commentCnt !==0 ? item.commentCnt >= 99 ? ("99+" ): ([item.commentCnt]) : null}]
                                    </span>
                        </div>
                            <div className="infos">
                                <span className="writer text">
                                    {item.writer.name}
                                </span>
                                    <span>ㅣ</span>
                                <span className="date text">
                                    {DateTime.fromMillis(item.createdAt).toFormat("yyyy.MM.dd")}
                                </span>
                                    <span>ㅣ</span>
                                <span className="viewer text">
                                    <img src="/img/preview-open.svg" alt="viewer" />
                                        <span className="text"> 
                                            {formatNum(item.viewCnt)}
                                        </span>
                                </span>
                                    <span>ㅣ</span>
                                <span className="likes text">
                                    <img src="/img/like.svg" alt="likes" />
                                        <span className="text">
                                            {formatNum(item.likeCnt)}
                                        </span>
                                </span>
                            </div>
                    </div>
            </div>
        )
    }
</div>
    )
}

export default AnnounceList;