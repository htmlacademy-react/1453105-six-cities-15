import Logo from '../logo/logo.tsx';
import {AppRoute, AuthorizationStatus} from '../../const/const.ts';
import {Link} from 'react-router-dom';

type HeaderProps ={
  authorizationStatus: AuthorizationStatus;
}
function Header({authorizationStatus}: HeaderProps) {
  const isAuthorize = authorizationStatus;

  return(
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo/>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  { isAuthorize === AuthorizationStatus.Auth ? (
                    <>
                      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                      <span className="header__favorite-count">3</span>
                    </>) : <span className="header__login">Sign in</span>}
                </Link>
              </li>
              { isAuthorize === AuthorizationStatus.Auth ? (
                <li className="header__nav-item">
                  <Link className="header__nav-link" to={AppRoute.Login}>
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>) : null}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
