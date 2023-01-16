import{ useState, useEffect } from 'react';
import { api } from '../../api';
import { CardDigimon } from '../../components/Digimons';
import { Digimon } from '../../types/Digimon';
export const Home = () => {
    const [loading, setLoading] = useState(false);
    const [digimon, setDigimon] = useState<Digimon[]>([]);
  
    useEffect(() => {
      loadDigimon();
    }, []);
  
    const loadDigimon = async () => {
      setLoading(true);
      const digimon = await api.getDigimons();
      setDigimon(digimon);
      setLoading(false);
    }

  return (
    <div>
      {loading && <p>Loading...</p>}
        <p>{digimon.length}</p>
      {digimon.map((digimon) => (
        <li key={digimon.name}>
          
          <CardDigimon title={digimon.name} name={digimon.name}
          
          />
        </li>
      ))}
    </div>
  )
}
