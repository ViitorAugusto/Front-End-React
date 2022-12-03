import styles from "./Post.module.css";

export function Post({ post }) {
  return (
    <article className={styles.post}>
        <img 
        className={styles.capa}
        src={`../../../src/assets/posts/${post.id}/capa.png`} 
        
        alt="" />
    </article>
  );
}
