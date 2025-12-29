import { useState, useEffect, useRef } from 'react';
import type { ISearchBarProps } from '../interfaces/IAddress';

/**
 * The SearchBar component debounces user input and triggers address searches.
 *
 * @param onSearch - Callback fired with the search query.
 * @param isLoading - Whether a search request is in-flight.
 * @return A JSX element rendering the search input field.
 */
export default function SearchBar({ onSearch, isLoading }: ISearchBarProps) {
  const [inputValue, setInputValue] = useState('');
  const lastSearchedValue = useRef('');

  useEffect(() => {
    const timer = setTimeout(() => {
      if (inputValue !== lastSearchedValue.current) {
        lastSearchedValue.current = inputValue;
        onSearch(inputValue);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [inputValue, onSearch]);

  /**
   * Submit handler triggers an immediate search when the form is submitted.
   * @param event - The form submission event.
   */
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (inputValue.trim() && inputValue !== lastSearchedValue.current) {
      lastSearchedValue.current = inputValue;
      onSearch(inputValue);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full mb-4 flex justify-center">
      <label className="input input-bordered input-primary flex items-center gap-2 max-w-2xl w-full">
        {isLoading ? (
          <span className="loading loading-spinner loading-xs text-primary ml-1" />
        ) : (
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </g>
          </svg>
        )}
        <input
          type="text"
          className="grow"
          placeholder="Rechercher une adresse..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          disabled={isLoading}
        />
      </label>
    </form>
  );
};
