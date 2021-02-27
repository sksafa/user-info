import React from 'react';
import './Style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const UserSection = (props) => {
    const { name, salary, email, image } = props.data;
    return (
        <div className="userInfo">
            <div className="imgSection">
                <img src={image} alt="" />
            </div>
            <div className="infoSection">
                <p>Name: {name}</p>
                <p>Email: {email}</p>
                <p>salary: ${salary}</p>
                <button onClick={() => { props.HandelCount(props.data) }} > <FontAwesomeIcon icon={faShoppingCart} /> Add Salary</button>
            </div>
        </div>

    );
};

export default UserSection;