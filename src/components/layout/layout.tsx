import Header from '../header/header.tsx';
import {Outlet, useLocation} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const/const.ts';
import Footer from '../footer/footer.tsx';
import {useEffect, useState} from 'react';

type LayoutProps ={
  authorizationStatus: AuthorizationStatus;
}

function Layout({authorizationStatus}: LayoutProps){
  const authStatus = authorizationStatus;
  const [pathClass, setPathClass] = useState('');
  let isDrawFooter: boolean = false;
  const location = useLocation();


  useEffect(() => {
    setPathClass('page--gray page--main');
    if (location.pathname.includes('offer')){
      setPathClass('');
    }
    if (location.pathname.includes(AppRoute.Login)){
      setPathClass('page--gray page--login');
    }
    if (location.pathname.includes(AppRoute.Favorites)){
      isDrawFooter = true;
      setPathClass('');
    }
  }, [location.pathname]);


  return(
    <div className={`page ${pathClass}`}>
      <Header authorizationStatus={authStatus}/>
      <Outlet/>
      {isDrawFooter && <Footer/>}
    </div>
  );
}

export default Layout;
