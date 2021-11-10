import { React } from "shared/shared-import";

interface SearchBoxProps {}

const SearchBox = (props: SearchBoxProps) => {
  return (
    <form className="d-flex">
      <input className="form-control me-2" type="text" placeholder="Search" />
      <button className="btn btn-primary" type="button">
        Search
      </button>
    </form>
  );
};

export default SearchBox;
