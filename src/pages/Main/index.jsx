import { Container } from './styles';

import ControlPanel from '../../components/ControlPanel';
import Display from '../../components/Display';

const Main = () => {
  return (
    <Container>
      <Display />
      <ControlPanel />
    </Container>
  );
};

export default Main;
