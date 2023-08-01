import AppList from "./AppList";

const FullStack = () => {
  return (
    <div className="w-full h-auto">
      <div className="w-full h-auto">
        <p className="text-center font-thin pt-80 pb-24 text-4xl md:text-8xl">
          Full-Stack Apps
        </p>
      </div>
      <AppList />
    </div>
  );
};

export default FullStack;
