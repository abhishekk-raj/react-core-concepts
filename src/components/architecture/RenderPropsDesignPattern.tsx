import CounterUsingRenderProps from "./CounterUsingRenderProps.tsx";

const RenderPropsDesignPattern = () => {
  return (
    <CounterUsingRenderProps
      render={(count, increment) => (
        <div className="bg-slate-200 p-5 rounded-2xl mt-5 w-1/2">
          <div className="w-full flex justify-center items-center flex-col">
            <p className="text-2xl mb-5">Count: {count}</p>
            <button
              className="bg-slate-500 py-2 px-5 text-gray-100 rounded-2xl mr-2 hover:bg-slate-400 cursor-pointer"
              onClick={increment}
            >Increase
            </button>
          </div>
        </div>
      )}
    />
  )
}

export default RenderPropsDesignPattern;