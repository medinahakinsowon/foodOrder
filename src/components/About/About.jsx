import React from 'react';
import bgPolygon from '../../assets/polygon.png';
import { FaUser } from 'react-icons/fa';
import Vector from '../../assets/vector-wave.png';
import PropTypes from 'prop-types';


const bgStyle = {
    backgroundImage: `url(${bgPolygon})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    width:'100%',
    height:'100%',
    position: 'relative'
}

const About = ({ HandlePopup }) => {
  About.propTypes = {
    HandlePopup: PropTypes.string.isRequired,
}
  return (
    <>
    

    <div style={bgStyle} className='py-14'>
        <div className='container min-h-[500px] relative z-10'>
            <h1 className='pt-20 tracking-wider text-4xl 
            font-semibold text-white text-center'>
              About Us
            </h1>
             
                {/*-----card section*/}
            <div className='bg-white/80 p-10 my-10'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia harum ullam excepturi quaerat numquam fuga maiores, obcaecati nemo similique odit labore dicta! Nemo autem minima deleniti consectetur ut blanditiis maiores distinctio quas quidem obcaecati odio, error quis nulla pariatur aspernatur?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, iste expedita et blanditiis est in ad. Numquam sed ratione optio, iusto tempore quas hic? Quasi illo optio fuga nobis aspernatur repellat labore aliquid? Aspernatur vel totam maiores adipisci iste quam, ex esse eaque omnis placeat, qui, recusandae eum natus quibusdam?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius neque debitis, accusamus libero nisi dolorem est iste nam itaque voluptates omnis. Eveniet, impedit. At vel id tenetur ea perferendis labore excepturi tempora quas! Est, praesentium dolor. In non nam, voluptas suscipit laboriosam ex debitis, error eos ad nesciunt deleniti ab.

              <div className='pt-10 flex justify-center '>

                        <button onClick={HandlePopup} className='flex justify-center items-center gap-2 bg-primary 
                            text-xl h-[40px] text-white px-5 py-2 hover:scale-105 duration-300'>
                            <FaUser/>
                            My Account
                        </button>

              </div>
            </div>
        </div>

          {/*-----wave section*/}
          <div className='absolute top-0 right-0 w-full'>
            <img src={Vector} alt='' className='mx-auto'/>
          </div>
    </div>
    
    
    
    
    </>
  )
}

export default About;