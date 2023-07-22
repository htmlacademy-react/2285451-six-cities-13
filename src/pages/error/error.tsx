import { Link } from 'react-router-dom';
import { Fragment } from 'react';

export function PageNotFound(): JSX.Element {

  return (
    <Fragment>
      <h1> 404.<b>ОБЛОМ</b></h1>
      <Link to = "/"> <p><b>Welcome to the main page</b></p> </Link>
    </Fragment>
  );
}
