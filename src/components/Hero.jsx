import aishaImage from  '../images/aisha.jpeg'

function Hero() {
  return (
    <section className='hero' id='home'>
        <div className='hero-content'>
            <p className='hero-intro'>Hi, I'm</p>
            
            <h1>Ayesha</h1>

            <h2>MERN Stack Developer</h2>

            <div className='hero-buttons'>
                <a href="#projects">View Projects</a>
                <a href="#contact">Contact Me</a>
            </div>          
        </div>   

        <div className='hero-image'>
            <img src={aishaImage} alt="Ayesha" />
        </div>
    </section>
  )
}

export default Hero
