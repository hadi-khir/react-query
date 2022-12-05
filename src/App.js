import './App.css';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Link, BrowserRouter, Route, Routes } from 'react-router-dom';
import { PokemonPage } from './components/Pokemon.page';
import { RQPokemonPage } from './components/RQPokemon.page';
import { HomePage } from './components/Home.page';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <div>
          <p>Hello!</p>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/pokemon">Pokemon</Link>
              </li>
              <li>
                <Link to="/react-query-pokemon">React Query Pokemon</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/pokemon" element={<PokemonPage />} />
            <Route path="/react-query-pokemon" element={<RQPokemonPage />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
