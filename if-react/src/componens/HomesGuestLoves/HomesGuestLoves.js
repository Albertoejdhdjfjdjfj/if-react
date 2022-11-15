import Slider from './Slider';
import data from '../variables';

function HomesGuestloves() {
  return (
    <div className="homesGuestloves">
      <h2>Homes guests loves</h2>
      <Slider data={data} />
    </div>
  );
}

export default HomesGuestloves;
