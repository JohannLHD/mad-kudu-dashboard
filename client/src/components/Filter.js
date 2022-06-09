const Filter = ({ filter }) => {
  return (
    <div style={{ width: '250px' }}>
      <select
        className="form-select"
        aria-label="Default select example"
        onChange={filter}
      >
        <option select="true">Select a Continent</option>
        <option value="Africa">Africa</option>
        <option value="Asia">Asia</option>
      </select>
    </div>
  );
};

export default Filter;
