import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Notificacion from './CartWidget';
import './NavBar.css';
import Logo from './logo';







const Barranav = () => {
    return (
        <>
            <Navbar expand="lg" className="barra-gral">
                <Container className="barra ">
                    <Navbar.Brand href="#home" className='barra-brand'>Chars tecnology</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Logo />
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Productos</Nav.Link>
                            <Nav.Link href="#link">Compra</Nav.Link>
                        </Nav>
                        <Notificacion />
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
}

export default Barranav;