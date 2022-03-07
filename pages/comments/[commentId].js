import { useRouter } from 'next/router'
import React from 'react'
import { comments } from "../../data/comments"
export default function CommentDetails({comment}) {
    const router = useRouter()
    if(router.isFallback){
        return <h3>Loading...</h3>
    }
  return (
    <div>
        <h1>{comment.id} {comment.text}</h1>
    </div>
  )
}

export async function getStaticProps(context){
    const {params} = context
    const {commentId} = params
    const comment = comments.find(comment => comment.id === parseInt(commentId))
    if(!comment)return{notFound:true}
    return{
        props:{
            comment
        },
        // revalidate:10
    }
}
export async function getStaticPaths(){
    return{
        paths:[
            {params:{ commentId:"1"}},
            {params:{ commentId:"2"}},
            {params:{ commentId:"3"}}
        ],
        fallback:true
    }
}