import {Navigate} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const/const.ts';

type PrivateRoutProps= {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}
function PrivateRoute(props: PrivateRoutProps) {
  const {authorizationStatus, children} = props;
  return(
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}
export default PrivateRoute;
