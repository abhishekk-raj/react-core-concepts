import {useEffect, useLayoutEffect} from "react";

const UseEffectUnmountCleanup = () => {

  /*
  * We use LayoutEffect if we need to measure or mutate the DOM
  * before the browser paitns it
  * */
  useLayoutEffect(() => {
    const height = window.innerHeight;
    console.log("Window Height :: ", height);
  }, []);

  useEffect(() => {
    console.log('UseEffect Called');
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