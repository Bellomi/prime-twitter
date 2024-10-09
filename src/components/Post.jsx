import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export const Post = () => {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://avatars.githubusercontent.com/u/73780620?v=4" />

          <div className={styles.authorInfo}>
            <strong>Livia B.</strong>
            <span>Software Engineer</span>
          </div>
        </div>

        <time title="11 de maio" dateTime="2022-05-11 08:13:00">
          Publicado há 1 hora
        </time>
      </header>

      <div className={styles.content}>
        <p>
          {" "}
          🌼 Life is beautiful! Embrace the little moments, cherish the
          memories, and let love and kindness guide your path. ✨
        </p>
        <p>
          <a href="">#Gratitude</a> <a href="">#LifeIsBeautiful</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <textarea placeholder="Leave a comment" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
};
