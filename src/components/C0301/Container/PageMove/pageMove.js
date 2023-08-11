import React, { useState } from "react";
import './pageMove.css';
import Pagination from "react-js-pagination";

function PageMove(props) {

    const pages = [];
    const numPages = Math.ceil(props.totalCnt/10);
    const [btnActive, setBtnActive] = useState(1);
    console.log(props.totalCnt);

    for(var i=1; i<=numPages; i++) {
        pages.push(i);
    }

    const toggleActive = (page) => {
        props.onPageClick(page);
        setBtnActive(page);
        console.log(page);
    };

    const onLastPage = (e) => {
        setBtnActive(numPages);
        props.onPageClick(btnActive);
    }
    const onNextPage = (e) => {
        setBtnActive((num) => {
            console.log(num);
            if( numPages > num) {
                return btnActive - 1;
            }
            return num;
        });
        props.onPageClick(btnActive);
    }

    const onPrevPage = (e) => {
        setBtnActive((num) => {
            if (1 < num) {
                return btnActive+1;
            }
            return num;
        });
        props.onPageClick(btnActive);
    }

    
    return (
                <div className="page">
                    <Pagination
                        activePage={btnActive}
                        itemsCountPerPage={props.limit}
                        totalItemsCount={props.totalCnt}
                        pageRangeDisplayed={5}
                        prevPageText={"<"}
                        nextPageText={">"}
                        onChange={toggleActive}
                    />
                </div>
    )
}

export default PageMove;    