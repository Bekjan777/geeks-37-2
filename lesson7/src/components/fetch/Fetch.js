import React, {useEffect} from 'react';
import c from './Fetch.module.css'
import {logDOM} from "@testing-library/react";
import axios from "axios";

const BASE_URL = 'http://localhost:5000/';

export const postAxios = async (API, {surname, name, groupId, id}) => {

    const response = await axios.post(`${BASE_URL}${API}`,
        {
            surname,
            name,
            id,
            groupId
        })

    const data = response.data
    console.log(data)
}


const Fetch = () => {
    const [students,setStudents] = React.useState([]);
    const [refresh, setRefresh] = React.useState(false);

    const getAPI = async (API) => {

        const response = await fetch(`${BASE_URL}${API}`);
        const data = await response.json();
        console.log(data)
        return data
    }
    const postAPI = async (API) => {
        await fetch(`${BASE_URL}${API}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                surname: 'Sariev',
                name: 'Bekzhan',
                id: '200',
                groupId: 2
            })
        }).then(response => response.json()).then(
            data => console.log(data)
        ).catch(error => console.log(error))

    }
    const patchAPI = async (API, id) => {
        await fetch(`${BASE_URL}${API}/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                surname: 'Ryspekov',
            })
        }).then(response => response.json()).then(
            data => console.log(data)
        ).catch(error => console.log(error))

    }
    const deleteAPI = async (API, id) => {
        await fetch(`${BASE_URL}${API}/${id}`, {
            method: 'DELETE'
        }).then(response => response.json()).then(
            data => {
                console.log(data)
                setRefresh(prev => !prev);
            }
        ).catch(error => console.log(error))

    }

    const getAxios = async (API) => {
        const response = await axios(`${BASE_URL}${API}`)
        console.log(response.data)
        const data = response.data
    }
    useEffect(() => {
        getAPI(`student`).then(data => setStudents(data))
    }, [refresh]);
    return (
        <div className={c.wrapper}>
            <button className={c.btn} onClick={() => getAPI(`student`).then(data => setStudents(data))}>getApi</button>
            <button className={c.btn} onClick={() => getAxios(`student`)}>getAxios</button>
            <button className={c.btn} onClick={() => postAPI(`student`)}>postAPI</button>
            <button className={c.btn} onClick={() => postAxios(`student`)}>postAxios</button>
            <button className={c.btn} onClick={() => patchAPI(`student`, 1)}>patchAPI</button>
            <button className={c.btn} onClick={() => deleteAPI(`student`, 200)}>deleteAPI</button>
            {
                students.map(student => (<div key={student.id}>
                        <p>{student.name}</p>
                        <button className={c.btn} onClick={() => deleteAPI(`student`, student.id)}>deleteAPI</button>

                    </div>)
                )
            }
        </div>
    );
};

export default Fetch;