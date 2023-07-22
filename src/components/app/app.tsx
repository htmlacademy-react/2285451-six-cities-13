import {BrowserRouter, Route, Routes} from 'react-router-dom';

import { Main } from '../../pages/main/main';
import { Login } from '../../pages/login/login';
import { Favorites } from '../../pages/favorites/favorites';
import { Offer } from '../../pages/offer/offer';
import { PageNotFound } from '../../pages/error/error';

import { AppRoute, AuthorizationStatus } from '../../const';

import PrivateRoute from '../private-rout/private-rout';

type AppProps = {
    offersQuantity: number;
  };

export default function App ({offersQuantity}: AppProps): JSX.Element {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main}
          element={<Main offersQuantity={offersQuantity}/>}
        />
        <Route path={AppRoute.Login}
          element={<Login/>}
        />
        <Route path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <Favorites />
            </PrivateRoute>
          }
        />
        <Route path={`${AppRoute.Offer}/:id`}
          element={<Offer/>}
        />
        <Route path="*"
          element={<PageNotFound/> }
        />
      </Routes>
    </BrowserRouter>
  );
}
