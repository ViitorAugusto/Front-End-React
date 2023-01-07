import { useState, useEffect, ChangeEvent } from "react";
import "./App.css";
import { Movie } from "./types/Movie";
import { Post } from "./types/Post";
import PostForm from "./components/Form/PostForm";

function MenuAPP() {
  //const [movies, setMovies] = useState<Movie[]>([]);
   const [loading, setLoading] = useState(false);
   const [post, setPost] = useState<Post[]>([]);

   useEffect(() => {
     handlePost();
  }, []);

  // async function handleLoadBtn() {
  //   try {
  //     setLoading(true);
  //     const response = await fetch("https://api.b7web.com.br/cinema/");
  //     const json = await response.json();
  //     setMovies(json);
  //     setLoading(false);
  //   } catch (error) {
  //     alert("Erro ao carregar os filmes");
  //     setLoading(false);
  //   }
  //   // fetch('https://api.b7web.com.br/cinema/')
  //   // fetch("https://sujeitoprogramador.com/r-api/?api=filmes")
  // }

  const handlePost = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const json = await response.json();
      setPost(json);
      setLoading(false);
    } catch (error) {
      alert("Erro ao carregar os Post");
      setLoading(false);
    }
  };

  // const handleNewAddPost  = async () => {
  //   if (title && addTextArea) {
  //       let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
  //         method: 'POST',
  //         body: JSON.stringify({
  //           title: title,
  //           body: addTextArea,
  //           userId: 1
  //         }),
  //         headers: {
  //           'Content-type': 'application/json; charset=UTF-8',
  //         }
  //       })
  //       let json = await response.json()

  //       if (json.id){
  //         alert('Post adicionado com sucesso')
  //         setTitle('')
  //         setAddTextArea('')
  //         handlePost()
  //       } else {
  //         alert('Erro ao adicionar o post')
  //       }
  //   } else {
  //     alert('Preencha os campos')
  //   }
  // }

  return (
    <div>
       < PostForm />
      {/* <>
        <h1>Filmes em Cartas</h1>
        <button onClick={handleLoadBtn}>Carregar Filmes</button>
        todos os filmes: {movies.length}
        {loading && <div>Carregando...</div>}
        {!loading && (
          <div className="movies">
            {movies.map((movie, index) => (
              <div key={index}>
                <img src={movie.avatar} width={200} />
                <h3>{movie.titulo}</h3>
              </div>
            ))}
          </div>
        )}
        {movies.length === 0 && !loading && <div>Nenhum filme encontrado</div>}
      </> */}
      {loading && <div>Carregando...</div>}
      {!loading && (
       <div className="post">
        <h1>Posts {post.length}</h1> 
        
        <div>
          {post.map((post, index) => (
            <div key={index}>
              <h1>{post.title}</h1>
              <p>{post.body}</p>
              <span>
                {" "}
                User {post.userId}- # {post.id}
              </span>
            </div>
          ))}
        </div>
      </div> 
       )}
    </div>
     
  );
}

export default MenuAPP;
