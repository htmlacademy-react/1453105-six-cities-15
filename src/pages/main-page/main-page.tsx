import {ShortHousingItem} from '../../types/types.ts';
import Locations from '../../components/locations/locations.tsx';
import HousingList from "../../components/housing-list/housing-list.tsx";
import {useState} from "react";

type MainPageProps = {
  readonly numberItems: number;
  readonly houseArray: ShortHousingItem[];
  readonly viewType: string;
}

function MainPage({houseArray, numberItems, viewType }:MainPageProps) {
  const [activeOffer, setActiveOffer]= useState<string|null>(null);
  const takeActiveOffer = (value:string) => {
    setActiveOffer(value);
  }
  console.log('activeOffer',activeOffer);
  return (
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <Locations/>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <HousingList houseArray={houseArray} numberItems={numberItems} onAnswer={takeActiveOffer} viewType={viewType}/>
            <div className="cities__right-section">
              <section className="cities__map map"></section>
            </div>
          </div>
        </div>
      </main>
  );
}

export default MainPage;
