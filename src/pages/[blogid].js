import React from 'react'
import { useState, useEffect } from 'react'

export default function BlogId() {
    const [articles, setArticles] = useState([])
    useEffect(() => {
        fetch('https://dev.to/api/articles')
            .then(resp => resp.json())
            .then(articles => setArticles(articles))
    }, [])

    return (
        <div>
            {articles.map((article, index) => {
                return (
                    <div>{article.title}</div>
                )
            })}
        </div>
    )
}
