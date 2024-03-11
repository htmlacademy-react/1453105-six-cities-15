import Logo from '../logo/logo.tsx';
import {AppRoute, AuthorizationStatus} from '../../const/const.ts';
import {Link} from 'react-router-dom';
import AuthNavigate from '../auth-navigate/auth-navigate.tsx';

type HeaderProps ={
  authorizationStatus: AuthorizationStatus;
}
function Header({authorizationStatus}: HeaderProps) {
  const isAuthorize = authorizationStatus === AuthorizationStatus.Auth;

  return(
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo/>
          </div>
          <nav className="header__nav">
            { isAuthorize ? (
              <AuthNavigate/>
            ) : (
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link" to={AppRoute.Login}>
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__login">Sign in</span>
                  </Link>
                </li>
              </ul>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
