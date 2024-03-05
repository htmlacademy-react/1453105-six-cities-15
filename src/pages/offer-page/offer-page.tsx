import ReviewForm from '../../components/review-form/review-form.tsx';
import NearOfferList from "../../components/near-offer-list/near-offer-list.tsx";
import Gallery from "../../components/gallery/gallery.tsx";
import OfferInside from "../../components/offer-inside/offer-inside.tsx";
import Host from "../../components/host/host.tsx";
import ReviewList from "../../components/review-list/review-list.tsx";

function OfferPage() {
  return (
    <main className="page__main page__main--offer">
      <section className="offer">
        <div className="offer__gallery-container container">
          <Gallery/>
        </div>
        <div className="offer__container container">
          <div className="offer__wrapper">
            <div className="offer__mark">
              <span>Premium</span>
            </div>
            <div className="offer__name-wrapper">
              <h1 className="offer__name">
                  Beautiful &amp; luxurious studio at great location
              </h1>
              <button className="offer__bookmark-button button" type="button">
                <svg className="offer__bookmark-icon" width="31" height="33">
                  <use xlinkHref="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <div className="offer__rating rating">
              <div className="offer__stars rating__stars">
                <span style={{width: '80%'}}></span>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="offer__rating-value rating__value">4.8</span>
            </div>
            <ul className="offer__features">
              <li className="offer__feature offer__feature--entire">
                  Apartment
              </li>
              <li className="offer__feature offer__feature--bedrooms">
                  3 Bedrooms
              </li>
              <li className="offer__feature offer__feature--adults">
                  Max 4 adults
              </li>
            </ul>
            <div className="offer__price">
              <b className="offer__price-value">&euro;120</b>
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
                    A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                </p>
                <p className="offer__text">
                    An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
                </p>
              </div>
            </div>
            <section className="offer__reviews reviews">
              <ReviewList/>
              <ReviewForm/>
            </section>
          </div>
        </div>
        <section className="offer__map map"></section>
      </section >
      <div className="container">
        <NearOfferList id={'1'}/>
      </div>
    </main>
  );
}

export default OfferPage;
