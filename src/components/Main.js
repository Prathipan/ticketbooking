import React from 'react'
import Movies from './Movies'
function Main() {
    const allMovies = [
        {
          name: "Vikram",
          poster:
            "https://m.media-amazon.com/images/M/MV5BMWNlM2ZjMmUtZGZlZC00ZWFlLTg0M2UtZjM3YWE4NWQ5YzA0XkEyXkFqcGdeQXVyMTA5MjQ4MDg4._V1_.jpg",
        },
        {
          name: "Thor: Love and Thunder",
          poster:
            "https://m.media-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_.jpg",
        },
        {
          name: "Iron man 2",
          poster:
            "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
        },
        {
          name: "Jai Bhim",
          poster:
            "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
        },
        {
          name: "Baahubali",
          poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
        },
      ];
  return (
    <div className="movie-card">
            {allMovies.map(({ name, poster }, index) => {
              return <Movies key={index} name={name} poster={poster} />;
            })}
          </div>
  )
}

export default Main