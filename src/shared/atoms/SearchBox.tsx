import { React } from "shared/shared-import";
import { useDebounce, useLogin } from "shared/hooks";

interface SearchBoxProps {
  onSearch: (searchTerm: string) => void;
}

const SearchBox = ({ onSearch }: SearchBoxProps) => {
  const { isLogin } = useLogin((state: any) => state);
  const [searchTerm, setSearchTerm] = React.useState<string>("");
  const debouncedSearchTerm: string = useDebounce(searchTerm, 500);

  React.useEffect(
    () => {
      if (debouncedSearchTerm) {
        onSearch(debouncedSearchTerm);
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
        onChange={(event) => setSearchTerm(event.target.value)}
      />
    </div>
  );
};

export default SearchBox;

const styles = {
  searchFoxWrapper: {
    flex: 1,
  },
};
