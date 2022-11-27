import React from "react";
import { useForm } from 'react-hook-form'
import "./App.css";

type Profile = {
  inventoryname: string
  storagetype: string
  maxcapacity: number
}

function AddInventory() {
  const {register, handleSubmit} = useForm<Profile>()

  const onSubmit = handleSubmit((data) => {
    alert(JSON.stringify(data))
  })

  return (
    <main>
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="inventoryname">Inventory Name</label>
      </div>
      <div>
        <label htmlFor="storagetype">Inventory Storage Type</label>
      </div>
      <div>
        <label htmlFor="maxcapacity">Inventory Max Capacity</label>
      </div>
      <button type="submit">Save</button>
    </form>
    </main>
  );
}

export default AddInventory;