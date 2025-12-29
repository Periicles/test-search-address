import ResultList from './components/ResultList';
import SearchBar from './components/SearchBar';
import useAddressSearch from './hooks/useAddressSearch';
import type { TSearchResults } from './types/TSearchResults';

export default function App() {
  const results: TSearchResults = useAddressSearch();

  return (
    <div className="min-h-screen bg-base-200 flex justify-center">
      <div className="w-full max-w-4xl px-4 py-4">
        <div className="text-center mb-4">
          <h1 className="text-4xl font-bold text-primary mb-2">
            Recherche d'Adresse en France
          </h1>
          <p className="text-base text-base-content/70">
            Trouvez une adresse officielle via l'API de la Base d'Adresses Nationale
          </p>
        </div>

        <SearchBar onSearch={results.searchAddresses} isLoading={results.loading} />

        {results.error && (
          <div className="alert alert-error mb-6 shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{results.error}</span>
          </div>
        )}

        <ResultList addresses={results.addresses} />
      </div>
    </div>
  );
}
