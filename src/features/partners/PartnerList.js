import {Col} from 'reactstrap';
import Partner from './Partner';
import { selectallPartners } from './partnersSlice';
import { useSelector } from 'react-redux';

const PartnerList = ({selectallPartners}) => {
    const partners = useSelector(selectallPartners);
    return (
        <Col className='mt-4'>
            {partners.map((partner) => {
                return (
                    <div className='d-flex mb-5' key={partner.id}>
                        <Partner partner={partner}  />
                    </div>                    
                );
            })}
        </Col>
    );
}

export default PartnerList;