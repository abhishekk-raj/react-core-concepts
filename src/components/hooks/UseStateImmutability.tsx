import {useState} from "react";

const UseStateImmutability = () => {
  const [user, setUser] = useState({
    name: 'Abhishek',
    occupation: 'SDE'
  });

  /*
  * We should never mutate the existing state directly, it will not re-render
  * So the value will not be shown on UI
  * */
  // const updateUser = () => {
  //   user.name = 'Mohan';
  //   setUser(user);
  // }


  /*
  * Correct way of updating the object that will re-render and latest value will
  * be shown on UI
  * */
  const updateUser = () => {
    setUser((prevState) => ({
      ...prevState,
      name: "Mohan"
    }));
  }

  return (
    <div>
      <h1> Update state immutably</h1>
      <p>Name: {user.name}</p>
      <p>Occupation: {user.occupation}</p>

      <button onClick={updateUser}>Update User Details</button>
    </div>
  )
}

export default UseStateImmutability;