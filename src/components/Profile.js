import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Table } from 'react-bootstrap';

function Profiles() {
  const msn = useSelector((state) => state.missions);
  const reservedMissions = msn.filter((mission) => mission.reserved);
  const rockets = useSelector((state) => state.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);

  return (
    <div className="Profile-List">
      <Container className="d-flex">
        <Container>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Rockets Reserved</th>
              </tr>
            </thead>
            <tbody>
              {
                reservedRockets.map((rocket) => (
                  <tr key={rocket.id}>
                    <td>{rocket.rocketName}</td>
                  </tr>
                ))
              }
            </tbody>
          </Table>
        </Container>
        <Container>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Missions Reserved</th>
              </tr>
            </thead>
            <tbody>
              {
                reservedMissions.map((mission) => (
                  <tr key={mission.mission_id}>
                    <td>{mission.mission_name}</td>
                  </tr>
                ))
              }
            </tbody>
          </Table>
        </Container>
      </Container>
    </div>
  );
}

export default Profiles;
