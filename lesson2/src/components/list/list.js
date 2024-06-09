import React from 'react';
import listik from './list.module.css'
const List = ({list}) => {
    return (
        <div>
            <ul className={listik.ul_list}>
                {list.map((item, index) => (
                    <li className={listik.li_list} key={index}>
                        <h3 style={{opacity:0.5}}><em>task №{index}</em></h3>
                        <p>{item.title}</p>
                        <p>{item.completed ? "true" : "false"}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default List;