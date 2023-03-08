import React from 'react';

const About = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className='w-9/12 h-auto flex flex-col mt-32 mb-24'>
        <h1 className='text-4xl text-green-850 text-bold mb-4 text-left ml-0'>
          Who We Are
        </h1>
        <p className='text-sm text-left w-6/12'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et
          veritatis exercitationem ea ex nostrum eaque quaerat
          doloremque sint ipsum vel, provident minima commodi qui,
          dolores cumque obcaecati sapiente expedita? Quo atque
          consequatur, sequi nobis at molestias non, dolorem
          accusantium corrupti quam fuga nulla, necessitatibus ullam
          impedit velit nemo! Voluptatem reprehenderit quasi provident
          inventore aliquam. Laudantium a similique quisquam
          reiciendis nostrum quam earum? Nisi, explicabo dicta!
        </p>
        <div className='mt-10 mb-8 justify-self-center flex flex-col'>
          <h2 className='text-green-850 text-xl font-semibold mb-1 text-left ml-0'>
            Our Vision
          </h2>
          <p className='text-sm text-justify mb-3 w-7/12'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Error distinctio qui dicta assumenda, quae, architecto
            illo sed, at saepe culpa delectus deleniti ex rerum.
          </p>
          <h2 className='text-green-850 text-xl mb-1 font-semibold text-left ml-0'>
            Mission Statement
          </h2>
          <p className='text-sm text-justify mb-3 w-7/12'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Error distinctio qui dicta assumenda, quae, architecto
            illo sed, at saepe culpa delectus deleniti ex rerum.
          </p>
        </div>
        <div className=' object-contain flex h-56 bg-no-repeat bg-transparent bg-bg'>
          <div>
            <h3>Investment Areas</h3>
            <ul>
              <li>Agriculture</li>
              <li>Education</li>
              <li>ICT</li>
              <li>Health</li>
              <li>Environment</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
