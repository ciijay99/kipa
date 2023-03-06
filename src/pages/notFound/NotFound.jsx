import React from 'react';
import { Link } from 'react-router-dom';
import './notFound.css';

const NotFound = () => {
  return (
    <section className='flex justify-center items-center'>
      <div className='w-9/12 h-auto flex flex-col mt-32 mb-24'>
        <h1 className='text-4xl text-green-850 text-bold mb-8 text-center ml-0'>
          Page Not Found
        </h1>
        <div className='flex justify-center'>
          <Link
            to='/'
            className='bg-green-850 text-white p-2 rounded-sm sm:text-sm w-48 justify-center flex'
          >
            Return To HomePage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
