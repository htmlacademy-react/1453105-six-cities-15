import Header from '../header/header.tsx';
import {Outlet, useLocation} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const/const.ts';
import Footer from '../footer/footer.tsx';

const getLayoutPath = (pathname : AppRoute) => {
  let pathClass = '';
  let isDrawFooter = false;
  if (pathname === AppRoute.Root) {
    pathClass = 'page--gray page--main';
  } else {
    if (pathname === AppRoute.Login) {
      pathClass = 'page--gray page--login';
    } else {
      if (pathname === AppRoute.Favorites) {
        isDrawFooter = true;
      }
    }
  }
  return {pathClass, isDrawFooter};
};

type LayoutProps ={
  authorizationStatus: AuthorizationStatus;
}

function Layout({authorizationStatus}: LayoutProps){
  const authStatus = authorizationStatus;
  const {pathname} = useLocation();
  const {pathClass, isDrawFooter} = getLayoutPath(pathname as AppRoute);
  return(
    <div className={`page ${pathClass}`}>
      <Header authorizationStatus={authStatus}/>
      <Outlet/>
      {isDrawFooter && <Footer/>}
    </div>
  );
}

export default Layout;
