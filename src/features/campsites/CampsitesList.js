import CampsiteCard from './CampsiteCard';
import {Col,Row} from 'reactstrap';
import { selectAllCampsites } from './campsitesSlice';


const CampsitesList = () => {
    const campsites = selectAllCampsites();

    return (
        <Row className='ms-auto'>
            {campsites.map((Campsite) =>(
                <Col md='5' className='m-4' key={Campsite.id}>
                  <CampsiteCard campsite={Campsite}/>  
                </Col>                
            ))}
        </Row>
    )
}

export default CampsitesList;