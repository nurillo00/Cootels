
import './App.css'

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
              <div className="hero-text">
                <h1 className='hero-title'>Nature, Warmth, and Beauty in One Space</h1>
                <p>One place to release all the stress, bring back happines, and get back to nature. We provide the best room and nature for you. Come visit us anytime you want.</p>
                <a href="">Reservation</a>
              </div>
              <img src="" alt="" />
            </div>
          </section>

        </div>
      </main>


    </>
  )
}

export default App
