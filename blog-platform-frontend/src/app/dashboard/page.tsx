'use client'
import PostCard from '@/components/blogCard/blogCard';
import { apiPoint } from '@/lib/apiPoint';
import { useEffect, useState } from 'react';
import PostForm from "@/components/PostForm/PostForm" 
import styles from "./dashboard.module.css"
import { useRouter } from 'next/navigation';
import axios from 'axios';
type Post = {
  _id: string;
  title: string;
  content: string;
  authorId: string;
};

const Dashboard = () => {
  const [posts,setPosts]=useState<Post[]>([])
  const [showModal,setModal]=useState<Boolean>(false)
  const goBack=()=>{
    setModal(false)
  }
  const router=useRouter()
  useEffect(()=>{
    const authorId: String | null = localStorage.getItem("authorId");
  const res =  fetch(apiPoint.base+'/api/posts?author='+authorId,)
              .then(async (res) => { const posts: Post[] =await  res.json()
                setPosts(posts)
              })
  
  
  },[])
  const addPost = async (prevState: any, formData: FormData) => {
    const { title, content } = Object.fromEntries(formData);
    const token=await localStorage.getItem('token')
    const authorId=await localStorage.getItem('authorId')
     return  await axios
      .post(apiPoint.base + "/api/post", { title:title,content:content,authorId:authorId },{headers:{Authorization:token}})
      .then(async (res) => {
        console.log(JSON.stringify(res.data));
        setModal(false)
        setTimeout(()=>router.refresh(),1000)

      })
      .catch((err) => {
        console.log(err.response?.status);
        return { error: "Title and Content are both required."};
      });
  };
  return (
    <div>
      <div className={styles.addBlogButtonContainer}>
      <button
              onClick={()=>{setModal(true)}}
              className="px-10 py-5 bg-black text-white text-3xl rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              Add Blog
            </button>
        </div>
        <div className='itemContainer'>
      <ul className='ul'>
        {
        posts.length==0?
        <div className='displayText'>No Data</div>
        :
        posts.map((post:any,index:Number) => (
          <PostCard key={index} post={post}/>
        ))}
      </ul>
      </div>
      {showModal && <PostForm addPost={addPost} goBack={goBack} />}
    </div>
  );
};

export default Dashboard;