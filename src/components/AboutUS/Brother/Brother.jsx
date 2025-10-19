import React from 'react';
import Bhabi from '../Bhabi/Bhabi';

const Brother = (props) => {
    const {fatherMoney} = props
    return (
        <div className='border-2 border-green-500 rounded-xl p-10 m-10'>
            <h1 className='text-center'>Brother {fatherMoney} Tk.</h1>
            <Bhabi brotherMoney = {fatherMoney}></Bhabi>
        </div>
    );
};

export default Brother;