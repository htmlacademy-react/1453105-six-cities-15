import Locations from '../../components/locations/locations.tsx';
import HousingList from '../../components/housing-list/housing-list.tsx';
import {useState} from 'react';
import HousingMap from '../../components/housing-map/housing-map.tsx';
import {getOfferNearBy} from '../../utils/utils.ts';
import MainPageEmpty from '../../components/main-page-empty/main-page-empty.tsx';
import * as classNames from 'classnames';
import {useAppSelector} from '../../hooks/store.ts';

type MainPageProps = {
  readonly viewType: string;
}

function MainPage({ viewType }:MainPageProps) {
  const houseArray = useAppSelector((state) => state.offers);
  const currentCity = useAppSelector((state) => state.city);
  const currentOffers = houseArray.filter((offer)=> offer.city.name === currentCity.name);

  const [activeOffer, setActiveOffer] = useState<string|null>(null);
  const selectedItem = currentOffers.find((item) => item.id === activeOffer)!;

  const isEmptyOffers = currentOffers.length === 0;

  const points = getOfferNearBy(currentCity.name);

  return (
    <main className={classNames('page__main page__main--index', {'page__main--index-empty': isEmptyOffers})}>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <Locations/>
      </div>
      <div className="cities">
        <div className={classNames('cities__places-container container', {'cities__places-container--empty' : isEmptyOffers})}>
          { !isEmptyOffers ?
            <HousingList currentOffers={currentOffers}
              city={currentCity.name}
              onAnswer={setActiveOffer}
              viewType={viewType}
            /> :
            <MainPageEmpty city={currentCity.name}/>}
          <div className="cities__right-section">
            { !isEmptyOffers && <HousingMap city={currentCity.location} points={points} selectedItem={selectedItem}/>}
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainPage;
