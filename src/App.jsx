/** @jsxImportSource @emotion/react */
import { Global, css } from '@emotion/react';
import logo from './logo.svg';
import globalStyle from './styles/global';
import Helloworld from './components/HelloWorld';

const style = css`
  & {
    text-align: center;
  }

  .app-logo {
    height: 40vmin;
    pointer-events: none;
  }

  @media (prefers-reduced-motion: no-preference) {
    .app-logo {
      animation: app-logo-spin infinite 20s linear;
    }
  }

  .app-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    font-size: calc(10px + 2vmin);
    color: white;
    background-color: #282c34;
  }

  .app-link {
    color: #61dafb;
  }

  @keyframes app-logo-spin {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }

  button {
    font-size: calc(10px + 2vmin);
  }
`;

const App = () => (
  <>
    <Global styles={globalStyle} />
    <div className="App" css={style}>
      <Helloworld />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  </>
);

export default App;
