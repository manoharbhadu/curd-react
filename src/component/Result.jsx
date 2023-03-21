import React from 'react'
import { Container, Table } from 'react-bootstrap'

const Result = (props) => {
const {array,editData, deleteData} = props

  return (
    <Container className="mt-5">
        <div className="output-container w-100">
          <Table
            striped
            bordered
            className="text-center table"
          >
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Gender</th>
                <th>Password</th>
                <th>Condition</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {array.map((val, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{val.name + " " + val.lname}</td>
                  <td>{val.email}</td>
                  <td>{val.phone}</td>
                  <td>{val.gender}</td>
                  <td>{val.password}</td>
                  <td>{val.checqbox === true ? "yes" : "no"}</td>
                  <td>
                    <button
                      className="btn btn-warning me-3"
                      onClick={() => editData(index)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteData(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Container>
  )
}

export default Result