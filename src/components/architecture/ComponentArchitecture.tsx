import CompoundComponentDesignPattern from "./CompoundComponentDesignPattern.tsx";
import RenderPropsDesignPattern from "./RenderPropsDesignPattern.tsx";
import ProtectedComponent from "./ProtectedComponent.tsx";

const ComponentArchitecture = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <CompoundComponentDesignPattern/>
      <RenderPropsDesignPattern/>
      <ProtectedComponent name={"Abhishek"}/>
    </div>
  )
}

export default ComponentArchitecture;