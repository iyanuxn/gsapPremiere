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
      <span className="text-9xl text-nowrap w-screen overflow-auto px-20">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
        reprehenderit magni porro, sint inventore sed rerum ea assumenda itaque?
      </span>
    </div>
  );
};

export default App;
