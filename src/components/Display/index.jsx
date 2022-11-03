import { Container } from './styles';

export const Display = ({ expr }) => <Container type="display">{expr || '0'}</Container>;
