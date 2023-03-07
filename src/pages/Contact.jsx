import { useState } from 'react';
import '../scenes/Header.css';

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
    <div className='flex flex-col justify-center items-center bg-gray-75'>
      <div className='contact-header w-full h-52 mt-20 flex flex-col object-contain justify-center'>
        <h1 className='text-4xl text-white  mb-8 text-center ml-0'>
          CONTACT US
        </h1>
      </div>
      <div
        className='w-full h-auto flex gap-7 bg-white p-10 place-content-between justify-center'
        id='contact--body__section'
      >
        <div
          className=' flex flex-col mb-24 bg-green-850 justify-center items-center'
          style={{
            boxShadow:
              '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 2px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
            borderRadius: '5vw',
            width: '50vw',
            minHeight: '50vw',
            marginTop: '-5vw',
            marginBottom: '0px',
            padding: '8vw 5vw 5vw',
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
              className='text-sm mb-4 border-2 border-green-850 p-2 rounded-sm'
              onChange={handleChange}
              required
            />
            <input
              type='email'
              name='email'
              value={formData.email}
              placeholder='Enter Your Email'
              className='text-sm mb-4 border-2 border-green-850 p-2 rounded-sm invalid:text-pink-600'
              onChange={handleChange}
              required
            />
            <textarea
              name='message'
              value={formData.message}
              rows='10'
              columns='30'
              placeholder='Your Message'
              className='text-sm mb-6 border-2 border-green-850 p-2 rounded-sm focus-visible:ring-green-850'
              onChange={handleChange}
              style={{
                '&focus': { outline: '#0F6735 auto 1px' },
              }}
              required
            ></textarea>
            <button
              type='submit'
              className='w-2/5 bg-white text-green-850 align-middle place-self-center p-2 rounded-sm sm:text-sm hover:bg-red-850 hover:text-white'
            >
              Send Message
            </button>
          </form>
          {statusMessage && <p>{statusMessage}</p>}
        </div>
        <div className=' w-5/12 h-auto flex flex-col mb-24 p-10 justify-center text-left'>
          <h5 className='text-white'>CONTACT KIPA</h5>
          <h6 className='text-red-850'>contact-kipa@kbsg.gov.ng</h6>
          <a href='tel:+234123456789'>
            <h4 className='text-left'>+234 123 456 7890</h4>
          </a>
          <h6>
            <span>
              <strong>Location:</strong>
            </span>
            <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Dolore, omnis.
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Contact;
