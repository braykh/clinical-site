import './App.css';
import BloodFormContauner from './components/BloodForm/BloodFormContauner';
import BloodResultsContainer from './components/BloodResults/BloodResultsContainer';

function App() {
  return (
    <div className="App">
      <div className="container">

        <section className="form-container">
          <h2>Enter your blood test data</h2>
          <BloodFormContauner />
        </section>

        <section className="results-container">
          <h2>Your results</h2>
          <BloodResultsContainer />
        </section>
      </div>
    </div>
  );
}

export default App;
