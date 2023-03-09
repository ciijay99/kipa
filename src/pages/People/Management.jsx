import { useState } from 'react';
import { Add, Remove } from '@mui/icons-material';
import { management } from '../../data';

const Management = () => {
  const [managementData, setManagementData] = useState(
    management.map((person) => ({
      ...person,
      click: false,
      showSummary: false,
    }))
  );

  const handleButtonClick = (id) => {
    setManagementData((prevManagementData) =>
      prevManagementData.map((person) =>
        person.id === id
          ? {
              ...person,
              click: !person.click,
              showSummary: !person.showSummary,
            }
          : person
      )
    );
  };

  return (
    <div className='flex justify-center items-center'>
      <div className='w-9/12 h-auto flex flex-col mt-24 mb-24'>
        <div className='flex flex-col'>
          <h2 className='text-4xl text-green-850 text-bold mb-8'>
            Management
          </h2>
          <p className='sm:text-sm text-xs mb-10'>
            The management overseas the daily running of the KADIPA
            office.
            <br />
            The management is headed by an Executive Secretary and
            four other highly skilled and thoroughbred professionals.
          </p>
        </div>
        <section className='executives'>
          <div className='container executives__container w-full'>
            {managementData.map(
              ({
                id,
                name,
                img,
                role,
                summary,
                click,
                showSummary,
              }) => {
                return (
                  <article
                    key={id}
                    className='executive'
                  >
                    <div
                      className={`executive__icon flex flex-row gap-8 py-1 ${
                        id % 2 ? 'bg-green-850' : 'bg-gray-300'
                      }`}
                      onClick={() => handleButtonClick(id)}
                    >
                      {click ? (
                        <Remove
                          sx={{
                            color: `${id % 2 ? 'white' : 'black'}`,
                          }}
                        />
                      ) : (
                        <Add
                          sx={{
                            color: `${id % 2 ? 'white' : 'black'}`,
                          }}
                        />
                      )}
                      <h4
                        className={`${
                          id % 2 ? 'text-white' : ' text-gray-900'
                        }`}
                      >
                        {role}
                      </h4>
                    </div>
                    {showSummary && (
                      <div className=' bg-white grid grid-cols-2'>
                        <img
                          src={img}
                          alt=''
                        />
                        <div className='mt-0 sm:mt-6 md:mt-0'>
                          <h4 className='text-xl text-blue-850 mb-4'>
                            {name}
                          </h4>
                          <p className='text-xs text-justify'>
                            {summary}
                          </p>
                        </div>
                      </div>
                    )}
                  </article>
                );
              }
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Management;
