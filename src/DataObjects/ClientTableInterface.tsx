import axios from "axios";

export interface ClientTableRow {
    id: Number,
    ClientName: String,
    // AddressState: String,
    // InventoryCount: Number,
    // ContactCount: Number
}


export interface ClientTableJsonObject {
    id: Number,
    client_name: String,
    // state: String,
    // num_of_inventories: Number,
    // num_of_contacts: Number
}


export async function getClientTable() {
    const response = await axios.get(
      'http://localhost:8040/clients',
      {}
    );

    return response;
}