import CubeImage from "./assets/image-equilibrium.jpg";
import IconEthereum from "./assets/icon-ethereum.svg";
import IconClock from "./assets/icon-clock.svg";
import ImageAvatar from "./assets/image-avatar.png";

function App() {
  return (
    <div className="h-full w-full py-14 px-6 text-white">
      <div className="rounded-xl bg-VeryDarkBlue1 max-w-sm mx-auto">
        <div className="p-6 flex flex-col gap-4">
          <img src={CubeImage} alt="image equilibrium" className="rounded-lg" />
          <h4 className="text-2xl font-bold hover:text-Cyan cursor-pointer">Equilibrium #3429</h4>
          <p className="font-light text-SoftBlue">
            Our Equilibrium collection promotes balance and calm.
          </p>
          <div className="flex justify-between">
            <div className="flex items-center gap-1 text-Cyan">
              <div className="">
                <img src={IconEthereum} alt="icon ethereum" />
              </div>
              <p>0.041 ETH</p>
            </div>
            <div className="flex items-center gap-1">
              <div className="">
                <img src={IconClock} alt="icon clock" />
              </div>
              <p>3 days left</p>
            </div>
          </div>

          <div className=" border-t-2 border-gray-700">
            <div className="p-4 flex gap-4 items-center">
              <img src={ImageAvatar} alt="User Image" className="w-8 h-8" />
              <p className="hover:text-Cyan cursor-pointer"><span className="text-SoftBlue">Creation of</span> Jules Wyvern</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
