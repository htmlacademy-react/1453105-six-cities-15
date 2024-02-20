import {Link} from 'react-router-dom';

function ErrorPage(){
  return(
    <main className="page__main page__main--index">
      <h1>Page 404 not found</h1>
      <Link to='/'>Вернуться на главную</Link>
    </main>
  );
}
export default ErrorPage;
