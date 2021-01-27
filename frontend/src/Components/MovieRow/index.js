import React from "react";
import './style.css'

export default ({ title, items }) => {
    return (
        <div>
            <div>{title}</div>
            <div className="movieRow--listarea">
                {items.results.length > 0 && items.results.map((item, key) => (
                    <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                ))}
            </div>
        </div>
    )
}