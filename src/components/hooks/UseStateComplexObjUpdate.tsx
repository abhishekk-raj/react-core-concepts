import {useState} from "react";

const UseStateComplexObjUpdate = () => {
  const [user,setUser] = useState({
    name: 'Abhishek',
    occupation: 'SDE',
    address: {
      village: 'Dhanupra',
      post: 'Kolwara',
      district: 'Muzaffarpur'
    }
  });

  const updateUser = () => {
    setUser(prevState => (
      {...prevState, address: {...prevState.address, village: 'Mohaniya'}}
    ))
  }

  return (
    <div>
      <h1>Update complex object</h1>
      <p>Name: {user.name}</p>
      <p>Occupation: {user.occupation}</p>
      <p>Village: {user.address.village}</p>
      <p>Post Office: {user.address.post}</p>
      <p>District: {user.address.district}</p>
      <button onClick={updateUser}>Update User Details</button>
    </div>
  )
}

export default UseStateComplexObjUpdate;
