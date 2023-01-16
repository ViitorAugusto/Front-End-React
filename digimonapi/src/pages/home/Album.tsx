
import { useState, useEffect } from "react";
import {  useNavigate, useParams } from "react-router-dom";

import { api } from "../../api";
import { Digimon as DigimonImg } from "../../types/Digimon";
export const Album = () => {
    const navigate = useNavigate();
    const { name } = useParams();

  const [loading, setLoading] = useState(false);
  const [digimon, setDigimon] = useState<DigimonImg[]>([]);

  useEffect(() => {
    
    loadDigimon();
    
  }, []);

  const loadDigimon = async () => {
    // setLoading(true);
    // const digimon = await api.getDigimonsFromName(name);
    // setDigimon(digimon);
    // setLoading(false);
  };

    const handleBackButton = () => {
        navigate(-1)
    };
  return (
    <div>
        <button onClick={handleBackButton}>Voltar</button>
      {loading && <p>Loading...</p>}
      {digimon.map((digimon) => (
        <p key={digimon.name}>
          <h4>{digimon.name}</h4>
          <img src={digimon.img} alt={digimon.name} />
        </p>
      ))}
    </div>
  );
};
