
import './App.css'
import HeroImg from "./assets/img/hero-bg.png"
import InfoImg from "./assets/img/info-img.png"

function App() {


  return (
    <>
      <header className='header'>
        <div className="container">
          <div className="header-wrap">
            <div className='logo'>Cootels</div>
            <ul className='header-list'>
              <li className='header-item'>
                <a className='header-list-link' href="">Rooms</a>
              </li>
              <li className='header-item'>
                <a className='header-list-link' href="">Reservation</a>
              </li>
              <li className='header-item'>
                <a className='header-list-link' href="">Contacs</a>
              </li>
            </ul>
            <a className='header-link' href="">Get Started</a>
          </div>
        </div>
      </header>

      <main>
        <div className="container">

          <section className='hero'>
            <div className="hero-wrap">
              <div className="hero-text-box">
                <h1 className='hero-title'>Nature, Warmth, and Beauty in One Space</h1>
                <p className='hero-text'>One place to release all the stress, bring back happines, and get back to nature. We provide the best room and nature for you. Come visit us anytime you want.</p>
                <a className='hero-link' href="">Reservation</a>
              </div>
              <img className='hero-img' src={HeroImg} alt="hero-img" />
            </div>
          </section>

          <section className='info'>
            <div className="info-wrap">
              <img src={InfoImg} alt="" />
              <div className="info-text-box">
                <h2 className='info-title'>Cozy and Down to Earth Cootage Hotel in Norway.</h2>
                <p className='info-text'>Our Cootage Hotel is an intimate hideway concieved for dicerning travelers. It faces directly the unique and spectacular panorama of the Hallerbos Jungle.</p>
                <p className='info-text2'>Cootels extends along a private, quiet, and beautiful nature. Stay away from crowd and enjoy the cozy and beauty with us.</p>
                <a className='info-link' href="">Learn More</a>
              </div>
            </div>
          </section>

        </div>
      </main>


    </>
  )
}

export default App
