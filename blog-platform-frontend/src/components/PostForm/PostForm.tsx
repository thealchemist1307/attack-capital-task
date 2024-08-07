'use client'

import { useRouter } from "next/navigation";
import { useFormState } from "react-dom";
import styles from "./PostForm.module.css"
interface PostFormProps{
    goBack:any,
    addPost:any
}

const PostForm: React.FC<PostFormProps> = ({addPost}) => {
  const router = useRouter()
  const [state, formAction] = useFormState<any>(addPost, undefined);

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
      <div className="p-8 border w-96 shadow-lg rounded-md bg-white">
      <form className={styles.form} action={formAction}>
      <input type="text" placeholder="Title" name="title" />
      <textarea placeholder="Content" className={styles.contentTB} name="content" />
      <button>Post</button>
      {state?.error && <div className={styles.error}>{state.error}</div>}

    </form>

      </div>
    </div>
  );
}

export default PostForm