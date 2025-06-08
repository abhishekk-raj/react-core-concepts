import UseStateArray from "./UseStateArray.tsx";
import UseStateBatchingAndAsync from "./UseStateBatchingAndAsync.tsx";
import UseStateImmutability from "./UseStateImmutability.tsx";
import UseStateComplexObjUpdate from "./UseStateComplexObjUpdate.tsx";

const ReactHooks = () => {
  return (
    <>
      <UseStateArray/>
      <UseStateBatchingAndAsync/>
      <UseStateImmutability/>
      <UseStateComplexObjUpdate/>
    </>
  )
}

export default ReactHooks;
