import React, { useEffect, useState } from 'react';
import MovieRow from './Components/MovieRow';
import Tmdb from './Tmdb';


export default () => {

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      // Pegando toda a lista
      let list = await Tmdb.getHomeList();
      setMovieList(list)
    }

    loadAll()
  }, [])

  return (
    <div className="page">
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  );
}
