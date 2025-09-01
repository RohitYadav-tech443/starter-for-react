import React, {useState, useEffect} from 'react'
import { Container, PostCard } from '../components'
import appwriteService from "../appwrite/config";

function AllPosts() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
         appwriteService.getPosts([]).then((posts) => {
        if (posts) {
            setPosts(posts.documents)
        }
    })
}, []) // empty array to prevent the infinite rendering of the posts again and again
   
  return (
  <div className='w-full py-12'>
    <Container>
      <div className="w-full py-8 mt-4 text-center relative overflow-hidden border border-t-2 border-t-black bg-[url('https://tse3.mm.bing.net/th/id/OIP.xkKsc7rtsL16W8Jn5Pcx0wHaCO?pid=Api&P=0&h=180')] bg-cover bg-center">
        
        {/* Flexbox to arrange cards side by side */}
        <div className="flex flex-wrap justify-center gap-1/4">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>

      </div>
    </Container>
  </div>
)

}

export default AllPosts