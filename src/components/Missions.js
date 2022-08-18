import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <section className="card_mission">
          {missions.map((missionsList, index) => (
            <MissionCard
              key={ index }
              name={ missionsList.name }
              year={ missionsList.year }
              country={ missionsList.country }
              destination={ missionsList.destination }
            />
          ))}
        </section>
      </div>
    );
  }
}
export default Missions;
