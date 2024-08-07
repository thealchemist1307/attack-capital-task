
import PostCard from '@/components/blogCard/blogCard';
const tempData:any[]=[
  {
    "_id": "c0b7a4b2-9a9f-44ec-9e9e-b5ea3a6b9f8c",
    "title": "Reprehenderit ut est consectetur.",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt, ligula in suscipit malesuada, lacus dui lacinia magna, euismod dictum nulla nulla a libero.",
    "authorId": "51fc8d64-1db4-4e87-9c55-bbeefc5a6b6d"
  },
  {
    "_id": "7b04a5e4-8d5a-4b73-a7a4-8e002e12c14e",
    "title": "Exercitationem qui ut sit.",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius dui sit amet diam venenatis, sit amet consequat eros auctor.",
    "authorId": "35e634f1-dc65-44f4-8cf5-e4f3f2c8c65b"
  },
 
]

type Post = {
  _id: string;
  title: string;
  content: string;
  authorId: string;
};

const getData=async()=> {
  const res = await fetch('http://localhost:5000/api/posts', { next: { revalidate: 10 } })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default async function Home () {
  const posts:Post[]=[...await getData(),...tempData]
  
  return (
    <div className='itemContainer'>
      <ul className='ul'>
        {
        posts.length==0?
        <div className='displayText'>No Data</div>
        :
        posts.map((post:Post) => (
          <PostCard key={null} post={post}/>
        ))}
      </ul>
    </div>
  );
};
