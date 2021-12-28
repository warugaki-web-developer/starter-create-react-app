/** @jsxImportSource @emotion/react */
import { Global } from '@emotion/react';
import globalStyle from './styles/global';
import Helloworld from './components/HelloWorld';

const App = () => (
  <>
    <Global styles={globalStyle} />
    <Helloworld />
  </>
);

export default App;
