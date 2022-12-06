import { Botao } from "components/Botao";
import { useNavigate } from "react-router-dom";

export function NotFound404() {
const navegar = useNavigate()

  return (
    <div 
      onClick={() => navegar(-1)}
    >
      <h1>404 - Not Found</h1>
      <Botao children="Voltar" tamanho="lg" />
    </div>
  );
}
