import React, { useState } from "react";

const Problem1 = () => {
  const [show, setShow] = useState([]);
  const [filters, setFilters] = useState([]);
  const [name, setName] = useState('');
  const [status, setStatus] = useState("");
  const [items, setItems] = useState([]);

  console.log(filters);

  const handleSubmit = (e) => {
      e.preventDefault();
      const data = { name, status }
      if (name && status) {
          setShow((ls) => [...ls, data]);
          setFilters((ls) => [...ls, data]);
          setName('')
          setStatus('')
      }
  };

  const handleClick = (val) => {
      setShow(val);
          const updateItem = show.filter((item) => {
            return item.status == val;
          });
          setShow(updateItem);
      
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
        <div className="col-6 ">
          <form
            onSubmit={handleSubmit}
            className="row gy-2 gx-3 align-items-center mb-4"
          >
            <div className="col-auto">
              <input
                type="text"
                name="username"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control"
                placeholder="Name"
              />
            </div>
            <div className="col-auto">
              <input
                type="text"
                className="form-control"
                name="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                placeholder="Status"
              />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="col-8">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
              <button
                className={`nav-link `}
                type="button"
                onClick={() => setShow(filters)}
              >
                All
              </button>
            </li>
            <li className="nav-item">
              <button
                //   ${show === "active" && "active"}
                className={`nav-link `}
                type="button"
                onClick={() => handleClick("active")}
              >
                Active
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link `}
                type="button"
                onClick={() => handleClick("completed")}
              >
                Completed
              </button>
            </li>
          </ul>
          <div className="tab-content"></div>
          <table className="table table-striped ">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
              </tr>
              {show.map((s) => {
                return (
                  <tr>
                    <td>{s.name}</td>
                    <td>{s.status}</td>
                  </tr>
                );
              })}
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Problem1;
