import heroImg from './assets/hero.svg'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>contentful cms</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos magni
            est id dicta explicabo, facilis distinctio exercitationem deleniti
            nesciunt sed ipsam corrupti omnis optio, possimus dignissimos
            consequatur minima aliquid cum.
          </p>
        </div>
        <div className="img-container">
            <img src={heroImg} alt="women and the browser" className='img' />
        </div>
      </div>
    </section>
  );
}

export default Hero;
