import { Banner } from "../../components/Banner";
import styles from "./Home.module.css";
import posts from '../../json/posts.json';
import { Post } from "../../components/Post";
export function Home() {
  

  return (
   <main>
      <Banner />
      <ul className={styles.posts}>
        {posts.map((post) => (
          <li key={post.id}>
            <Post />
          </li>
        ))}

      </ul>
    </main>
  );
}