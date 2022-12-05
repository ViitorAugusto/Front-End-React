import fotoSobreMim from "assets/sobre_mim_foto.jpeg";
import fotoCapa from "assets/sobre_mim_capa.png";
import { PostModelo } from "components/PostModelo";
import styles from "./SobreMim.module.css";

export function SobreMim() {
  return (
    <div>
 
    <PostModelo
    titulo='Sobre Mim'
    fotoCapa={fotoCapa}
    
    >
    <h3 className={styles.subtitulo}>Olá eu sou o Vitor!</h3>  
    <img src={fotoSobreMim} alt="Foto Minha " className={styles.fotoSobreMim} />  
    <p className={styles.paragrafo}>Sou estudante de Ciência da Computação na Universidade Federal de São Carlos (UFSCar) e apaixonado por tecnologia.
    </p>
    <p className={styles.paragrafo}>Atualmente estou cursando o 4º período e estou em busca de uma oportunidade de estágio na área de desenvolvimento de software.
    </p>
    <p className={styles.paragrafo}>Tenho conhecimento em HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, MySQL, Git, GitHub, Linux, Docker, entre outros.
    </p>
    <p className={styles.paragrafo}>Além disso, tenho experiência com desenvolvimento de projetos pessoais e acadêmicos
    </p>
    <p className={styles.paragrafo}>
    Minha história com programação começou no Instituto Federal do Piauí (IFPI), quando fiz o ensino médio integrado ao curso de Informática. Eu aprendi lógica de programação e o básico de várias linguagens, como PHP, Python, Java, mas sem aprofundar muito em cada uma delas. Eu gostava muito de estudar programação, mas na época não fazia ideia de que trabalharia com isso hoje
    </p>
    <p className={styles.paragrafo}>
    Com isso tive minha experiência de dev mais próxima da realidade, com prazos de implementação para o site, e aprendi muito enquanto codificava. E foi enquanto eu estava no PET que decidi procurar um estágio em desenvolvimento web. Eu encontrei uma vaga na Alura para o Scuba Team e percebi que ela aliava duas paixões minhas: programação e educação. Para minha felicidade, fui escolhido para fazer parte do time. Desde então, tem sido aprenas aprendizados atrás de aprendizados. A Alura é uma escola não só para seus alunos e alunas, mas também para os colaboradores e colaboradoras. Hoje sou muito feliz de ter a oportunidade de trazer esses conteúdos ricos e encantadores para você. Espero que aprenda bastante! 
    </p>
    </PostModelo>
    </div>
  );
}