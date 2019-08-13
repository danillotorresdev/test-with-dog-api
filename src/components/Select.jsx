import React from 'react';

const Select = (
  {
    value,
    handleSelect,
    defaultSelectIsAble,
    defaultSelectName,
    children,
  }
) =>
  (
    <select
      value={value}
      onChange={handleSelect}
      className="selectField custom-select">
      <option disabled={defaultSelectIsAble}>{defaultSelectName}</option>
      {children}
    </select>
  );

export default Select;
