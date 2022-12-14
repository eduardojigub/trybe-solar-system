import React from 'react';
import PropTypes from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const { name } = this.props;
    const { year } = this.props;
    const { country } = this.props;
    const { destination } = this.props;

    return (
      <div data-testid="mission-card" className="missions">
        <p data-testid="mission-name">
          { name }
        </p>
        <div className="missions_p">
          <p data-testid="mission-year">
            { year }
          </p>
          <p data-testid="mission-country">
            { country }
          </p>
          <p data-testid="mission-destination">
            { destination }
          </p>
        </div>
      </div>
    );
  }
}

export default MissionCard;

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};
