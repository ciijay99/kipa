import React from 'react';
import { board } from '../../data';

const Board = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className='w-9/12 h-auto flex flex-col mt-24 mb-24'>
        <h1 className='text-4xl text-green-850 text-left m-0'>
          KIPA Board
        </h1>

        <div className='mt-8'>
          <p className='text-sm'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Ducimus expedita sequi tenetur blanditiis harum dolores
            ea, a labore porro magnam libero dicta vero dolorem amet
            ipsa deserunt maiores nobis molestiae!
          </p>

          <p className='text-sm mt-4'>
            The board is Chaired by {board[0].name}.
          </p>
        </div>

        <div className='w-full h-auto mt-6'>
          <h2 className='text-xl text-green-850 rounded-sm border-b-2 border-gray-200'>
            Board Chair
          </h2>

          <div className='w-full md:w-56 p-2 flex flex-col items-center mt-6'>
            <img
              className='w-auto h-40 mb-2 rounded-sm'
              src={board[0]['img']}
              alt={board[0].name}
            />
            <p className='text-sm font-bold md:text-base text-center text-blue-850 mb-1'>
              {board[0].name}
            </p>
            <p className='text-sm md:text-sm font-normal text-center text-blue-850'>
              {board[0].role}
            </p>
          </div>
        </div>

        <div className='w-full h-auto flex flex-col mt-10'>
          <h2 className='text-xl text-green-850 border-b-2 border-gray-200 rounded-sm'>
            Board Members
          </h2>

          <div className='w-full flex flex-col sm:flex-row justify-between flex-wrap'>
            {board.slice(1).map(({ id, name, img, role }) => {
              return (
                <div
                  key={id}
                  className='w-full sm:w-1/2 md:w-60 p-2 flex flex-col items-center mt-12'
                >
                  <img
                    className='w-auto h-40 mb-4 rounded-sm'
                    src={img}
                    alt=''
                  />
                  <p className='text-sm font-bold md:text-base text-center text-blue-850 mb-1'>
                    {name}
                  </p>
                  <p className='text-sm md:text-sm font-normal text-center text-blue-850'>
                    {role}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;
