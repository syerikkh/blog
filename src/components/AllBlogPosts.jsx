import { data } from 'autoprefixer'
import React, { useEffect, useState } from 'react'

export const AllBlogPosts = () => {
    const [articles, setArticles] = useState([])
    useEffect(() => {
        fetch('https://dev.to/api/articles')
            .then(resp => resp.json())
            .then(articles => setArticles(articles))
    }, [])
    return (
        <div>
            AllBlogPosts
            {articles.map((article) => {
                return (
                    <div>
                        {article.title}
                    </div>
                )
            })}
        </div>
    )
}
