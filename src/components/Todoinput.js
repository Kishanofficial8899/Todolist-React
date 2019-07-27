import React, { Component } from 'react';

export default class Todoinput extends Component {
    render() {
       const {item,handleChange,handleSubmit,editItem} = this.props;
        return (
            <div className="card card-body my-4">
              <form onSubmit={handleSubmit}>
                 <div className="input-group">
                     <div className="input-group-prepend">
                       <div className="input-group-text bg-primary text-white">
                         <i className="fas fa-book"></i>
                       </div>
                     </div>
                     <input type="text" className="form-control" placeholder="Enter Todo" value={item} onChange={handleChange}></input>
                 </div>
                 <button type="submit" className={editItem  ? "btn btn-success  btn-block mt-3 text-capitalize" : "btn btn-primary btn-block mt-3 text-capitalize"}>{editItem ? 'Edit' :"ADD item"}</button>
              </form>

            </div>
        )
    }
}

