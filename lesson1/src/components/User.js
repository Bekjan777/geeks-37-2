import React from 'react';


const User = ({name}) => {
    // console.log(props);
    // const {name} = props
    return (
        <div>
            <p>Name: {name}</p>
            {/*<p>age: {age}</p>*/}
            {/*<p>phone: {phone}</p>*/}
        </div>
    );
};

export default User;