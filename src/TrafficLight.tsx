import {useEffect, useState} from 'react';

export function TrafficLight() {
  const [signal, setSignal] = useState('Red');

  useEffect(() => {
    const interval = setInterval(() => {
      // if (signal === 'Red') {
      //   setSignal('Yellow');
      // } else if (signal === 'Yellow') {
      //   setSignal('Green');
      // } else {
      //   setSignal('Red');
      // }
      setSignal((prevState) => {
        switch (prevState) {
          case "Red":
            return "Yellow";
          case "Yellow":
            return "Green";
          case "Green":
            return "Red";
          default:
            return "Red";
        }
      })
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        background: 'black',
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}>
      <h1>Traffic Signal</h1>
      <div>
        <div
          style={{
            background:
              signal === 'Red' ? 'red' : '#ccc',
          }}
          className="trafficLight"
        >
        </div>
        <div
          style={{
            background:
              signal === 'Yellow' ? 'Yellow' : '#ccc',
          }}
          className="trafficLight"
        >
        </div>
        <div
          style={{
            background:
              signal === 'Green' ? 'green' : '#ccc',
          }}
          className="trafficLight"
        >
        </div>
      </div>
    </div>
  );
}

// Log to console
console.log('Hello console');
