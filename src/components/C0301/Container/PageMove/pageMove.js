import React, { useState } from "react";
import './pageMove.css';

function PageMove() {
    const pages = [1,2,3,4,5];

    const [btnActive, setBtnActive] = useState("");

    const toggleActive = (e) => {
        setBtnActive((prev) => {
            return e.target.value;
        });
    };

    return (
                <div className="page">
                    <img src="/img/left.svg" alt="lArrow"/>
                    {pages.map((item,id) =>
                    <div className="pageNum">
                        <button 
                            value={id}
                            className={ "btn" + (id == btnActive ? " active" : "")}
                            onClick={toggleActive}
                            >
                                {item}
                        </button>
                    </div> )}
                    <img src="/img/right.svg" alt="rArrow"/>
                    <img src="/img/rights.svg" alt= "rArrows"/>     
                </div>
    )
}

export default PageMove;