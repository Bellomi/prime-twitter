import { BiTrash } from "react-icons/bi";
import styles from "./Comment.module.css";
import { FaThumbsUp } from "react-icons/fa";
import { Avatar } from "./Avatar";

export const Comment = () => {
  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://avatars.githubusercontent.com/u/73780620?v=4"
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Livia B.</strong>
              <time title="11 de maio" dateTime="2022-05-11 08:13:00">
                Cerca de 1h atrás
              </time>
            </div>
            <button title="Deletar comentario">
              <BiTrash size={24} />
            </button>
          </header>
          <p>Well done!! ✨</p>
        </div>

        <footer>
          <button>
            <FaThumbsUp />
            Like <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
};
