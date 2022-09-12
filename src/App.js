import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h1>Challenge week 4</h1>
          <h2>Public a web server into docker hub using Github Actions</h2>
        </p>
        <a
          className="App-link"
          href="https://hub.docker.com/repository/docker/sanchezsv/webserver"
          target="_blank"
          rel="noopener noreferrer"
        >
          Docker hub repository
        </a>
        <a
          className="App-link"
          href="https://github.com/javierSanchez5/web-server"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github repository
        </a>
      </header>
    </div>
  );
}

export default App;
