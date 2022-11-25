import { useEffect, useState } from "react";
import "../App.css";
import {ClientTableRow, ClientTableJsonObject, getClientTable} from "../DataObjects/ClientTableInterface";
import { INIT_RESULT_DATA } from "../DataConstants/ClientTableConstants";
import { useNavigate } from "react-router-dom";
import React, { Component, KeyboardEvent } from "react";


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
              id: (element.abc_client_id ? element.abc_client_id : null),
              ClientName: (element.client_name ? element.client_name : ""),
              CompanyAddress: (element.company_address ? element.company_address : ""),
              phoneNumber: (element.phone_number ? element.phone_number: ""),
              createdBy: (element.created_by ? element.created_by: ""),
              createdDate: (element.created_date ? element.created_date: ""),
              modifiedBy: (element.modified_by ? element.modified_by: ""),
              modifiedDate: (element.modified_by ? element.modified_by: ""),
              isDeleted:  (element.is_deleted ? element.is_deleted: null)
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

  // Handles burger click
  function onClickHandler(){
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"), 0);

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
    });
  }

  //Is called whenever search input changes. Rewrites table data based upon search
  function searchTable(e: string) {
    let filter, found, table, tr, td, i, j;
    filter = e.toUpperCase();
    table = document.getElementById("dataTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td");
        for (j = 0; j < td.length; j++) {
            if (td[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
                found = true;
            }
        }
        if (found) {
            tr[i].style.display = "";
            found = false;
        } else {
            tr[i].style.display = "none";
        }
    }
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

  //Used to handle row click
  const navigate = useNavigate();
  const handleRowClick = () => {
    navigate('/clientInventories');
  }

  // Will be used to change icons of Access Logs button on mouse hover
  const [isHoveringAccessLogs, setIsHoveringAccessLogs] = useState(false);

  const handleMouseOverAccessLogs = () => {
      setIsHoveringAccessLogs(true);
  };

  const handleMouseOutAccessLogs = () => {
      setIsHoveringAccessLogs(false);
  };

  // Will be used to change icons of Add Client button on mouse hover
  const [isHoveringAddClient, setIsHoveringAddClient] = useState(false);

  const handleMouseOverAddClient = () => {
      setIsHoveringAddClient(true);
  };

  const handleMouseOutAddClient = () => {
      setIsHoveringAddClient(false);
  };
  
  return (
    <>
      <div className="hero-head">
            <section className="section">
                <nav className="navbar has-shadow is-fixed-top test-app-header" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        {/* <a href="/" className="navbar-item">
                        <img
                            src={require("../anime.png")}
                            alt="Logo"
                            width="auto"
                            height="auto"
                        />
                        </a> */}
                        <div className="navbar-item">
                            <h1 className="title is-3 is-family-secondary has-text-weight-bold is-italic">Client List</h1>
                        </div>
                        <button className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={onClickHandler}>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </button>
                    </div>
                    <div id="navbarBasicExample" className="navbar-menu">
                        <div className="navbar-start">
                            <div className="navbar-item">
                                <input id="searchBar" className="input" onChange={e => searchTable(e.target.value)} type="search" placeholder="Search" size={50}></input>
                            </div>    
                        </div>
                        <div className="navbar-end">
                            <div className="navbar-item">
                                <div className="field is-grouped">
                                    <p className="control">
                                        <a className="icon-text button is-success is-light" href="/AccessLogs" onMouseOver={handleMouseOverAccessLogs} onMouseOut={handleMouseOutAccessLogs}>
                                            <span className="icon">
                                                <i className={isHoveringAccessLogs ? 'fas fa-sharp fa-spin fa-regular fa-gears' : 'fas fa-sharp fa-regular fa-gears'}></i>
                                            </span>
                                            <span>
                                                Access Logs
                                            </span>
                                        </a>
                                    </p>
                                    <p className="control">
                                        <a className="button is-success is-light" href="/" onMouseOver={handleMouseOverAddClient} onMouseOut={handleMouseOutAddClient}>
                                            <span className="icon">
                                                <i className={isHoveringAddClient ? 'fas fa-solid fa-user-plus fa-bounce' : 'fas fa-solid fa-user-plus'}></i>
                                            </span>
                                            <span>
                                                Add Client
                                            </span>
                                        </a>
                                    </p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </section>
      </div>
      <div className="hero-body">
        <div className="box columns is-centered is-radiusless">
          <div className="column is-12 px-0 py-0"> 
              <table id="dataTable" className="table is-fullwidth is-hoverable is-borderless">
                  <tbody>
                    {tableData.map((row, i) =>
                      <tr onClick={() => handleRowClick()} id={(row.id ? row.id.toString() : "")}>
                        <td>
                          <div>
                            {(row.ClientName ? row.ClientName : "")}
                          </div>
                        </td>
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
          </div>
        </div>
      </div>
    </>
  );
}