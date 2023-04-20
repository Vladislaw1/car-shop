import React, { useState } from "react";
import { FilterPanel } from "../../components";
import s from "./Main.module.scss";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FILTER_CARS } from "../../store/cars/carsSlice";

function Main() {
  const dispatch = useDispatch();
  const [isOpen, setOpen] = useState(false);
  const [tooltip, setTooltip] = useState(false);
  const cars = useSelector(state => state.cars);
  return (
    <div>
      <FilterPanel>
        <input placeholder={"name"} onChange={(e) => {
          const { target: { value } } = e;
          dispatch(FILTER_CARS(value));
        }} />
        <input placeholder={"color"} />
        <input placeholder={"year"} />
        <button>Применить изминения</button>
      </FilterPanel>
      <div>
        <ul className={s.list}>{
          cars.map(el => (
            <NavLink to={`/:${el}`} key={el}>
              <li>
                <img alt={"images"} src={el.img} width={150} height={100} />
                <p>Name: {el.name}</p>
                <p>Model: {el.model}</p>
                <p>City: {el.city}</p>
                <p>Year: {el.year}</p>
                <p>Price: {el.price}</p>
              </li>
            </NavLink>
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