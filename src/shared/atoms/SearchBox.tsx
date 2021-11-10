import { useLogin } from "shared/hooks";

interface SearchBoxProps {
  onSearch: (searchTerm: string) => void;
}

const SearchBox = ({ onSearch }: SearchBoxProps) => {
  const { isLogin } = useLogin((state: any) => state);
  return (
    <form className="d-flex" style={styles.searchFoxWrapper}>
      <input
        disabled={!isLogin}
        className="form-control me-2"
        type="text"
        placeholder="Search"
        onChange={(event) => onSearch(event.target.value)}
      />
      <button
        disabled={!isLogin}
        className="btn btn-primary"
        type="button"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBox;

const styles = {
  searchFoxWrapper: {
    flex: 1,
  },
};
