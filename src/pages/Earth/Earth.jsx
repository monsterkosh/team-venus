import Planets from '../../components/Planets/Planets';
import earthData from './earth-data';

const Earth = () => {
    return <Planets planetData={earthData} />;
};

export default Earth;