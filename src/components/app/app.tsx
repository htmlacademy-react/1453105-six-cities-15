import MainPage from '../../pages/main-page/main-page.tsx';
 import {ShortHousingItem} from "../../types/types.ts";

type AppProps = {
  readonly houseArray: ShortHousingItem[]
}
function App({houseArray}:AppProps) {
  return (
      <MainPage houseArray={houseArray} />
  )
}

export default App;
