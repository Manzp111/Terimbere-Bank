import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/client/")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div className="container">
      <h2>Client List</h2>
      <table>
        <thead>
          <tr>
            <th>0</th>
            <th>Client No</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Telephone</th>
            <th>Preference</th>
            <th>Max Rent</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((client, index) => (
              <tr key={client.clientNo}>
                <td>{index + 1}</td>
                <td>{client.clientNo}</td>
                <td>{client.fName}</td>
                <td>{client.IName}</td>
                <td>{client.telNo}</td>
                <td>{client.prefType}</td>
                <td>{client.maxRent}</td>
                <td>{client.eMail}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8">Loading.... or no data available...</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
