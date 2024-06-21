import React from 'react';
import Button from "../Button";
import './pagination.css'
const Pagination = ({prev, next, page, true_}) => {
    return (
        <div className={true_ ? 'pagination' : ''}>
            <Button onclick={prev}>prev</Button>
            <p>{page}</p>
            <Button onclick={next}>next</Button>
        </div>
    );
};

export default Pagination;