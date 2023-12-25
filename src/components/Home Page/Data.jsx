import React from 'react'
import { useState, useEffect } from 'react'

export const Data = () => {
    const [articles, setArticles] = useState([])
    useEffect(() => {
        fetch('https://dev.to/api/articles')
            .then(resp => resp.json())
            .then(articles => setArticles(articles))
    }, [])
    return (
        <div>
            {articles.map((article) => {
                console.log(article.cover_image)
                article.cover_image
            })}
        </div>
    )
}
