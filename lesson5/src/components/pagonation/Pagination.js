import React from 'react';
import Button from "../Button";

const Pagination = ({prev, next, page}) => {
    return (
        <div>
            <Button onclick={prev}>prev</Button>
            <p>{page}</p>
            <Button onclick={next}>next</Button>
        </div>
    );
};

export default Pagination;