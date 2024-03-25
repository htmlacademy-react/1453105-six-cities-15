import {createAction} from '@reduxjs/toolkit';
import { CityType} from '../types/types.ts';

export const setCity = createAction<CityType>('offers/setCity');
