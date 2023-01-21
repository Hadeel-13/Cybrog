import './Hero.css'
import { PrimaryButton } from '../../components/index'

const Hero = () => {
  return (
    <>
      <div className='bg-dark hero-main bg-darkless rounded-5 text-white p-5'>
        <div className='hero-text'>
          <h6 className='hero-subtitle fw-300'>Welcome To Cyborg</h6>
          <h4 className='hero-title text-uppercase fs-1 fw-900 mb-3' style={{maxWidth: '500px'}}><em className='text-cprimary'>Browse</em><br />Our Popular <br />Games Hero</h4>
          {/* <h4 className='hero-title text-uppercase fs-1 fw-bolder mb-3 text-wrap' style={{maxWidth: '50%'}}><em className='text-cprimary'>Browse</em> Our Popular Games Hero</h4> */}
          <PrimaryButton>Browse Now</PrimaryButton>
        </div>
      </div>
    </>
  )
}

export default Hero