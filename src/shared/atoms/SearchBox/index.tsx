import { React } from "shared/shared-import";
import { useDebounce, useLogin, useSearchTerms } from "shared/hooks";
import "./searchbox.style.scss";
interface SearchBoxProps {
  onSearch: (searchTerm: string) => void;
}

const SearchBox = ({ onSearch }: SearchBoxProps) => {
  const { isLogin } = useLogin((state: any) => state);
  const [showDropdown, setShowDropdown] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState<string>("");
  const { searchTerms, setSearchTerms } = useSearchTerms((state: any) => state);
  const debouncedSearchTerm: string = useDebounce(searchTerm, 500);

  React.useEffect(
    () => {
      if (debouncedSearchTerm) {
        onSearch(debouncedSearchTerm);
        searchTerms.push(debouncedSearchTerm);
        setSearchTerms(searchTerms);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [debouncedSearchTerm] // Only call effect if debounced search term changes
  );

  return (
    <div className="d-flex" style={styles.searchFoxWrapper}>
      <input
        disabled={!isLogin}
        className="form-control me-2"
        type="text"
        placeholder="Search"
        onFocus={() => setShowDropdown(true)}
        onBlur={() => setShowDropdown(false)}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      {searchTerms.length > 0 && (
        <ul
          className="dropdown-menu"
          style={{ display: showDropdown ? "block" : "none" }}
          aria-labelledby="dropdownMenuButton1"
        >
          {searchTerms.map((elem: string, index: number) => (
            <li key={`search_option_${index}`} onClick={() => setSearchTerm(elem)}>
              <a className="dropdown-item" href="#">{elem}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBox;

const styles = {
  searchFoxWrapper: {
    flex: 1,
  },
};
