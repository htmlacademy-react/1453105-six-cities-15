import MainPage from '../../pages/main-page/main-page.tsx';
import {ShortHousingItem} from '../../types/types.ts';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus, HousingViewType} from '../../const/const.ts';
import LoginPage from '../../pages/login-page/login-page.tsx';
import FavoritesPage from '../../pages/favorites-page/favorites-page.tsx';
import OfferPage from '../../pages/offer-page/offer-page.tsx';
import ErrorPage from '../error-page/error-page.tsx';
import PrivateRoute from '../private-route/private-route.tsx';
import Layout from "../layout/layout.tsx";

type AppProps = {
  readonly numberItems: number;
  readonly houseArray: ShortHousingItem[];
}
function App({houseArray, numberItems }:AppProps) {
  const favoritesItemsList = houseArray.filter((item) => item.isFavorite);
  const authorization = AuthorizationStatus.Auth;

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<Layout authorizationStatus={authorization}/>} >
          <Route index
                 element={<MainPage houseArray={houseArray} numberItems={numberItems} viewType={HousingViewType.Medium}/>} />
          <Route
            path={AppRoute.Login}
            element={
            <PrivateRoute authorizationStatus={authorization} isReverse>
              <LoginPage/>
            </PrivateRoute>}/>
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={authorization}>
                <FavoritesPage houseArray={favoritesItemsList} onAnswer={()=>{} } viewType={HousingViewType.Small} />
              </PrivateRoute>}/>
          <Route
            path={AppRoute.Offer}
            element={<OfferPage/>} />
          <Route
            path='*'
            element={<ErrorPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
