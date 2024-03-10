import {ShortHousingItem} from '../../types/types.ts';
import Locations from '../../components/locations/locations.tsx';
import HousingList from '../../components/housing-list/housing-list.tsx';
import {useEffect, useState} from 'react';
import HousingMap from '../../components/housing-map/housing-map.tsx';

type MainPageProps = {
  readonly numberItems: number;
  readonly houseArray: ShortHousingItem[];
  readonly viewType: string;
}

function MainPage({houseArray, numberItems, viewType }:MainPageProps) {
  const [activeOffer, setActiveOffer] = useState<string|null>(null);
  const [selectedItem, setSelectedItem] = useState<ShortHousingItem| null>(null);
  useEffect(()=> {
    const s = houseArray.filter((item) => item.id === activeOffer);
    setSelectedItem(s[0]);
  }, [activeOffer, houseArray]);
  const city = houseArray[0].city;
  const points = houseArray.map((item) => item.location);

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <Locations/>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <HousingList houseArray={houseArray} numberItems={numberItems} onAnswer={setActiveOffer} viewType={viewType}/>
          <div className="cities__right-section">
            <section className="cities__map">
              <HousingMap city={city.location} points={points} selectedItem={selectedItem}/>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainPage;
