import React from 'react';
import classes from './BookList.module.css'
const BookList = ({books , onDelete}) => {
    return (
        <div className={classes.bookList_}>
            <ul className={classes.bookList}>
                {

                    books.map(book => <li key={book.id} className={classes.li}>
                            <div className={classes.name}><p className={classes.p}>{book.title}</p></div>

                        </li>
                    )
                }

            </ul>
            <ul className={classes.bookList_del}>
                {
                    books.map(book => <li key={book.id} className={classes.li}>
                        <button onClick={() => onDelete(book.id)} className={classes.btn}>Удалить</button>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default BookList;