import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Notificacion from './CartWidget';
import './NavBar.css';

const Barranav = () => {
    return (
        <>
            <Navbar expand="lg" className="barra-gral">
                <Container className="barra ">
                    <Navbar.Brand href="#home" className='barra-brand'>Chars e-commerce</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Productos</Nav.Link>
                            <Nav.Link href="#link">Compra</Nav.Link>
                            <Notificacion />
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Barranav;