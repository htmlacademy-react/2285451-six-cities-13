import { Main } from '../../pages/main/main';

type AppProps = {
    offersQuantity: number;
  };

function App ({offersQuantity}: AppProps): JSX.Element {

  return (
    <Main offersQuantity={offersQuantity}/>
  );
}

export default App;
