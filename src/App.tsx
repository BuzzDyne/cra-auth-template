import logo from './logo.svg'
import './App.css'

function App() {
  const onCheckEnv = () => {
    console.log(`Inside onCheckEnv`)
    console.log(process.env['REACT_APP_TEST'])
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>

        <button onClick={() => onCheckEnv()}>Check Env</button>
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
  )
}

export default App
