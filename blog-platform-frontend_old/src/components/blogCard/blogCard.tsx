import Image from "next/image";
import styles from "./blogCard.module.css";
import Link from "next/link";

interface Post {
  _id: string;
  title: string;
  content: string;
}

interface BlogCardProps {
  post: Post;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <div className={styles.container}>
      <div className={styles.mainContainer}>
      <div className={styles.top}>
      <div className={styles.imgContainer}>
            <Image src={"https://www.svgrepo.com/show/309688/image-alt-text.svg"} alt="" fill className={styles.alt} />
          </div>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>{post.content}</p>
        <Link className={styles.link} href={`/blog/${post._id}`}>
          READ MORE
        </Link>
      </div>
      </div>
    </div>
  );
};

export default BlogCard;
