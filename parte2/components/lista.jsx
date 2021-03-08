import React from "react";
import "./lista.css";
import list from "../data/list";
// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    function getItem(){
        return list.map(item =>{
            return <div key={item.usuario} className="lista.item">
                {item.usuario}{item.email}{item.dateI}{item.dateA}{item.status}
            </div>
        })
    }
  return (
    <>
      <div className="lista">
        <div>
          <input type="checkbox"></input>
        </div>
        <div>
            {getItem()}
        </div>
        <div>

        </div>
      </div>
    </>
  );
};
