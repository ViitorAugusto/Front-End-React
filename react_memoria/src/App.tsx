import { useEffect, useState } from "react";
import * as C from "./App.styles";
import logoImage from "./assets/devmemory_logo.png";
import { Button} from "./components/Button";
import { InfoItem } from "./components/InfoItem";
import RestartIcon from "./svgs/restart.svg";
import { GridItemType } from "./types/GridItemType";
import { items } from "./data/items";

function App() {

  const [playing, setPlaying] = useState<boolean>(false);
  const [timeElapsed, setTimeElapsed] = useState<number>(0);
  const [movecount, setMoveCount] = useState<number>(0);
  const [showcount, setShowCount] = useState<number>(0);  
  const [griditems, setGridItems] = useState<GridItemType[]>([]);


  useEffect(() => {
    resetAndCreateGrid();
  }, []);

  const resetAndCreateGrid = () => {
    // Resetar o jogo
    setTimeElapsed(0);
    setMoveCount(0);
    setShowCount(0);

    // Criar o grid
    let newGridItems: GridItemType[] = [];
    for( let i = 0; i < (items.length * 2); i++) {
      newGridItems.push({

      });
    }
    setGridItems(newGridItems);

    setPlaying(true);
  }
  return (
    <div>
      <C.Container>
        <C.Info>
          <C.LogoLink>
            <img src={logoImage} width={200} alt="" />
          </C.LogoLink>
          <C.InfoArea>
            <InfoItem label="Tempo" value="00:00" />
            <InfoItem label="Movimentos" value="0" />
          </C.InfoArea>
          <Button
          label="Reiniciar" 
          icon={RestartIcon} 
          onClick={resetAndCreateGrid} />
        </C.Info>

        <C.GridArea>
          <C.Grid>

          </C.Grid>
        </C.GridArea>
      </C.Container>
    </div>
  );
}

export default App;
