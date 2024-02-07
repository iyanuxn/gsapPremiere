import { gsap } from "gsap";
import Loader from "./components/Loader";

const App = () => {
  return (
    <div className="w-screen h-screen flex flex-col overflow-x-hidden text-white relative">
      <Loader />
      <nav>
        <div className="w-full h-52 px-20 flex items-center">
          <h1 className="text-2xl">I am a logo</h1>
        </div>
      </nav>
      <div className="bg-amber-400 w-72 overflow-auto px-20">
        <span className="text-9xl text-nowrap ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
          reprehenderit magni porro, sint inventore sed rerum ea assumenda
          itaque?
        </span>
      </div>
    </div>
  );
};

export default App;
