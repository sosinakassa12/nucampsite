import CampsiteCard from './CampsiteCard';
import {CAMPSITES} from "../../app/shared/CAMPSITES";
import {Col,Row} from 'reactstrap';



const CampsitesList = () => {
    return (
        <Row className='ms-auto'>
            {CAMPSITES.map((Campsite) =>(
                <Col md='5' className='m-4' key={Campsite.id}>
                  <CampsiteCard campsite={Campsite}/>  
                </Col>                
            ))}
        </Row>
    )
}

export default CampsitesList;