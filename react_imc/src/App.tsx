import { useState } from "react";
import styles from "./App.module.css";
import logo from "./assets/powered.png";
import { levels, calculateImc, Level } from "./helpers/imc";
import GridItem from "./components/GridItem/GridItem";
import leftArrow from "./assets/leftarrow.png";

const App = () => {
  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);
  const [toShow, setToShow] = useState<Level | null>(null); //armazenar o me item para exibir na tela

  const handleCalculateButton = () => {
    if (heightField && weightField) {
      // Se os campos estiverem preenchidos
      setToShow(calculateImc(heightField, weightField)); // Chama a função que calcula o IMC e armazena o resultado
    } else {
      alert("Preencha os campos corretamente");
    }
  };
  const handleBackButton = () => {
    setToShow(null); // Quando clicar no botão de voltar, o valor de toShow volta a ser nulo
    setHeightField(0); // Quando clicar no botão de voltar, o valor de heightField volta a ser 0
    setWeightField(0); // Quando clicar no botão de voltar, o valor de weightField volta a ser 0
  }
  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={logo} alt="" width={150} />
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule seu IMC.</h1>
          <p>
            IMC é a sigla para Índice de Massa Corpória, paramentro adotado pela
            Organizacao Mundial de Saúde para calcular o peso ideal de cada
            pessoa.
          </p>

          <input
            type="number"
            placeholder="Digite a sau altura. Ex: 1.75 (em metros)"
            value={heightField > 0 ? heightField : ""} // Se o valor for maior que 0, então exibe o valor, senão, exibe vazio
            onChange={(e) => setHeightField(parseFloat(e.target.value))} // Converte o valor para number
            disabled={toShow ? true : false} // Se o valor de toShow for verdadeiro, então desabilita o campo
          />

          <input
            type="number"
            placeholder="Digite o seu peso. Ex: 75.3 (em kg)"
            value={weightField > 0 ? weightField : ""} 
            onChange={(e) => setWeightField(parseFloat(e.target.value))}
            disabled={toShow ? true : false}
          />

          <button 
          onClick={handleCalculateButton} 
          disabled={toShow ? true : false}>Calcular</button>
        </div>

        <div className={styles.rightSide}>
          {!toShow && (
            <div className={styles.grid}>
              {levels.map((item, key) => (
                <GridItem key={key} item={item} />
              ))}
            </div>
          )}
          {toShow && (
            <div className={styles.rightBig}>
              <div className={styles.rightArrow} onClick={handleBackButton}>
              <img src={leftArrow} alt="" width={25} />
              </div>
              <GridItem item={toShow} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
