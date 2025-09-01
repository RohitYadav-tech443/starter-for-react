import React, {useEffect, useState} from 'react'
import appwriteService from "../appwrite/config";
import {Container, PostCard} from '../components'

function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])
  
    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold text-white hover:bg-blue-300 hover:text-black">
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    return (
        <div className="w-full py-8 mt-4">
            <Container>
                <div  className="w-full py-8 mt-4 text-center bgrelative overflow-hidden py-10 border border-t-2 border-t-black bg-[url('https://tse3.mm.bing.net/th/id/OIP.xkKsc7rtsL16W8Jn5Pcx0wHaCO?pid=Api&P=0&h=180')] bg-cover bg-center">
                    <div className="flex flex-wrap justify-center gap-1/4">
                        {posts.map((post) => (
                            <div key={post.$id} className='p-2 w-1/4'>
                                <PostCard {...post} />
                            </div>
                        ))}
                    </div>
                    
                </div>
            </Container>
        </div>
    )
}

export default Home