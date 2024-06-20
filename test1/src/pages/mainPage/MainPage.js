import React, { useEffect, useState } from 'react';
import classes from './MainPage.module.css';
import elipse from '../../assets/pict1.svg';
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import '../../reset.css';   
import BookList from "../../components/bookList/BookList";

const MainPage = () => {
    const [books, setBooks] = useState([]);
    const [value, setValue] = useState("");

    const localStorageKey = 'books';

    const onclick = () => {
        if (value.trim() !== "") {
            const newBook = {
                id: books.length > 0 ? books[books.length - 1].id + 1 : 1,
                title: value,
            };
            setBooks(prev => [...prev, newBook]);
            setValue("");
        }
    };

    const onDelete = (id) => {
        const updatedBooks = books.filter((book) => book.id !== id);
        setBooks(updatedBooks);
    };

    useEffect(() => {
        const storedBooks = JSON.parse(localStorage.getItem(localStorageKey));
        if (storedBooks) {
            setBooks(storedBooks);
        } else {
            localStorage.setItem(localStorageKey, JSON.stringify(books));
        }
    }, []); // Run only once on mount

    useEffect(() => {
        localStorage.setItem(localStorageKey, JSON.stringify(books));
    }, [books]);

    return (
        <div className={classes.MainPage}>
            <div className={classes.container}>
                <img src={elipse} alt="elipse" />
                <h5 className={classes.label}>Добавить книгу</h5>
                <div className={classes.add_container}>
                    <div className={classes.input_container}>
                        <div className={classes.span_input_d}>
                            <span className={classes.span_input}>Название </span>
                            <span className={classes.span_input_}>:</span>
                        </div>
                        <Input value={value} placeholder="Введите название" onChange={e => setValue(e.target.value)} />
                    </div>
                    <Button label="Добавить" onclick={onclick} />
                </div>
                <div className={classes.book_list}>
                    <div className={classes.book_label_wrap}>
                        <div className={classes.book_label}>
                            <p className={classes.name}>Название</p>
                        </div>
                        <div className={classes.book_label_wrap_inner}></div>
                    </div>
                </div>
                <BookList books={books} onDelete={onDelete} />
            </div>
        </div>
    );
};

export default MainPage;
