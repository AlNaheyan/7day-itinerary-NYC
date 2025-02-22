import './App.css';
import Calendar from './components/Calendar';

const App = () => {

  return (
    <div className="App">
      <h1>
        Itinerary for 7 days in NYC
      </h1>
      <h2>
        Welcome to NYC, Al. Check out this calendar to get to know the city and see the night life everyone talks about.
      </h2>
      <Calendar />
      
    </div>
  )
}

export default App