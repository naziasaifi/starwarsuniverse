import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ColumnsData } from '../../model/DataTable';
import { TableFooter, TextField } from '@mui/material';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import './data-table.css';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#add8e6',
    color: 'black',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


export default function CustomDataTable(props: any) {
  const [pageNo, setPageNo] = React.useState<number>(1);
  let rowPerPage = 0;
  let totalPages = 0;
  if (props.pageData) {
    rowPerPage = props.rowPerPage ? props.rowPerPage : 10;
    totalPages = Math.floor(props.pageData.count / rowPerPage) + ((props.pageData.count % rowPerPage) == 0 ? 0 : 1);
  }
  const handleNext = (action: string) => {
    switch (action) {
      case 'next':
        if (props.pageData.next) {
          props.handleNext(props.pageData.next);
          setPageNo(pageNo + 1);
        }
        break;
      case 'prev':
        if (props.pageData.prev) {
          props.handleNext(props.pageData.prev);
          setPageNo(pageNo - 1);
        }
        break;
    }
  }
  return (
    <React.Fragment>
      {props.filter ? 
      <TextField onChange={(e) => props.filter(e.target.value)} style={{ marginBottom: '1rem' }} label="Search By Name" variant="outlined" /> : null}
      <TableContainer component={Paper}>
        <Table className='custom-table' sx={{ minWidth: 700 }}>
          <TableHead>
            <TableRow>
              {
                props.columns.map((col: ColumnsData) => {
                  return <StyledTableCell>{col.header}</StyledTableCell>
                })
              }

            </TableRow>
          </TableHead>
          <TableBody>
            {props.data.map((row: any) => (
              <StyledTableRow key={row.field} onClick={() => props.onRowClick && props.onRowClick(row)}>
                {
                  props.columns.map((col: ColumnsData) => {
                    return <StyledTableCell align="left">{col.field ? row[col.field] : (col.body ? col.body(row) : null)}</StyledTableCell>
                  })
                }
              </StyledTableRow>
            ))}
          </TableBody>
          {props.pageData ? <TableFooter className='pagination-row'>
            <TableRow >
              <span className='pagination-footer'>Row per page: {rowPerPage}, Page {pageNo} of {totalPages}</span>
              <SkipPreviousIcon onClick={() => handleNext('prev')} className='pagination-icon'></SkipPreviousIcon>
              <SkipNextIcon onClick={() => handleNext('next')} className='pagination-icon'></SkipNextIcon>
            </TableRow>
          </TableFooter> : null}
        </Table>
      </TableContainer>
    </React.Fragment>
  );
}