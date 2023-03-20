import React from 'react';
import { Link } from 'react-router-dom';
import './notFound.css';

const NotFound = () => {
  return (
    <section className='flex justify-center items-center'>
      <div className='w-9/12 h-auto flex flex-col mt-44 mb-44'>
        <h1 className='text-6xl text-white text-bold mb-8 text-center ml-0'>
          Page Not Found
        </h1>
        <div className='flex justify-center'>
          <Link
            to='/'
            className='bg-white text-green-850 p-5 font-medium rounded-xl sm:text-lg lg:w-4/12 justify-center flex'
          >
            Return To HomePage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
