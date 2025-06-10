import CompoundComponentDesignPattern from "./CompoundComponentDesignPattern.tsx";
import RenderPropsDesignPattern from "./RenderPropsDesignPattern.tsx";

const ComponentArchitecture = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <CompoundComponentDesignPattern/>
      <RenderPropsDesignPattern/>
    </div>
  )
}

export default ComponentArchitecture;