import { GridItemType } from '../../types/GridItemType';
import * as C from './styles';
import b7 from '../../svgs/b7.svg';
import { items } from '../../data/items';

type Props = {
    item: GridItemType,
    onClick: () => void,
}

export const GridItem = ({ item, onClick }:Props) => {
  return (
    <C.container 
    onClick={onClick}
    showBackground={item.permanentShown || item.show}
    >
      {!item.permanentShown && !item.show && (
        <C.icon src={b7} alt="" opacity={.1} />
      )}
      {(item.permanentShown || item.show) && item.item !== null && (
        <C.icon src={items[item.item].icon} alt="" />
      )}
    </C.container>
  )
}

