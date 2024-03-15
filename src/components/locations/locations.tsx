import {CITIES} from '../../const/const.ts';
import * as classNames from 'classnames';
import { NavLink} from 'react-router-dom';

function Locations(){

  return(
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {CITIES.map((city) => (
          <li className="locations__item" key={city.name}>
            <NavLink
              className={({isActive}) => classNames('locations__item-link tabs__item', {'tabs__item--active': isActive})}
              to={`/${city.slug}`}
            >
              <span>{city.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </section>
  );
}
export default Locations;
