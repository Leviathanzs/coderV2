import logo from '../assets/img/hero.png'

const HomePage = () => {
    return (
        <div className="homePage">
            <header className="w-100 min-vh-100">
                <section className="home" id="home">
                    <div className="home-content">
                        <h1>Temukan Bakat Kreatifmu Bersama Kami!</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, molestiae.</p>
                        <div className="btn-container">
                            <a href="" className='btn-1'>Lihat Kelas</a>
                            <a href="" className='btn-2'>Lihat Promo</a>
                        </div>
                    </div>
                    <div className="hero-img">
                        <img src={logo} alt="rocket" />
                    </div>
                </section>
            </header>
        </div>

    )
}

export default HomePage