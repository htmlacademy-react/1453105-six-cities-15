import {FullReviewType} from '../types/types.ts';

export const ReviewList: FullReviewType[] = [{
  id: '1',
  comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore' +
    ' magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  date: '2020-05-08T14:13:56.569Z',
  rating: 3.4,
  user : {
    name: 'Oliver Conner',
    avatarUrl: 'img/avatar-angelina.jpg',
    isPro: false
  }
},
{
  id: '2',
  comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ' +
    'magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ' +
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' +
    ' Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  date: '2019-09-08T14:13:56.569Z',
  rating: 4.6,
  user : {
    name: 'Barbra Streisand',
    avatarUrl: 'img/avatar-max.jpg',
    isPro: true
  }
},
{
  id: '3',
  comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
  date: '2023-05-01T14:13:56.569Z',
  rating: 4.6,
  user : {
    name: 'Russell Watson',
    avatarUrl: 'img/avatar-max.jpg',
    isPro: false
  }
}];
