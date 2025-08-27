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
            <div  className="w-full py-8 mt-4 text-center bgrelative overflow-hidden py-10 border border-t-2 border-t-black bg-[url('https://tse2.mm.bing.net/th/id/OIP.iDN_Vgp7csLhucxdjs6C9wHaB2?pid=Api&P=0&h=180')] bg-cover bg-center">
                {posts.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
            </Container>
    </div>
  )
}

export default AllPosts