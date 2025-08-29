import { Container, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectCampsiteById } from '../features/campsites/campsitesSlice';
import CampsiteDetail from '../features/campsites/CampsiteDetail';
import CommentsList from '../features/comments/CommentsList';
import SubHeader from '../components/SubHeader';
import { useSelector } from 'react-redux';

const CampsiteDetailPage = () => {
    const { campsiteId } = useParams();
    const campsite = useSelector((state) => selectCampsiteById(state, campsiteId));

    if (!campsite) {
  return <p>Loading... or campsite not found.</p>;
}
    console.log('campsite:', campsite);
    return (
        <Container>
             <SubHeader current={campsite?.name} detail={true} />
            <Row>
                <CampsiteDetail campsite={campsite} />
                <CommentsList campsiteId={campsiteId} />
            </Row>
        </Container>
    );
};

export default CampsiteDetailPage;