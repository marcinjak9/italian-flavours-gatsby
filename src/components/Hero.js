import React from 'react'
import MediaQuery from 'react-responsive'
import PropTypes from 'prop-types'

const Hero = ({
  title, payoff, cta, bgOverlay, images: {
    bgImage, bgImage1280, bgImage1024, bgImage480, bgImage320, bgImage768,
  }, centerText,
}) => (
  <div className="container-fluid hero-container">
    <MediaQuery minWidth={1919}>
      <img src={bgImage} className="hero-bg-img" alt="" />
    </MediaQuery>
    <MediaQuery minWidth={1279} maxWidth={1919}>
      <img src={bgImage1280 || bgImage} className="hero-bg-img" alt="" />
    </MediaQuery>
    <MediaQuery minWidth={1023} maxWidth={1279}>
      <img src={bgImage1024 || bgImage} className="hero-bg-img" alt="" />
    </MediaQuery>
    <MediaQuery minWidth={767} maxWidth={1023}>
      <img src={bgImage768 || bgImage} className="hero-bg-img" alt="" />
    </MediaQuery>
    <MediaQuery minWidth={479} maxWidth={767}>
      <img src={bgImage480 || bgImage} className="hero-bg-img" alt="" />
    </MediaQuery>
    <MediaQuery minWidth={1} maxWidth={479}>
      <img src={bgImage320 || bgImage} className="hero-bg-img" alt="" />
    </MediaQuery>


    {bgOverlay && <div className="hero-overlay" />}
    <div className="row outer-row">
      <div className="col">
        <div className="container">
          <div className="row d-flex flex-column justify-content-center">
            <div className={`${centerText ? 'col-md-6 offset-md-3' : 'col-md-7'} hero`}>
              <h1 className="white-text">
                {title}
              </h1>
              <h3>
                {payoff}
              </h3>
              {cta()}
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
)

Hero.propTypes = {
  title: PropTypes.string,
  payoff: PropTypes.string,
  cta: PropTypes.func,
  bgOverlay: PropTypes.bool,
  images: PropTypes.shape({
    bgImage: PropTypes.string,
    bgImage1280: PropTypes.string,
    bgImage1024: PropTypes.string,
    bgImage480: PropTypes.string,
    bgImage320: PropTypes.string,
    bgImage768: PropTypes.string,
  }),
  centerText: PropTypes.bool,
}

export default Hero

// <div className="container-fluid hero-container" style={{ backgroundImage: `url('${hero.image}')` }}>
//       {hero.bgOverlay && <div className="hero-overlay" /> }
//       <div className="row outer-row">
//         <div className="col">
//           <div className="container">
//             <div className="row no-margin d-flex flex-column justify-content-center">
//               <div className="col-md-12 hero">
//                 <h1 className="white-text">{hero.title}</h1>
//                 <div className="col-md-6 offset-md-3">
//                   <h3>
//                     {hero.subtitle}
//                   </h3>
//                 </div>
//                 <Link to={hero.ctaLink} className="btn btn-primary">{hero.ctaText}</Link>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>
//     </div>
