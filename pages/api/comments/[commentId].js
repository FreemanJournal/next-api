import React from 'react'
import { comments } from '../../../data/comments'

export default function deleteHandler(req, res) {
    const { commentId } = req.query
    const comment = comments.find(comment => comment.id === parseInt(commentId))
    res.status(200).json(comment)
    
}
