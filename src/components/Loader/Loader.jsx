import { InfinitySpin } from 'react-loader-spinner';
import { LoaderContainer } from './LoaderStyled';

export const Loader = () => {
  return (
    <LoaderContainer>
      <InfinitySpin width="200" color="#90ee8f" />
    </LoaderContainer>
  );
};

export default Loader;
