import { Map } from "../components/Map/Map";

export const DashboardLayout = () => {
  return (
    <div className="w-full h-full text-white flex flex-col">
      <div className="flex flex-grow">
        {/* Main content area */}
        <div className="flex-grow border ">
          <Map />
        </div>

        {/* Right sidebar */}
        <div className="w-1/4 border border-blue-500 flex flex-col">
          <div className="flex-1 border border-blue-300">Battery Info</div>
          <div className="flex-1 border border-blue-300">Navigation Info</div>
          <div className="flex-1 border border-blue-300">Signal Strength</div>
          <div className="flex-1 border border-blue-300">Altitude Info</div>
          <div className="flex-1 border border-blue-300">Additional Info</div>
        </div>
      </div>

      {/* Bottom metrics */}
      <div className="h-1/5 border border-blue-500 flex">
        <div className="flex-1 border border-blue-300">Body Temp</div>
        <div className="flex-1 border border-blue-300">Corr Area</div>
        <div className="flex-1 border border-blue-300">Drone Battery</div>
        <div className="flex-1 border border-blue-300">Drone Power</div>
        <div className="flex-1 border border-blue-300">Crowd's Detection</div>
        <div className="flex-1 border border-blue-300">Incident</div>
      </div>
    </div>
  );
};