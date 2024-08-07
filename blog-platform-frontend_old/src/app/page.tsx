
import PostCard from '@/components/blogCard/blogCard';
const tempData:any[]=[]
// const tempData:any[]=[
//   {
//     "_id": "c0b7a4b2-9a9f-44ec-9e9e-b5ea3a6b9f8c",
//     "title": "Reprehenderit ut est consectetur.",
//     "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt, ligula in suscipit malesuada, lacus dui lacinia magna, euismod dictum nulla nulla a libero.",
//     "authorId": "51fc8d64-1db4-4e87-9c55-bbeefc5a6b6d"
//   },
//   {
//     "_id": "7b04a5e4-8d5a-4b73-a7a4-8e002e12c14e",
//     "title": "Exercitationem qui ut sit.",
//     "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius dui sit amet diam venenatis, sit amet consequat eros auctor.",
//     "authorId": "35e634f1-dc65-44f4-8cf5-e4f3f2c8c65b"
//   },
//   {
//     "_id": "d49c44d1-9ad5-4e9e-8bcd-9c928a643776",
//     "title": "Culpa est placeat dolorum.",
//     "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet nisi non lectus convallis volutpat et non dolor.",
//     "authorId": "c7f09d3d-59b3-4b6a-8cf1-96f620a7b5b2"
//   },
//   {
//     "_id": "3b47f7c8-2d87-4c6d-a593-f11a747d6233",
//     "title": "Aliquam officia voluptatum.",
//     "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla malesuada, sem nec scelerisque dignissim, orci libero consectetur velit, eu suscipit est nulla a odio.",
//     "authorId": "7f9e46d3-2a9b-4c95-80de-3edb3d730dce"
//   },
//   {
//     "_id": "7d5a0b1d-712d-4d2d-9c02-737ae47d0c99",
//     "title": "Laboriosam quis aliquam.",
//     "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius lectus vel dui scelerisque, et blandit ipsum ullamcorper.",
//     "authorId": "9f9c8f7c-2db4-4d15-b5a5-339b6c4d4a0f"
//   },
//   {
//     "_id": "42f1b3a7-9254-4d24-91e7-77b02d67a623",
//     "title": "Aperiam fugit aliquam.",
//     "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia, purus ac interdum euismod, sapien dui suscipit nunc, nec gravida ex sapien ac justo.",
//     "authorId": "14f6e283-0d9d-4e63-a5ae-ec1bda1d5f8b"
//   },
//   {
//     "_id": "43c1f3b4-8d8b-4b84-bd8d-1a58b7df8d9b",
//     "title": "Nostrum dolorem accusamus.",
//     "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae lectus a metus dictum egestas. Donec auctor orci a volutpat fermentum.",
//     "authorId": "29fcd056-7cb7-4e80-b26b-1cfa2d5d9a67"
//   },
//   {
//     "_id": "71a77309-4d46-4f5d-8df5-8b8e1e4a0b3a",
//     "title": "Voluptatem iusto libero.",
//     "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium ipsum vel nisl consequat, in bibendum libero sollicitudin.",
//     "authorId": "b9c5f5b2-575e-4bfb-b787-4e3a4ea68b8a"
//   },
//   {
//     "_id": "f7d79c71-8d7f-4dc2-84c8-1c9a3341b7e8",
//     "title": "Omnis recusandae dignissimos.",
//     "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Duis volutpat augue at ipsum facilisis, nec consectetur metus iaculis.",
//     "authorId": "d7e41c4e-4768-4e68-8888-8f2639a6f6b7"
//   },
//   {
//     "_id": "a2b6d9b8-9c25-4f89-bd2c-abcfc0248d1d",
//     "title": "Dolorem repellat numquam.",
//     "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Vivamus et orci ac velit pharetra gravida.",
//     "authorId": "5f982f4d-f802-4f91-b1f3-0e4a6749bb1f"
//   }
// ]

type Post = {
  _id: string;
  title: string;
  content: string;
  authorId: string;
};

const getData=async()=> {
  const res = await fetch('http://localhost:5000/api/posts', { next: { revalidate: 10 } })
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default async function Home () {
  const posts:any[]=await getData()
  
  return (
    <div className='itemContainer'>
      <ul className='ul'>
        {
        posts.length==0?
        <div className='displayText'>No Data</div>
        :
        posts.map((post:any) => (
          <PostCard post={post}/>
        ))}
      </ul>
    </div>
  );
};


 Home;