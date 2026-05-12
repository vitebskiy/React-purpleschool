import './Search.css';

function Search({ value, onChange, placeholder, icon }) {
  return (
    <div className="input-block">
      {icon && <img className="input-icon" src={icon} alt="" />}

      <input
        className={`search-input ${icon ? 'search-input-with-icon' : ''}`}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        type="text"
      />
    </div>
  );
}


export default Search;
