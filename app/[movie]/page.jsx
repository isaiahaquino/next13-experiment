import nextConfig from "@/next.config"
import Image from "next/image"

export default async function MovieDetail({ params }) {

  const { movie } = params
  const imgPath = 'https://image.tmdb.org/t/p/original'
  const data = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`, {next: {revalidate: 0}})
  const res = await data.json()

  return (
    <div>
      <div>
        <h2 className="text-2xl">{res.title}</h2>
        <h2 className="text-lg">{res.release_date}</h2>
        <h2>Runtime: {res.runtime} minutes</h2>
        <h2 className="text-sm bg-green-600 inline-block my-2 py-2 px-4 rounded">{res.status}</h2>
        <Image className="my-12 w-full" src={imgPath + res.backdrop_path} alt={res.title} width={1000} height={1000} priority />
      </div>
    </div>
  ) 
}