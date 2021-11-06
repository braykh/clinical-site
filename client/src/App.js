import './App.css';
import BloodFormContauner from './components/BloodForm/BloodFormContauner';
import BloodResultsContainer from './components/BloodResults/BloodResultsContainer';

function App() {
  return (
    <div className="App">
      <div className="container">

        <section className="form-container">
          form
          <BloodFormContauner />
        </section>

        <section className="results-container">
          results
          <BloodResultsContainer />
        </section>
      </div>
    </div>
  );
}

export default App;
