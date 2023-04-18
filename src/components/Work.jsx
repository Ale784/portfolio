import { Projects } from "./Projects";
import ticTacToe from "../../public/tic-tac-toe.png";
import MoviesImage from "../../public/Movies.png";

export function Work() {
  return (
    <>
      <Projects
        name="tic-tac-toe"
        description="REACT, Vanilla CSS"
        image={ticTacToe}
        Link="https://github.com/Ale784/tic-tac-toe"
        className='rounded-xl object-cover"'
      />
      <Projects
        name="Movies App"
        description="REACT, Tailwind"
        image={MoviesImage}
        Link="https://movies-app-ale784.vercel.app/"
        className='rounded-xl object-cover"'
      />
    </>
  );
}
