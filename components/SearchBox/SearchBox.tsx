import { DebouncedState } from 'use-debounce';
import css from './SearchBox.module.css';

interface SearchBoxProps {
  value: string;
  onSearch: DebouncedState<(value: string) => void>;
}

const SearchBox = ({ value, onSearch }: SearchBoxProps) => {
  return (
    <div className={css.searchBox}>
      <input
        type="text"
        placeholder="Search notes..."
        defaultValue={value}
        onChange={(e) => onSearch(e.target.value)}
        className={css.input}
      />
    </div>
  );
};

export default SearchBox;

