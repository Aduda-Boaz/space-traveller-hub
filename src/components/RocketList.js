import { Card, Button } from 'react-bootstrap';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocketAction } from '../redux/rockets';

function RocketListCard({
  id,
  rocketName,
  description,
  flickrImages,
}) {
  const dispatch = useDispatch();
  const rocketReserved = (id) => {
    dispatch(reserveRocketAction(id));
  };

  return (
    <Card key={id} expand="md" className="Horizontal-Card">
      <Card.Img variant="left" src={flickrImages} className="Rocket-Img" />
      <Card.Body>
        <Card.Title>{rocketName}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary" className="Reserve-Rocket" onClick={() => rocketReserved(id)}>Reserve Rocket</Button>
      </Card.Body>
    </Card>
  );
}

RocketListCard.propTypes = {
  id: PropTypes.number.isRequired,
  rocketName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  flickrImages: PropTypes.string.isRequired,
};

export default RocketListCard;
