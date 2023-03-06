import { useState } from 'react';
import { Add, Remove } from '@mui/icons-material';
import { management } from '../../data';

const Management = () => {
  const [click, setClick] = useState(false);
  const [showSummary, setShowSummary] = useState(false);

  const handleClick = () => {
    setClick(!click);
    setShowSummary(!showSummary);
  };
  return (
    <section className='flex justify-center items-center'>
      <div className='w-9/12 h-auto flex flex-col mt-28 mb-24'>
        <div className='flex flex-col'>
          <h2 className='text-4xl text-green-850 text-bold mb-8'>
            Management
          </h2>
          <p className='sm:text-sm text-xs mb-10'>
            The management overseas the daily running of the KADIPA
            office. They ensure that all the policies of the
            Government with regards the business environment and
            investment promotion are pursued vigorously to achieve the
            desired results
            <br />
            <br />
            The management is headed by an Executive Secretary and
            four other highly skilled and thoroughbred professionals.
            Below are the profiles of the members of the management
            team.
          </p>
        </div>
        <section className='executives'>
          <div className='container executives__container w-3/4'>
            {management.map(({ id, name, img, role, summary }) => {
              return (
                <article
                  key={id}
                  className='executive'
                >
                  <div
                    className='executive__icon flex flex-row gap-8 bg-green-850'
                    onClick={handleClick}
                  >
                    {click ? (
                      <Remove sx={{ color: 'white' }} />
                    ) : (
                      <Add sx={{ color: 'white' }} />
                    )}
                    <h4 className='text-white'>{role}</h4>
                  </div>
                  {showSummary && (
                    <div className='info grid grid-cols-2'>
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
            })}
          </div>
        </section>
      </div>
    </section>
  );
};

export default Management;
