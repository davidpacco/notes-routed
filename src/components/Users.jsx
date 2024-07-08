import { Table } from "react-bootstrap";

export function Users() {
  return (
    <div>
      <h2>Users</h2>
      <Table striped hover>
        <tbody>
          <tr>
            <td>Matti Luukkainen</td>
          </tr>
          <tr>
            <td>Juha Tauriainen</td>
          </tr>
          <tr>
            <td>Arto Hellas</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}