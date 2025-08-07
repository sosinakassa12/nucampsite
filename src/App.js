import React from 'react';
import { Container} from 'reactstrap';
import Header from './components/Header';
import CampsitesList from './features/campsites/CampsitesList';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
      <CampsitesList />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
