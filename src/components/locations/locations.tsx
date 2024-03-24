import {CITIES} from '../../const/const.ts';
import * as classNames from 'classnames';
import { NavLink} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../hooks/store.ts';
import {setCity} from '../../store/action.ts';

function Locations(){
  const dispatch = useAppDispatch();
  const currentCity = useAppSelector((state) => state.city);

  return(
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {CITIES.map((city) => (
          <li className="locations__item" key={city.name}>
            <NavLink
              className={classNames('locations__item-link tabs__item', city.name === currentCity.name ? 'tabs__item--active' : '')}
              to={`/${city.slug}`}
              onClick={(e)=> {
                e.preventDefault();
                dispatch(setCity(city));
              }}
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
