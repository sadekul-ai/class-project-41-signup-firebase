import React from 'react';

const Uncle = (props) => {
    const {taka} = props
    return (
        <div className='border-2 border-green-500 rounded-xl p-10 m-10'>
            <h1 className='text-center'>Uncle {taka} Tk.</h1>
        </div>
    );
};

export default Uncle;