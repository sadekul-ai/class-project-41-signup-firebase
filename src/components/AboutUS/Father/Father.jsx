import React from 'react';
import Brother from '../Brother/Brother';

const Father = (props) => {
    const {taka} = props
    return (
         <div className='border-2 border-green-500 rounded-xl p-10 m-10'>
            <h1 className='text-center'>Father {taka} Tk. </h1>
            <Brother fatherMoney={taka}></Brother>
        </div>
    );
};

export default Father;