import { useEffect, useState } from "react";
import "../App.css";
import {ClientTableRow, ClientTableJsonObject, getClientTable} from "../DataObjects/ClientTableInterface";
import { INIT_RESULT_DATA } from "../DataConstants/ClientTableConstants";




export default function Main() {
    
  const [tableData, setTableData] = useState<ClientTableRow[]>([INIT_RESULT_DATA]);
  const [modalClientData, setmodalClientData] = useState<ClientTableRow>(INIT_RESULT_DATA);
  const [isModalActive, setIsModalActive] = useState<Boolean>(false);


  //A function that supports the creation of the client table.
  function setClientTable(){
    try{
      getClientTable().then(
        function (response: any){
          let clientTableArray: ClientTableRow[] = [];
          
          //Define the output of my objects to the array.
          response.data.forEach((element: ClientTableJsonObject) => {
            clientTableArray.push({
              id: (element.id ? element.id : null),
              ClientName: (element.client_name ? element.client_name : ""),
              // AddressState: (element.state ? element.state : ""),
              // InventoryCount: (element.num_of_inventories ? element.num_of_inventories : null),
              // ContactCount: (element.num_of_contacts ? element.num_of_contacts : null)
            });
          });


          //Overwrite the table data.
          setTableData(clientTableArray);
        },
        (error) => {
          console.log(error)
        }
      );
    } catch{}
  } 
  
  function toggleModal() {
    setIsModalActive(!isModalActive);
  }

  function showModal(key: number){
    let clientRow: ClientTableRow = tableData.at(key);
    setmodalClientData(clientRow);
    toggleModal();
  }


  const Modal = ({ closeModal, modalState }: { closeModal: any, modalState: boolean }) => {
    if(!modalState) {
      return null;
    }
    
    return(
      <div className="modal is-active">
        <div className="modal-background"></div>
        <div className="modal-card">
          <div className="modal-card-head is-radiusless">
            <p className="modal-card-title">Client Information</p>
            <button className="delete is-pulled-right" aria-label="close" onClick={closeModal}></button>
          </div>
          {/* <section className="modal-card-body columns">
            <div className="column">
              <label className="has-text-weight-medium">Number: </label>
              <p className="mb-3">{(modalClientData.id ? modalClientData.id.toString() : "")}</p>
              { modalClientData.ClientName &&
                <>
                  <label className="has-text-weight-medium">Client Name: </label>
                  <p>{(modalClientData.ClientName ? modalClientData.ClientName : "")}</p>
                </>
              }
            </div>
            <div className="column">
              { modalClientData.AddressState &&
                <>
                  <label className="has-text-weight-medium">State: </label>
                  <p className="mb-3">{(modalClientData.AddressState ? modalClientData.AddressState : "")}</p>
                </>
              }
              { modalClientData.InventoryCount &&
                <>
                  <label className="has-text-weight-medium">Number of Inventories: </label>
                  <p className="mb-3">{(modalClientData.InventoryCount ? modalClientData.InventoryCount.toString() : "")}</p>
                </>
              }
              { modalClientData.ContactCount &&
                <>
                  <label className="has-text-weight-medium">Number of Contacts: </label>
                  <p>{(modalClientData.ContactCount ? modalClientData.ContactCount.toString() : "")}</p>
                </>
              }
            </div>
          </section> */}
        </div>
      </div>
    );
  }


  //The useEffect is a function that runs whenever the set data changes or when loading the page.
  useEffect(() => {
    setClientTable();
  }, []);
  
  return (
    <>
      <div className="hero-body">
        <div className="box columns is-centered is-radiusless">
          {/* <div className="column is-12 px-0 py-0">  */}
              <table className="table is-fullwidth is-hoverable is-borderless">
                  <tbody>
                    {tableData.map((row, i) =>
                      <tr id={(row.id ? row.id.toString() : "")}>
                        {/* <td>{(row.id ? row.id.toString() : "")}</td> */}
                        <td>
                          <div>
                            {(row.ClientName ? row.ClientName : "")}
                          </div>
                        </td>
                        {/* <td>{(row.AddressState ? row.AddressState : "")}</td> */}
                        {/* <td>{(row.InventoryCount ? row.InventoryCount.toString() : "")}</td> */}
                        {/* <td>{(row.ContactCount ? row.ContactCount.toString() : "")}</td> */}
                        <td className="has-text-right is-flex is-align-items-center is-pulled-right">
                          <a href="/ClientContacts">
                            <button className="button is-light">Client Contacts</button>
                          </a>
                          <span className="icon">
                            <i className="fas fa-duotone fa-arrow-right fa-1.5x"></i>
                          </span>
                        </td>
                      </tr> 
                    )}
                  </tbody>
              </table>
              <Modal
                closeModal={toggleModal}
                modalState={isModalActive.valueOf()}
              />
          {/* </div> */}
        </div>
      </div>
    </>
  );
}