import {createReducer} from '@reduxjs/toolkit';

import {CITIES} from "../const/const.ts";
import {offerList} from "../mocks/offers.ts";
import {CityType, ShortHousingItem} from "../types/types.ts";
import {setCity} from "./action.ts";


interface offerState {
  city: CityType;
  offers: ShortHousingItem[];
}

const initialState: offerState = {
  city: CITIES[0],
  offers: offerList
}

const reducer = createReducer(initialState, (builder)=> {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload})
})

export {reducer, setCity}
