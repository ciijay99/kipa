import { useState } from 'react';
import Board from './Board';
import Management from './Management';

const People = () => {
  const [boardActive, setBoardActive] = useState(true);
  const [managementActive, setManagementActive] = useState(false);

  const handleClick = (e, button) => {
    e.preventDefault();
    if (button === 'board' && boardActive === false) {
      setBoardActive(true);
      setManagementActive(false);
    } else if (
      button === 'management' &&
      managementActive === false
    ) {
      setManagementActive(true);
      setBoardActive(false);
    }
  };
  return (
    <div className='flex flex-col justify-center items-center mt-32 mb-24'>
      <nav className='grid grid-cols-2 place-content-around border-b-2 border-green-850 w-3/4'>
        <button
          className={` w-11/12 justify-self-end py-2 ${
            boardActive ? 'bg-green-850 text-gray-50' : 'bg-gray-300'
          }`}
          onClick={(e) => handleClick(e, 'board')}
        >
          Board of Directors
        </button>
        <button
          className={` w-11/12 ${
            managementActive
              ? 'bg-green-850  text-gray-50'
              : 'bg-gray-300'
          }`}
          onClick={(e) => handleClick(e, 'management')}
        >
          Management Team
        </button>
      </nav>
      {boardActive ? (
        <div>
          <Board />
        </div>
      ) : (
        <div className='w-full'>
          <Management />
        </div>
      )}
    </div>
  );
};

export default People;
