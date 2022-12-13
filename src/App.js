import './App.css';
import Map from './Map.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
	  <div id="main">
	    <div id="title">United States Educational Attainment</div>
	    <div id="description">Percentage of adults age 25 and older with a bachelor's degree or higher (2010-2014)</div>
	    <div id="data" class="flex items-center justify-center">
		<Map />
	    </div>
	  </div>
	
	  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-full">
	    <a href='https://www.ers.usda.gov/data-products/county-level-data-sets/download-data.aspx' target="_blank" rel="noreferrer">USDA Economic Research Service</a>
	  </button>
	  <button class="bg-blue-500 mt-6 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
	    <a href="https://github.com/bstefansen" target="_blank" rel="noreferrer">Site Author</a>
	  </button>
      </header>
    </div>
  );
}

export default App;
