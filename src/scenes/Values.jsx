import HandshakeIcon from '@mui/icons-material/Handshake';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const Values = () => {
  return (
    <div className=' mt-10'>
      <h1 className='text-4xl text-green-850 font-bold mb-4 mt-10 text-center font-rubik ml-0'>
        Our Values
      </h1>
      <div className='grid grid-cols-3 justify-evenly mx-32 py-10 flex-col gap-10 lg:flex lg:flex-row lg:gap-0'>
        <span className='flex flex-col justify-center px-3'>
          <HandshakeIcon
            sx={{
              placeSelf: 'center',
              fontSize: '5rem',
              color: '#1BB35D',
            }}
          />
          <h4 className='text-center font-medium'>Service</h4>
        </span>
        <span className='hidden lg:flex flex-col justify-center px-3'>
          <MoreHorizIcon
            sx={{ placeSelf: 'center', fontSize: '5rem' }}
          />
        </span>
        <span className='flex flex-col justify-center px-3'>
          <TipsAndUpdatesIcon
            sx={{
              placeSelf: 'center',
              fontSize: '5rem',
              color: '#1BB35D',
            }}
          />
          <h4 className='text-center font-medium'>Innovation</h4>
        </span>
        <span className='hidden lg:flex flex-col justify-center px-3'>
          <MoreHorizIcon
            sx={{ placeSelf: 'center', fontSize: '5rem' }}
          />
        </span>
        <span className='flex flex-col justify-center px-3'>
          <Diversity1Icon
            sx={{
              placeSelf: 'center',
              fontSize: '5rem',
              color: '#1BB35D',
            }}
          />
          <h4 className='text-center font-medium'>Diversity</h4>
        </span>
        <span className=' flex-col justify-center px-3 hidden lg:flex'>
          <MoreHorizIcon
            sx={{ placeSelf: 'center', fontSize: '5rem' }}
          />
        </span>
        <span className='flex flex-col justify-center px-3'>
          <SupportAgentIcon
            sx={{
              placeSelf: 'center',
              fontSize: '5rem',
              color: '#1BB35D',
            }}
          />
          <h4 className='text-center font-medium'>Customer-First</h4>
        </span>
        <span className=' flex-col justify-center px-3 hidden lg:flex'>
          <MoreHorizIcon
            sx={{ placeSelf: 'center', fontSize: '5rem' }}
          />
        </span>
        <span className='flex flex-col justify-center px-3'>
          <QueryBuilderIcon
            sx={{
              placeSelf: 'center',
              fontSize: '5rem',
              color: '#1BB35D',
            }}
          />
          <h4 className='text-center font-medium'>Efficiency</h4>
        </span>
      </div>
    </div>
  );
};

export default Values;
