import { gsap } from "gsap";
import Loader from "./components/Loader";

const App = () => {
  return (
    <div className="w-screen h-screen flex flex-col gap-40 overflow-x-hidden justify-center items-center text-white relative">
      <Loader />
      <span>hello</span>
    </div>
  );
};

export default App;
