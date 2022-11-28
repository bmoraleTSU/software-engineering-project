import axios from "axios";

export interface ClientTableRow {
    id: Number,
    ClientName: String,
    CompanyAddress: String,
    phoneNumber: String,
    createdBy: String,
    createdDate: String,
    modifiedBy: String,
    modifiedDate: String,
    isDeleted: Number
    // AddressState: String,
    // InventoryCount: Number,
    // ContactCount: Number
}


export interface ClientTableJsonObject {
    abc_client_id: Number,
    client_name: String,
    company_address: String,
    phone_number: String,
    created_by: String,
    created_date: String,
    modified_by: String,
    modified_date: String,
    is_deleted: Number
}


export async function getClientTable() {
    const response = await axios.get(
        'http://localhost:8000/clients/?format=json',
        {}
    );

    return response;
}