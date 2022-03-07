import React from 'react'

export default function handler(req, res) {
    const params = req.query.params
    console.log(params);
    if (params) {
        res.status(200).json(params)
        return
    }
    res.status(200).json("Hello Mom Api")

}
