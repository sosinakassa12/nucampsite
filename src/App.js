import React from 'react';
import { Container} from 'reactstrap';
import Header from './components/Header';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <CampsitesDirectoryPage />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
