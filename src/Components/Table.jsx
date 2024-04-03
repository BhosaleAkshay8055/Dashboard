import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Divider, Grid, Typography } from '@mui/material';
import SearchBar from './SearchBar';
import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
import DeleteIcon from '@mui/icons-material/Delete';
import image1 from '../assets/image1.jpeg'
import image2 from '../assets/image2.jpeg'

const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
  {
    id: 'population',
    label: 'Population',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'size',
    label: 'Size\u00a0(km\u00b2)',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'density',
    label: 'Density',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

function createData(name, population, size) {
  const density = population / size;
  return { name, population, size, density };
}

const rows = [
  createData('India', 'IN', 1324171354, 3287263),
  createData('China', 'CN', 1403500365, 9596961),
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        
        <Grid container md={12} sx={{ p:'5px'}}>
            <Grid item md={8}>
                <Typography variant='h6'>Product Sell</Typography>
            </Grid>
            <Grid item md={1}>
                {/* <Typography variant='p'>Search</Typography> */}
                <SearchBar />
            </Grid>
            <Grid item md={1}sx={{ opacity: 0, pointerEvents: 'none' }}>
            </Grid>
            <Grid item md={2}>
                <Typography variant='p'>Last 30 days</Typography>
                <ArrowDropDown sx={{ pt:'5px' }}/>
            </Grid>
        </Grid>


        <Grid container md={12} sx={{ p:'5px'}}>
            <Grid item md={8}>
                <Typography variant='p'>Product Name</Typography>
            </Grid>
            <Grid item md={1}>
                <Typography variant='p'>Stack</Typography>
            </Grid>
            <Grid item md={1}>
                <Typography variant='p'>Price</Typography>
            </Grid>
            <Grid item md={2}>
                <Typography variant='p'>Total Sales</Typography>
            </Grid>
        </Grid>
        <Divider ></Divider>

        <Grid container md={12} sx={{ p:'5px'}}>
            <Grid item md={8} sx={{ display:"flex"}}>
                {/* <Typography variant='p'>Product Name</Typography> */}
                <Grid item>
                    <img src={image1} alt='image1'style={{ height:"40px", width:"50px", borderRadius:'5px'}}></img>
                    </Grid>
                <Grid item sx={{ pl:'10px'}}>
                    <Typography variant='p'>Abstract 3D</Typography>
                    <Typography variant='caption' display="block">Lorem ipsun</Typography>
                </Grid>
            </Grid>
            <Grid item md={1}>
                <Typography variant='p'>32 in stock</Typography>
            </Grid>
            <Grid item md={1}>
                <Typography variant='p'><span style={{ fontWeight:'bold'}}>{'$45.99'}</span></Typography>
            </Grid>
            <Grid item md={2}>
                <Typography variant='p'>20</Typography>
            </Grid>
        </Grid>

        <Grid container md={12} sx={{ p:'5px'}}>
            <Grid item md={8} sx={{ display:"flex"}}>
                {/* <Typography variant='p'>Product Name</Typography> */}
                <Grid item>
                    <img src={image2} alt='image2' style={{ height:"40px", width:'50px', borderRadius:'5px'}}></img>
                    </Grid>
                <Grid item sx={{ pl:'10px'}}>
                    <Typography variant='p'>Sarphens Illustration</Typography>
                    <Typography variant='caption' display="block">Lorem ipsun</Typography>
                </Grid>
            </Grid>
            <Grid item md={1}>
                <Typography variant='p'>32 in stock</Typography>
            </Grid>
            <Grid item md={1}>
                <Typography variant='p'><span style={{ fontWeight:'bold'}}>{'$45.99'}</span></Typography>
            </Grid>
            <Grid item md={2}>
                <Typography variant='p'>20</Typography>
            </Grid>
        </Grid>

              
        {/* <Table stickyHeader aria-label="sticky table">
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table> */}
      </TableContainer>
    </Paper>
  );
}