import { useParams } from "react-router-dom";
import posts from "json/posts.json";
import { PostModelo } from "components/PostModelo";
import ReactMarkdown from "react-markdown";
import './Post.css';
import { NotFound404 } from "pages/NotFound404";
export function Post() {
  const parametros = useParams();
  const post = posts.find((post) => {
    return post.id === Number(parametros.id);
  });
  if (!post) {
    return <NotFound404 />;
  }

  return (
    <PostModelo
    fotoCapa={`/assets/posts/${post.id}/capa.png`}
    titulo={post.titulo}
    >
        <div className="post-markdown-container">
        <ReactMarkdown>{post.texto}</ReactMarkdown>
        </div>
    </PostModelo>
  );
}
