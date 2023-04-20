import React, { useState } from "react";
import { FilterPanel } from "../../components";
import s from "./Main.module.scss";

function Main(props) {
  const [isOpen, setOpen] = useState(false);
  const [tooltip, setTooltip] = useState(false);
  return (
    <div>
      <FilterPanel>
        <input placeholder={"name"} />
        <input placeholder={"color"} />
        <input placeholder={"year"} />
        <button>Применить изминения</button>
      </FilterPanel>
      <div>
        <ul className={s.list}>{
          [1, 2, 3, 4, 5, 4, 12, 3, 12, 3412, 412, 3, 12, 3, 13, 12, 3, 123, 123, 12].map(el => (
            <li>
              <p>`ID: ${el}`</p>
              <img src={"https://etimg.etb2bimg.com/photo/65715468.cms"} width={100} height={100} />
              <p>Name car</p>
              <p>Model car</p>
              <p>Color car</p>
              <p>Year car</p>
              <p>Price car</p>
            </li>
          ))
        }</ul>
        <button className={s.btn} onClick={() => setOpen(!isOpen)} onMouseLeave={() => setTooltip(false)}
                onMouseMove={() => setTooltip(true)}>+
        </button>
      </div>
      {isOpen &&
        <div className={s.formAddCar}>
          <button onClick={() => setOpen(false)}>X</button>
          <p>Add new auto</p>
          <input placeholder={"name"} />
          <input placeholder={"model"} />
          <input placeholder={"year"} />
        </div>
      }
      {tooltip && !isOpen && <div className={s.tooltipe}>Бистрое создание автомобиля</div>}
    </div>
  );
}

export default Main;