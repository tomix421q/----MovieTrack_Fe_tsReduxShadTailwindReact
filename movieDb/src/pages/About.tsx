import { Clapperboard } from 'lucide-react'

function About() {
  return (
    <section className='h-auto w-full flex flex-col mt-[100px] text-center px-4'>
      <h1 className='flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center text-4xl font-bold leading-none tracking-tight sm:text-8xl mb-10'>
        Welcome to
        <span className='bg-secondary-foreground text-secondary font-extralight py-2 px-4 rounded-lg  tracking-widest text-orange-500 bg-amber-400'>
          <div className='flex relative '>
            <h2>MovieTrack</h2>
            <Clapperboard className='sm:absolute size-[50px] sm:left-[500px] sm:-top-10 rotate-12 text-yellow-400 bg-black p-4  rounded-lg' />
          </div>
        </span>
      </h1>

      <p className=' sm:text-6xl tracking-wide leading-10 max-w-4xl mx-auto text-gray-200'>
        Welcome to MovieTrack! Your ultimate companion for movie enthusiasts. Here, you can discover new films, keep track of what
        you’ve watched, and create your personal list of favorites. Whether it’s noting down movies you’ve seen or marking ones
        you plan to watch, MovieTrack makes your movie-watching experience organized and enjoyable. Dive into the world of cinema
        with us and never miss a great movie again! Feel free to tweak it to better fit the tone and style of your website.
      </p>
    </section>
  )
}
export default About
