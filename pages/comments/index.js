import React, { useState } from 'react'

export default function CommentPage() {
    const [comments, setComments] = useState([])
    const [comment, setComment] = useState('')
    const fetchComments = async () => {
        const response = await fetch('/api/comments')
        const data = await response.json()
        setComments(data)
    }
    const submitHandler = async () => {
        const response = await fetch('/api/comments', {
            method: "POST",
            body: JSON.stringify({ comment }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json();
        console.log(data);
    }
    const deleteHandler = async (commentId)=>{
        const response = await fetch(`/api/comments/${commentId}`,{
            method:"DELETE"
        })
        const data = await response.json();
        console.log(data);
        fetchComments();

    }
    return (
        <div className="main">
            <h1>CommentPage</h1>

            <input
                type="text"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
            /> <br /><br />
            <button onClick={submitHandler}>Submit Comment</button><br /><br />
            <button onClick={fetchComments}>Load Comment</button>
            {comments.map((comment) => (
                <div className="" key={comment.id}>
                    <p>
                        {comment.id}.{comment.text}
                    </p>
                    <button onClick={()=>deleteHandler(comment.id)}>Delete</button>
                </div>
            ))}
        </div>
    )
}
