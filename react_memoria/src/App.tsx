import { useEffect, useState } from "react";
import * as C from "./App.styles";
import logoImage from "./assets/devmemory_logo.png";
import { Button } from "./components/Button";
import { InfoItem } from "./components/InfoItem";
import RestartIcon from "./svgs/restart.svg";
import { GridItemType } from "./types/GridItemType";
import { items } from "./data/items";
import { GridItem } from "./components/GridItem";
import { formatTimeElapsed } from "./helpers/formatTimeElapsed";

function App() {
  const [playing, setPlaying] = useState<boolean>(false);
  const [timeElapsed, setTimeElapsed] = useState<number>(0);
  const [movecount, setMoveCount] = useState<number>(0);
  const [showcount, setShownCount] = useState<number>(0);
  const [gridItems, setGridItems] = useState<GridItemType[]>([]);

  useEffect(() => {
    if (playing) {
      let timer = setInterval(() => {
        setTimeElapsed(timeElapsed + 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [playing, timeElapsed]);

  useEffect(() => {
    resetAndCreateGrid();
  }, []);

  const resetAndCreateGrid = () => {
    // Resetar o jogo
    setTimeElapsed(0);
    setMoveCount(0);
    setShownCount(0);

    // Criar o grid
    let tmpGrid: GridItemType[] = [];
    for (let i = 0; i < items.length * 2; i++) { //criar o grid com 12 itens
      tmpGrid.push({
        item: null,
        show: false,
        permanentShown: false,
      });
    }
    //Jogar os itens no grid
    for (let w = 0; w < 2; w++) { //preencher os 6 primeiros itens e depois os 6 ultimos
      for (let i = 0; i < items.length; i++) {//preencher os 6 primeiros itens
        let pos = -1;
        while (pos < 0 || tmpGrid[pos].item !== null) { //enquanto a posição for menor que 0 ou o item for diferente de nulo
          pos = Math.floor(Math.random() * (items.length * 2)); //gerar uma posição aleatória
        }
        tmpGrid[pos].item = i; //preencher a posição com o item
      }
    }
    setGridItems(tmpGrid);

    setPlaying(true);
  };

  const handleClickItem = (index: number) => {
    if (playing && index !== null && showcount < 2) {// se o jogo estiver rodando e o item clicado for diferente de nulo e o contador de itens mostrados for menor que 2
      let tmpGrid = [...gridItems]; //clonar o grid

      if (
        tmpGrid[index].permanentShown === false &&
        tmpGrid[index].show === false
      ) {
        tmpGrid[index].show = true; //mostrar o item clicado
        setShownCount(showcount + 1); //atualizar o contador de itens mostrados
      }
      setGridItems(tmpGrid); //atualizar o grid
    }
  };
  return (
    <div>
      <C.Container>
        <C.Info>
          <C.LogoLink>
            <img src={logoImage} width={200} alt="" />
          </C.LogoLink>
          <C.InfoArea>
            <InfoItem label="Tempo" value={formatTimeElapsed(timeElapsed)} />
            <InfoItem label="Movimentos" value="0" />
          </C.InfoArea>
          <Button
            label="Reiniciar"
            icon={RestartIcon}
            onClick={resetAndCreateGrid}
          />
        </C.Info>

        <C.GridArea>
          <C.Grid>
            {gridItems.map((item, index) => (
              <GridItem
                key={index}
                item={item}
                onClick={() => {
                  handleClickItem(index);
                }}
              />
            ))}
          </C.Grid>
        </C.GridArea>
      </C.Container>
    </div>
  );
}

export default App;
