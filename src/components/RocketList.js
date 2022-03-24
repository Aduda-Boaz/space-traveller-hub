import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocketAction, cancelReserveAction } from '../redux/rockets';

function RocketListCard({
  id,
  rocketName,
  description,
  flickrImages,
  reserved,
}) {
  const dispatch = useDispatch();
  const rocketReserved = (id) => {
    dispatch(reserveRocketAction(id));
  };
  const cancelReserved = (id) => {
    dispatch(cancelReserveAction(id));
  };

  return (
    <Card key={id} expand="md" className="Horizontal-Card">
      <Card.Img variant="left" src={flickrImages} className="Rocket-Img" />
      <Card.Body>
        <Card.Title>{rocketName}</Card.Title>
        {
          reserved
            ? (
              <div>
                <Card.Text>
                  <Badge bg="success">Reserved</Badge>
                  {' '}
                  {description}
                </Card.Text>
                <Button variant="outline-warning" className="Cancel-Button" onClick={() => cancelReserved(id)}>Cancel Reservation</Button>
              </div>
            )
            : (
              <div>
                <div>
                  <Card.Text>{description}</Card.Text>
                </div>
                <Button variant="primary" className="Reserve-Rocket" onClick={() => rocketReserved(id)}>Reserve Rocket</Button>
              </div>
            )
        }
      </Card.Body>
    </Card>
  );
}

RocketListCard.propTypes = {
  id: PropTypes.number.isRequired,
  rocketName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  flickrImages: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default RocketListCard;
