import { createSlice } from "@reduxjs/toolkit";

const initialState = [{
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTreL1p7glVlBia6e1vPtSnm9cVXxJl7F81Mw&usqp=CAU",
  name: "Volkswagen",
  model: "Passat B7",
  year: "2013",
  city: "Kiev",
  price: "13000$",
  decription: "qweqwr qqcq qwrqwqw  qwdqwdqw qwdwqq"
}, {
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt1qtMlyuipaSlgvpTrltewRPYc9cesLDZhA&usqp=CAU",
  name: "BMW",
  model: "M5",
  year: "2011",
  city: "Odessa",
  price: "18000$",
  decription: "qweqwr qqcq qwrqwqw  qwdqwdqw qwdwqq"
}, {
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7If61k3FfFY2-fCzig2G4I-EDWtj8plKhsg&usqp=CAU",
  name: "Mercedes-Benz",
  model: "E220",
  year: "2022",
  city: "Kiev",
  price: "113000$",
  decription: "qweqwr qqcq qwrqwqw  qwdqwdqw qwdwqq"
}, {
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8gc93d-pWZcb-kheCBNl2GaWUFwZfG2ATYw&usqp=CAU",
  name: "Audi",
  model: "A4 RS",
  year: "2014",
  city: "Kiev",
  price: "16000$",
  decription: "qweqwr qqcq qwrqwqw  qwdqwdqw qwdwqq"
}, {
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHSOKFAJB1C9iCcpV99pSDBKCMa3rpa9VZgg&usqp=CAU",
  name: "LADA",
  model: "2104-44",
  year: "2007",
  city: "Bahmach",
  price: "1300$",
  decription: "qweqwr qqcq qwrqwqw  qwdqwdqw qwdwqq"
}];

export const carsSlice = createSlice({
  initialState,
  name: "cars",
  reducers: {
    FILTER_CARS: (state, { payload }) => {
      state.filter(el => el.name.toLowerCase() === payload.toLowerCase());
    }
  }
});


export const { FILTER_CARS } = carsSlice.actions;

export default carsSlice.reducer;