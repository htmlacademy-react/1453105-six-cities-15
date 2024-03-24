import ReviewForm from '../../components/review-form/review-form.tsx';
import NearOfferList from '../../components/near-offer-list/near-offer-list.tsx';
import Gallery from '../../components/gallery/gallery.tsx';
import OfferInside from '../../components/offer-inside/offer-inside.tsx';
import Host from '../../components/host/host.tsx';
import ReviewList from '../../components/review-list/review-list.tsx';
import HousingMap from '../../components/housing-map/housing-map.tsx';
import {getOfferById,getOfferNearBy, showRating, } from '../../utils/utils.ts';
import * as classNames from 'classnames';
import {useParams} from 'react-router-dom';
import {useAppSelector} from "../../hooks/store.ts";

function OfferPage() {
  const { id } = useParams();
  const offer = getOfferById(id!);
  const currentCity = useAppSelector((state) => state.city );
  const nearByOffer = getOfferNearBy(currentCity.name);

  return (
    <main className="page__main page__main--offer">
      <section className="offer">
        <div className="offer__gallery-container container">
          <Gallery/>
        </div>
        <div className="offer__container container">
          <div className="offer__wrapper">
            { offer.isPremium &&
              <div className="offer__mark">
                <span>Premium</span>
              </div>}
            <div className="offer__name-wrapper">
              <h1 className="offer__name">
                {offer.title}
              </h1>
              <button className={ classNames('place-card__bookmark-button button', {'place-card__bookmark-button--active': offer.isFavorite })} type="button">
                <svg className="offer__bookmark-icon" width="31" height="33">
                  <use xlinkHref="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <div className="offer__rating rating">
              <div className="offer__stars rating__stars">
                <span style={{width: `${showRating(offer.rating) }%` }}></span>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="offer__rating-value rating__value">{offer.rating}</span>
            </div>
            <ul className="offer__features">
              <li className="offer__feature offer__feature--entire">
                {offer.type}
              </li>
              <li className="offer__feature offer__feature--bedrooms">
                {offer.bedrooms}
              </li>
              <li className="offer__feature offer__feature--adults">
                {offer.maxAdults}
              </li>
            </ul>
            <div className="offer__price">
              <b className="offer__price-value">&euro;{offer.price}</b>
              <span className="offer__price-text">&nbsp;night</span>
            </div>
            <div className="offer__inside">
              <OfferInside/>
            </div>
            <div className="offer__host">
              <h2 className="offer__host-title">Meet the host</h2>
              <Host/>
              <div className="offer__description">
                <p className="offer__text">
                  {offer.description}
                </p>
              </div>
            </div>
            <section className="offer__reviews reviews">
              <ReviewList/>
              <ReviewForm/>
            </section>
          </div>
        </div>
        <HousingMap city={offer.city.location} points={[...nearByOffer, offer.location] } selectedItem={ offer}/>
      </section >
      <div className="container">
        <NearOfferList selectedItem={offer}/>
      </div>
    </main>
  );
}

export default OfferPage;
