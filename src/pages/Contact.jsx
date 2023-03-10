import { useState } from 'react';
import '../scenes/Header.css';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';
import PhoneIcon from '@mui/icons-material/Phone';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Send the form data to the email service provider
    try {
      const response = await fetch(
        'https://api.sendgrid.com/v3/mail/send',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.REACT_APP_SENDGRID_API_KEY}`,
          },
          body: JSON.stringify({
            personalizations: [
              {
                to: [{ email: 'your-email@example.com' }],
                subject: `New message from your ${formData.name}`,
              },
            ],
            from: { email: formData.email },
            content: [
              {
                type: 'text/plain',
                value: `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`,
              },
            ],
          }),
        }
      );

      if (response.ok) {
        setStatusMessage('Your message was sent successfully.');
      } else {
        setStatusMessage(
          'There was a problem sending your message. Please try again later.'
        );
      }
    } catch (error) {
      setStatusMessage(
        'There was a problem sending your message. Please try again later.'
      );
    }
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className='flex flex-col justify-center items-center bg-white'>
      <div className='contact-header bg-bg bg-center z-20 w-full h-52 mt-20 flex flex-col object-contain justify-center'>
        <h1 className='text-5xl font-bold text-white mb-8 text-center ml-0'>
          Contact Us
        </h1>
      </div>
      <div
        className='w-full h-auto flex gap-7 z-10 mb-10 bg-white p-10 place-content-between justify-center flex-col place-items-center lg:flex-row'
        id='contact--body__section'
      >
        <div
          className=' flex flex-col mb-24 justify-center bg-yellow-75 items-center w-[80vw] sm:w-[50vw] sm:h-[50vw] mt-[-10vw] sm:mt-[-5vw]'
          style={{
            boxShadow:
              '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 2px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
            borderRadius: '1vw',
            // width: '50vw',
            minHeight: '50vw',
            // marginTop: '-5vw',
            marginBottom: '0px',
            padding: '8vw 2vw 5vw',
            overflow: 'hidden',
          }}
        >
          <form
            onSubmit={handleSubmit}
            className='w-full h-full md:w-4/5 flex flex-col gap-5 justify-between'
          >
            <input
              type='text'
              name='name'
              value={formData.name}
              placeholder='Enter Your Full Name'
              className='text-sm mb-4 focus:outline-none border-b-2 border-green-850 p-2 rounded-sm'
              onChange={handleChange}
              required
            />
            <input
              type='email'
              name='email'
              value={formData.email}
              placeholder='Enter Your Email'
              className='text-sm focus:outline-none border-b-2 mb-4 border-green-850 p-2 rounded-sm invalid:text-pink-600'
              onChange={handleChange}
              required
            />
            <textarea
              name='message'
              value={formData.message}
              rows='10'
              columns='30'
              placeholder='Your Message'
              className='text-sm mb-6 border-b-2 focus:outline-none border-green-850 p-2 rounded-sm focus-visible:ring-green-850'
              onChange={handleChange}
              style={{
                '&focus': { outline: '#0F6735 auto 1px' },
              }}
              required
            ></textarea>
            <button
              type='submit'
              className='w-4/5 bg-green-950 text-white align-middle place-self-center p-2 rounded-sm sm:text-sm'
            >
              Send Message
            </button>
          </form>
          {statusMessage && <p>{statusMessage}</p>}
        </div>
        <div className=' w-11/12 h-auto flex flex-col mb-24 md:p-10 justify-center text-left lg:w-5/12'>
          <h2 className='text-green-850 text-center text-4xl'>
            Get In Touch
          </h2>
          <h4 className=' font-normal p-0 mb-16 text-left'>
            We are eager to assist you in anyway you need, you can
            fill out the enquiry form and a member of our response
            team would reach out to you.
          </h4>
          <h4 className='flex gap-1'>
            <EmailIcon sx={{ color: 'green' }} />
            <h6 className='font-medium'>Email:&nbsp;</h6>
            contact-kipa@kbsg.gov.ng
          </h4>
          <a href='tel:+234123456789'>
            <h4 className='text-left flex gap-1'>
              <PhoneIcon sx={{ color: 'green' }} />
              <h6 className='font-medium'>Phone:&nbsp;</h6>
              +234 123 456 7890
            </h4>
          </a>
          <div>
            <h4 className='flex gap-1'>
              <PlaceIcon sx={{ color: 'green' }} />
              <h6 className='font-medium'>Location:&nbsp;</h6>
              Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Dolore, omnis.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
