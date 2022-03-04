import { useEffect, useState } from 'react';
import './App.css';
import Results from './Results';

function App() {

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState();

  useEffect(() => {
    getResults();
  }, [query]);
  
  const getResults = async () => {
    const response = await fetch(
      `https://5306h0oq6b.execute-api.eu-central-1.amazonaws.com/opensearch-api-test?q=${query}`
    );
    const data = await response.json();
    setProducts(data.hits.hits);
    // console.log(data.hits.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">
      <div className="content">
        <form onSubmit={getSearch} className='search-form'>
          <input className='search-bar' type="text" value={search} onChange={updateSearch} />
          <button className='search-button' type="submit">GO</button>
        </form>

        <h1>Résultat de votre recherche</h1>

        {products.map((result) => (
          <Results
            image={result._source.image_url}
            brand={result._source.brand}
            reference={result._source.reference}
            details={result._source.results}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
