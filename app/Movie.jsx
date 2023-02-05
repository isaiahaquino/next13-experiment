import Link from "next/link";
import Image from "next/image";

export async function generateStaticParams() {
  const data = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`)
  const res = await data.json()
  return res.results.map((movie) => ({
    movie: toString(movie.id),
  }))
}

export default function Movie({ title, id, poster_path, release_date}) {

  const imgPath = 'https://image.tmdb.org/t/p/original'

  return (
    <div key={id}>
      <h1>{title}</h1>
      <h2>{release_date}</h2>
        <Link href={`/${id}`}>
          <Image src={imgPath + poster_path} width={800} height={800} alt={title} />
        </Link>
    </div>
  )
} 