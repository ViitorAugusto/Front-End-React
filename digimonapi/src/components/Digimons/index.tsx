import { Link } from "react-router-dom";

type Props = {
  name: string;
  title: string;
};

export const CardDigimon = ({title, name }: Props) => {
  return <Link to={`/api/digimon/name/${name}`}>
    {title}
    
    </Link>;
};
