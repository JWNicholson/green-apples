import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import SearchComponent from '../search/SearchComponent';

const NavbarComponent = () => {
  return (
    <Navbar bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand href='#home'>Movie App</Navbar.Brand>
        <SearchComponent  />
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
