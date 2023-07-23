import { Link } from 'react-router-dom';
import { Fragment } from 'react';

import { Helmet } from 'react-helmet-async';

export function PageNotFound(): JSX.Element {

  return (
    <Fragment>
      <Helmet>
        <title>6 cities: 404</title>
      </Helmet>
      <h1> 404.<b>ОБЛОМ</b></h1>
      <Link to = "/"> <p><b>Welcome to the main page</b></p> </Link>
    </Fragment>
  );
}
