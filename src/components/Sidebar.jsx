import styles from "./Sidebar.module.css";
import coverImage from "../assets/cover-image.jpeg";
import { CiEdit } from "react-icons/ci";
import { Avatar } from "./Avatar";

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src={coverImage}
        alt="cover background image"
      />

      <div className={styles.profile}>
        <Avatar src="https://avatars.githubusercontent.com/u/73780620?v=4" />

        <strong>Livia B.</strong>
        <span>Software Egineer</span>

        <footer>
          <a href="#">
            <CiEdit size={20} />
            Edit my profile
          </a>
        </footer>
      </div>
    </aside>
  );
};
