import { useSelector } from 'react-redux';
import MissionList from './MissionList';

const MissionTable = () => {
  const msn = useSelector((state) => state.missions);

  return (
    <div>
      <table className="table-bordered table-striped table-hover">
        <thead>
          <tr className="fs-5">
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {
            msn.map((mission) => (
              <MissionList
                key={mission.mission_id}
                id={mission.mission_id}
                name={mission.mission_name}
                description={mission.description}
              />
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default MissionTable;
