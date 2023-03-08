import React from 'react';

const About = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className='w-full h-auto flex flex-col mt-32 mb-24'>
        <div className='w-9/12 h-screen flex place-self-center flex-col'>
          <h1 className='text-4xl text-green-850 text-bold mb-4 text-left font-rubik ml-0'>
            Who We Are
          </h1>
          <p className='text-sm text-left w-6/12'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Et veritatis exercitationem ea ex nostrum eaque quaerat
            doloremque sint ipsum vel, provident minima commodi qui,
            dolores cumque obcaecati sapiente expedita? Quo atque
            consequatur, sequi nobis at molestias non, dolorem
            accusantium corrupti quam fuga nulla, necessitatibus ullam
            impedit velit nemo! Voluptatem reprehenderit quasi
            provident inventore aliquam. Laudantium a similique
            quisquam reiciendis nostrum quam earum? Nisi, explicabo
            dicta!
          </p>
          <div className='mt-10 mb-8 justify-self-center flex flex-col'>
            <h2 className='text-green-850 font-rubik tracking-normal text-xl font-semibold mb-1 text-left ml-0'>
              Our Vision
            </h2>
            <p className='text-sm text-justify mb-3 w-7/12'>
              Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Error distinctio qui dicta assumenda, quae,
              architecto illo sed, at saepe culpa delectus deleniti ex
              rerum.
            </p>
            <h2 className='text-green-850 font-rubik tracking-normal text-xl mb-1 font-semibold text-left ml-0'>
              Mission Statement
            </h2>
            <p className='text-sm text-justify mb-3 w-7/12'>
              Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Error distinctio qui dicta assumenda, quae,
              architecto illo sed, at saepe culpa delectus deleniti ex
              rerum.
            </p>
          </div>
        </div>
        <div className='flex-col justify-center object-contain flex h-72 bg-fixed bg-no-repeat bg-transparent bg-bg bg-bottom bg-cover'>
          <div className='flex flex-col text-white justify-center  text-center align-middle'>
            <h3 className=' font-rubik font-semibold text-2xl'>
              Investment Areas
            </h3>
            <ul>
              <li>Agriculture</li>
              <li>Education</li>
              <li>ICT</li>
              <li>Health</li>
              <li>Environment</li>
            </ul>
          </div>
        </div>
        <div>
          <h1 className='text-3xl text-green-850 text-bold mb-4 mt-10 text-center font-rubik ml-0'>
            Our Values
          </h1>
        </div>
      </div>
    </div>
  );
};

export default About;
