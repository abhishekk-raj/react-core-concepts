import UseStateArray from "./UseStateArray.tsx";
import UseStateBatchingAndAsync from "./UseStateBatchingAndAsync.tsx";
import UseStateImmutability from "./UseStateImmutability.tsx";
import UseStateComplexObjUpdate from "./UseStateComplexObjUpdate.tsx";
import UseStateLazyInitialization from "./UseStateLazyInitialization.tsx";

const ReactHooks = () => {
  return (
    <>
      <UseStateArray/>
      <UseStateBatchingAndAsync/>
      <UseStateImmutability/>
      <UseStateComplexObjUpdate/>
      <UseStateLazyInitialization/>
    </>
  )
}

export default ReactHooks;
