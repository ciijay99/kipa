import { useState } from 'react';

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
    <div className='flex justify-center items-center'>
      <div className='w-9/12 h-auto flex flex-col mt-32 mb-24'>
        <h1 className='text-4xl text-green-850 text-bold mb-8 text-left ml-0'>
          CONTACT US
        </h1>
        <form
          onSubmit={handleSubmit}
          className='w-full md:w-4/5 flex flex-col'
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
            required
          ></textarea>
          <button
            type='submit'
            className='w-2/5 bg-green-850 text-white p-2 rounded-sm sm:text-sm'
          >
            Send Message
          </button>
        </form>
        {statusMessage && <p>{statusMessage}</p>}
      </div>
    </div>
  );
};

export default Contact;
