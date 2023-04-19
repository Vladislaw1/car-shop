import React from 'react';
import s from './FilterPanel.module.scss';

function FilterPanel({ children }) {
  return (
    <div className={s.block}>
      {children}
    </div>
  );
}

export default FilterPanel;