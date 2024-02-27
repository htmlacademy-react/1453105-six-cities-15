import {Navigate} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const/const.ts';

type PrivateRoutProps= {
  authorizationStatus: AuthorizationStatus;
  isReverse?:boolean;
  children: JSX.Element;
}
function PrivateRoute(props: PrivateRoutProps) {
  const {authorizationStatus, isReverse, children} = props;
  return(
    authorizationStatus === (isReverse ? AuthorizationStatus.NoAuth : AuthorizationStatus.Auth)
      ? children
      : <Navigate to={isReverse ? AppRoute.Root : AppRoute.Login} />
  );
}
export default PrivateRoute;
