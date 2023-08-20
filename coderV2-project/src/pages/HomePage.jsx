import {Container, Row, Col} from 'react-bootstrap'
import heroImage from "../assets/img/hero.png"

const HomePage = () => {
    return (
        <div className="homePage">
            <header className="w-100 min-vh-100">
                <Container>
                    <Row>
                        <Col>
                            <h1>Temukan <br /> <span>Bakat Kreatifmu</span> <br /> Bersama Kami!</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, tempore. Ad, fuga eveniet.</p>
                            <button>Lihat Kelas</button>
                            <button>Lihat Promo</button>
                        </Col>
                        <Col>
                            <img src={heroImage} alt="hero-img" />
                        </Col>
                    </Row>
                </Container>
            </header>
        </div>

    )
}

export default HomePage