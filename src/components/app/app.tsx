import MainPage from '../../pages/main-page/main-page.tsx';
import {ShortHousingItem} from "../../types/types.ts";

type AppProps = {
  readonly numberItems: number,
  readonly houseArray: ShortHousingItem[]
}
function App({houseArray, numberItems }:AppProps) {

  return (
      <MainPage houseArray={houseArray} numberItems={numberItems} />
  )
}

export default App;
