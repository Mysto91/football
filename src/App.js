import './App.css';

const SerpApi = require('google-search-results-nodejs');
const search = new SerpApi.GoogleSearch("b4b0addf2eb0ce17d1bc6ba7eb3fdc91f501069c34c727e5508af2af2f3b8861");

const params = {
  q: "Olympique de Marseille",
  location: "austin, texas, united states"
};

const callback = function (data) {
  console.log(data['sports_results']);
};

// Show result as JSON
search.json(params, callback);

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div>
      </div>
    </div>
  );
}

export default App;
