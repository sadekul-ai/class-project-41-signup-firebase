import React from 'react';
import Father from './Father/Father';
import Uncle from './Uncle/Uncle';
import Aunty from './Aunty/Aunty';

const AboutUS = () => {
    const money = 5000;
    return (
        <div className='border-2 border-green-500 rounded-xl p-10 m-10'>
            <h1 className='text-center'>Grand Father {money} Tk. </h1>
            <div className='flex justify-between gap-5'>
            <Father taka = {money} ></Father>
            <Uncle taka = {money}></Uncle>
            <Aunty taka = {money} ></Aunty>
            </div>
        </div>
    );
};

export default AboutUS;