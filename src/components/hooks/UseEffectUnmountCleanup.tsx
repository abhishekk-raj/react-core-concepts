import {useEffect} from "react";

const UseEffectUnmountCleanup = () => {

  useEffect(() => {
    const handler = () => console.log("Window Resized");
    window.addEventListener("resize", handler);

    return () => {
      window.removeEventListener("resize", handler); // This will cleanup on unmount
    }
  }, [])

  return (
    <div>
      <h1>Use Effect unmount cleanup</h1>
    </div>
  )
}

export default UseEffectUnmountCleanup;