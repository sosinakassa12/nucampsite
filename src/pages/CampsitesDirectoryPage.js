import {Container, Row, Col, Button } from 'reactstrap';
import CampsiteDetail from '../features/campsites/CampsiteDetail';
import CampsitesList from '../features/campsites/CampsitesList';
import { selectRandomCampsite } from '../features/campsites/campsitesSlice';

const CampsitesDirectoryPage = () => {
    let selectedCampsite = selectRandomCampsite();

    const toggleCampsite = () => {
        selectedCampsite = selectRandomCampsite;
        console.log(selectedCampsite);
        
    }
    return (
        <Container>
            <Button onClick={() => toggleCampsite()}>
                Select Random Campsites
            </Button>
            <Row>
                <Col sm='5'  ms='7'>
                <CampsitesList />
            </Col>
            <Col sm='7' md='5'>
            <CampsiteDetail campsite={selectedCampsite} />
            </Col>
            </Row>

        </Container>
    );
};

export default CampsitesDirectoryPage;