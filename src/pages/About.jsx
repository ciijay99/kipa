import Values from '../scenes/Values';

const About = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className='w-full h-auto flex flex-col mt-32 mb-24'>
        <div className='w-9/12 flex place-self-center flex-col'>
          <h1 className='text-4xl text-green-850 text-bold mb-4 text-left font-rubik ml-0'>
            Who We Are
          </h1>
          <p className='text-sm text-left w-full lg:w-8/12'>
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
            <p className='text-sm text-justify mb-3 w-full lg:w-8/12'>
              Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Error distinctio qui dicta assumenda, quae,
              architecto illo sed, at saepe culpa delectus deleniti ex
              rerum.
            </p>
            <h2 className='text-green-850 font-rubik tracking-normal text-xl mb-1 font-semibold text-left ml-0'>
              Mission Statement
            </h2>
            <p className='text-sm text-justify mb-3 w-full lg:w-8/12'>
              Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Error distinctio qui dicta assumenda, quae,
              architecto illo sed, at saepe culpa delectus deleniti ex
              rerum.
            </p>
          </div>
        </div>
        <div className='flex-col backdrop-blur-sm inset-0 justify-center object-contain flex h-72 bg-fixed bg-no-repeat bg-bg bg-top bg-cover'>
          {/* <div class='absolute inset-0 backdrop-blur-sm'></div> */}
          <div className='inset-0 flex flex-col text-white justify-center text-center align-middle z-10'>
            <h3 className='font-rubik font-bold text-white text-4xl pb-5'>
              Investment Areas
            </h3>
            <ul className='grid grid-cols-3 gap-2'>
              <li className='font-semibold md:text-2xl'>
                Agriculture
              </li>
              <li className='font-semibold text-sm md:text-2xl'>
                Education
              </li>
              <li className='font-semibold text-sm md:text-2xl'>
                ICT
              </li>
              <li className='font-semibold text-sm md:text-2xl'>
                Health
              </li>
              <li className='font-semibold text-sm md:text-2xl'>
                Environment
              </li>
              <li className='font-semibold text-sm md:text-2xl'>
                Tourism
              </li>
            </ul>
          </div>
        </div>
        <Values />
      </div>
    </div>
  );
};

export default About;
