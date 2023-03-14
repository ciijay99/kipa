import Values from '../scenes/Values';

const About = () => {
  return (
    <div className='flex justify-center items-center mb-32'>
      <div className='w-full h-auto flex flex-col mt-16'>
        <div className='contact-header bg-no-repeat bg-cover bg-bg2 bg-center z-20 w-full h-64  mb-20 flex flex-col object-contain justify-center'>
          <h1 className='text-5xl font-bold text-white mb-8 text-center ml-0'>
            About Us
          </h1>
        </div>

        <div
          className=' w-10/12 md:w-9/12 flex place-self-center flex-col mb-16'
          id='who-we-are'
        >
          <div className='h-auto w-full sm:w-full shadow-3xl place-self-center mb-20 mt-10 flex flex-col sm:flex-row p-6 md:p-14 bg-gray-50 rounded-xl justify-around'>
            <div className='w-full sm:w-1/3 h-full flex justify-center place-self-center'>
              <h2 className='font-medium text-xl md:text-4xl text-green-850 mt-2 sm:mt-0 mb-5 sm:mb-0'>
                Who We Are
              </h2>
            </div>
            <div className='border-t-2 sm:border-t-0 sm:border-l-2 border-green-850 mb-8 w-full sm:w-8 md:w-1 sm:h-full sm:mb-0'></div>
            <div className='w-full h-72 sm:w-3/5 sm:h-full flex flex-col justify-between mb-8 sm:mb-0'>
              <p className=' text-xs sm:text-sm font-light text-justify sm:text-left leading-normal  mb-5 md:mb-3'>
                Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Error sed reiciendis temporibus, est officia
                aliquam nemo voluptates dolorum ea porro rerum, sit
                officiis qui doloribus dicta neque nostrum corporis
                animi. Soluta debitis enim laboriosam consequatur
                error.
              </p>
              <p className='text-xs sm:text-sm font-light text-justify leading-normal sm:text-left'>
                Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Sed, tenetur aliquam libero repellat amet
                blanditiis minus a tempora, sapiente, voluptatibus
                reiciendis fuga quas rem illo quibusdam consequatur?
                Eaque dolore laborum, corrupti incidunt officiis
                repellendus fugiat accusantium exercitationem, porro
                odio deleniti.
              </p>
            </div>
          </div>
          {/* <h1 className='text-4xl text-green-850 text-bold mb-4 text-left font-rubik ml-0'>
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
          </p> */}
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
