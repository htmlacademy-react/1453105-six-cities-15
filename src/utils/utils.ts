import {AuthorizationStatus} from '../const/const.ts';
import {houseList2, houseList} from '../mocks/offers.ts';
export function getAuthorizateStatus() {
  return AuthorizationStatus.Auth;
}

export function getOfferById(id: string) {
  const tempArray = houseList2.filter((item) => item.id === id);
  return tempArray[0];
}

export function getOfferNearBy() {
  return houseList.map((item) => item.location);
}
export function showRating(num: number) {
  return `${(Math.round(num) * 100 / 5).toString()}`;
}

export function showDate(date : string): string {
  return new Intl.DateTimeFormat('en-EN', {
    month: 'long',
    year: 'numeric'
  }).format(new Date(date));
}

export function specialDate(date: string): string {
  return new Intl.DateTimeFormat('en-EN', {
    hour: undefined,
  }).format(new Date(date));
}
