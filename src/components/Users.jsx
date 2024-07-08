import { Paper, Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material"

export function Users() {
  return (
    <div>
      <h2>Users</h2>
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>
                Matti Luukkainen
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Juha Tauriainen
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Arto Hellas
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}