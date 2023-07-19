import { Main } from '../../pages/main/main';

type AppProps = {
    offersQuantity: number;
  };

export default function App ({offersQuantity}: AppProps): JSX.Element {

  return (
    <Main offersQuantity={offersQuantity}/>
  );
}
