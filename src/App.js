import logo from './logo.svg';
import './App.css';
import Fade from 'react-reveal/Fade';

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <Fade>
          <h4>
            aishani singh.
          </h4>
          <p><em>The derivative of sin(x) is equal to cos(x)</em></p>
          </Fade>
          <Fade top>
            <div className="links">
              <h4><em>my links</em></h4>
            </div>
              <a href="https://www.github.com/aishanisingh">github</a>
              <a href="https://discord.com/users/644348690609471518">discord</a>
              <a href="https://aishanisingh.wixsite.com/myblog">personal blog</a>
              <a href="https://twitter.com/shoyokatsuki">twitter</a>
            </Fade>
          <br></br>
          <Fade top>
          <div className="about">
            <h4><em>about me</em></h4>
            <p>harker '25</p>
            <p>stem + writing</p>
            <a href="mailto:aishani.singh@gmail.com">aishani.singh@gmail.com</a>
          </div>
          </Fade>
        </header>
      </div>
  );
}

export default App;
