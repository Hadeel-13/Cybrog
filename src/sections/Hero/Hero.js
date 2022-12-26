import './Hero.css'

const Hero = () => {
  return (
    <>
      <div className='hero-main bg-darkless rounded-5 text-white p-5'>
        <div className='hero-text '>
          <h6 className='hero-subtitle'>Welcome To Cyborg</h6>
          <h4 className='hero-title text-uppercase fs-1 fw-bolder mb-3 text-wrap' style={{maxWidth: '50%'}}><em>Browse</em> Our Popular Games Hero</h4>
          <div className='main-button'>
            <a href='browse.html'> Browse Now</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero