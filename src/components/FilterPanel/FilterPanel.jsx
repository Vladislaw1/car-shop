import React from "react";
import s from "./FilterPanel.module.scss";

// eslint-disable-next-line react/prop-types
function FilterPanel({ children = null }) {
  return (
    <div className={s.block}>
      {children}
    </div>
  );
}

export default FilterPanel;