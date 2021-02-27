import React, { useState } from 'react';
import './Style.css'
import UserSection from './UserSection';
import data from '../data.json'
import SalaryCart from './SalaryCart';

const UserInfo = () => {
    const [count, setCount] = useState([]);
    
    const HandelCount = (data) => {
        let newCount = [...count, data];
        setCount(newCount);
    }

    return (
        <div className="original">
            <div className="userSide">
                {
                    data.map(user => <UserSection data={user} HandelCount={HandelCount} ></UserSection>)
                }
            </div>
            <div className="SalarySide">
                <SalaryCart count={count} ></SalaryCart>
            </div>
        </div>
    );
};

export default UserInfo;