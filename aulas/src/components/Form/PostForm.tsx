import { ChangeEvent, useState } from "react";
import "./PostForm.css";
const PostForm = () => {
  const [title, setTitle] = useState("");
  const [addTextArea, setAddTextArea] = useState("");
  const handleAddPost = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleAddBody = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setAddTextArea(e.target.value);
  };

  const handleNewAddPost = async () => {};
  return (
    <div>
      <div className="fieldset">
        <fieldset>
          <legend>Adicionar novo Post</legend>
          <input type="text" placeholder="Titulo" onChange={handleAddPost} />
          <textarea placeholder="Conteudo" onChange={handleAddBody}></textarea>

          <button onClick={handleNewAddPost}>Adicionar</button>
        </fieldset>
      </div>
    </div>
  );
};

export default PostForm;
