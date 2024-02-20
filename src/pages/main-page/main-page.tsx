import HousingItem from '../../components/housing-item/housing-item.tsx';
import {ShortHousingItem} from '../../types/types.ts';
import Header from '../../components/header/header.tsx';
import Locations from '../../components/locations/locations.tsx';
import SortForm from '../../components/sort-form/sort-form.tsx';

type MainPageProps = {
  readonly numberItems?: number;
  readonly houseArray: ShortHousingItem[];
}

function MainPage({houseArray, numberItems }:MainPageProps) {
  const listItems = houseArray.slice(0, numberItems).map((item) => <HousingItem key={item.id} houseItem = {item} />);

  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <Locations/>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">312 places to stay in Amsterdam</b>
              <SortForm/>
              <div className="cities__places-list places__list tabs__content">
                { listItems }
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map"></section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
