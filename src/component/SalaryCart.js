import React from 'react';
import './Style.css'

const SalaryCart = (props) => {
    let countNumber = props.count;
    let total = 0;
    for (let i = 0; i < countNumber.length; i++) {
        const element = countNumber[i];
        total = total + Number(element.salary);
    }

    return (
        <div className="salaryCart">
            <h4>User Count:{countNumber.length} </h4>
            <h4>Salary Count: ${total}</h4>
        </div>
    );
};

export default SalaryCart;