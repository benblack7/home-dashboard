import './App.css';
import Weather from './components/Weather.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Good Morning!
      </header>
      <div>
        Insert Weather
        <Weather />
      </div>
      <div>
        Today's Calendar
      </div>
      <div>
        Traffic Conditions
      </div>
      <div>
        Top Stories
      </div>
      <div>
        Router UP/DOWN Metrics
      </div>
      <div>
        Plex Stats
      </div>
      <div>
        Unread Emails
      </div>

    </div>
  );
}

export default App;