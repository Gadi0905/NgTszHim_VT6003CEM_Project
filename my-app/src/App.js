// css
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// custom components
import Header from './components/Header.js';
import CustomCard from './components/CustomCard.js';
import Footer from './components/Footer.js';
// bootstrap components
import Container from 'react-bootstrap/Container';
import CardGroup from 'react-bootstrap/CardGroup';
import Row from 'react-bootstrap/Row';
// image
import dog01 from './img/dog01.jpg';
import dog02 from './img/dog02.jpg';
import dog03 from './img/dog03.jpg';
import dog04 from './img/dog04.jpg';
import dog05 from './img/dog05.jpg';
import dog06 from './img/dog06.jpg';
import dog07 from './img/dog07.jpg';
import dog08 from './img/dog08.jpg';
import dog09 from './img/dog09.jpg';

function App() {
  return (
    <div>
      {/* navbar */}
      <Header />

      {/* body */}
      <br />
      <CardGroup>
        <Container>
          <Row>
            <CustomCard dogImg={dog01} name='Max' sex='M' age='1' />
            <CustomCard dogImg={dog02} name='KOBE' sex='F' age='2' />
            <CustomCard dogImg={dog03} name='OSCAR' sex='M' age='3' />
          </Row>
          <br />
          <Row>
            <CustomCard dogImg={dog04} name='COOPER' sex='M' age='1' />
            <CustomCard dogImg={dog05} name='OAKLEY' sex='F' age='2' />
            <CustomCard dogImg={dog06} name='MAC' sex='M' age='3' />
          </Row>
          <br />
          <Row>
            <CustomCard dogImg={dog07} name='CHARLIE' sex='M' age='1' />
            <CustomCard dogImg={dog08} name='REX' sex='F' age='2' />
            <CustomCard dogImg={dog09} name='RUDY' sex='M' age='3' />
          </Row>
        </Container>
      </CardGroup>
      <br />
      <Footer />
    </div>
  );
}

export default App;
