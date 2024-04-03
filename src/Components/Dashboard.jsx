import React from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import AdjustIcon from '@mui/icons-material/Adjust';
import { Avatar, Typography } from "@mui/material";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
// import ArrowDropDown from '@mui/icons-material/Send';
import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
import Stack from '@mui/material/Stack';
// import BarChart from "./BarChart";
import TickPlacementBars from "./BarChart";
import CustomPieChart from "./PieChart";
import SearchBar from "./SearchBar";
import StickyHeadTable from "./Table";
import BackHandTwoToneIcon from '@mui/icons-material/BackHandTwoTone';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Dashboard() {

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={0} xs={12} sx={{ height: '100vh' }}>
                    <Grid item md={2} xs={12} sx={{ pt: '1%', background: '#0f0881', color:"white", position:'relative' }}>
                        <Grid container md={12}>
                            <Grid item md={1}>
                            </Grid>
                            <Grid item md={2}>
                                <AdjustIcon />
                            </Grid>
                            <Grid item md={6}>
                                <Typography variant="h6">Dashboard</Typography>
                            </Grid>
                            <Grid item md={2}>
                                {/* <ArrowDropDown /> */}
                            </Grid>
                            <Grid item md={1}>
                            </Grid>

                        </Grid>
                        {/*  */}
                        {/* <Stack direction="column"  sx={{  mt: '10%', display:'flex', justifyContent:'space-evenly', position: 'relative' }}> */}
                            <Grid item direction="column" spacing={2} sx={{  mt: '10%', display:'flex', justifyContent:'space-evenly', position: 'relative' }}>
                                <Grid container md={12} className="hover">
                                    <Grid item md={1}>
                                    </Grid>
                                    <Grid item md={2}>
                                        <DeleteIcon />
                                    </Grid>
                                    <Grid item md={6}>
                                        <Typography variant="p">Dashboard</Typography>
                                    </Grid>
                                    <Grid item md={2}>
                                        <ArrowDropDown />
                                    </Grid>
                                    <Grid item md={1}>
                                    </Grid>

                                </Grid>
                                <Grid container md={12} className="hover">
                                    <Grid item md={1}>
                                    </Grid>
                                    <Grid item md={2}>
                                        <DeleteIcon />
                                    </Grid>
                                    <Grid item md={6}>
                                        <Typography variant="p">Product</Typography>
                                    </Grid>
                                    <Grid item md={2}>
                                        <ArrowDropDown />
                                    </Grid>
                                    <Grid item md={1}>
                                    </Grid>

                                </Grid>
                                <Grid container md={12} className="hover">
                                    <Grid item md={1}>
                                    </Grid>
                                    <Grid item md={2}>
                                        <DeleteIcon />
                                    </Grid>
                                    <Grid item md={6}>
                                        <Typography variant="p">Customers</Typography>
                                    </Grid>
                                    <Grid item md={2}>
                                        <ArrowDropDown />
                                    </Grid>
                                    <Grid item md={1}>
                                    </Grid>

                                </Grid>
                                <Grid container md={12} className="hover">
                                    <Grid item md={1}>
                                    </Grid>
                                    <Grid item md={2}>
                                        <DeleteIcon />
                                    </Grid>
                                    <Grid item md={6}>
                                        <Typography variant="p">Income</Typography>
                                    </Grid>
                                    <Grid item md={2}>
                                        <ArrowDropDown />
                                    </Grid>
                                    <Grid item md={1}>
                                    </Grid>

                                </Grid>
                                <Grid container md={12} className="hover">
                                    <Grid item md={1}>
                                    </Grid>
                                    <Grid item md={2}>
                                        <DeleteIcon />
                                    </Grid>
                                    <Grid item md={6}>
                                        <Typography variant="p">Promote</Typography>
                                    </Grid>
                                    <Grid item md={2}>
                                        <ArrowDropDown />
                                    </Grid>
                                    <Grid item md={1}>
                                    </Grid>

                                </Grid>
                                <Grid container md={12} className="hover">
                                    <Grid item md={1}>
                                    </Grid>
                                    <Grid item md={2}>
                                        <DeleteIcon />
                                    </Grid>
                                    <Grid item md={6}>
                                        <Typography variant="p">Help</Typography>
                                    </Grid>
                                    <Grid item md={2}>
                                        <ArrowDropDown />
                                    </Grid>
                                    <Grid item md={1}>
                                    </Grid>

                                </Grid>
                            </Grid>
                            <Grid container  md={2} className="bottom" sx={{ position:{md:'fixed', xs:'relative'}, bottom:{ md:30, xs:"unset"}, zIndex: 1, display:'flex', alignItems:'center' }}>
                                <Grid item md={1}>
                                </Grid>
                                <Grid item md={2}>
                                    <Avatar />
                                </Grid>
                                <Grid item md={6}>
                                    <Typography variant="p">Evono</Typography>
                                    <Box>
                                    <Typography variant="caption">Project Manager</Typography>
                                    </Box>
                                </Grid>
                                <Grid item md={2}>
                                    <ArrowDropDown />
                                </Grid>
                                <Grid item md={1}>
                                </Grid>
                            </Grid>



                        {/* </Stack> */}


                    </Grid>
                    <Grid item md={10} xs={12} sx={{ background:'gray'}}>
                        {/* <Item>md=9</Item> */}
                        <Grid container md={12} xs={12}>
                            
                            <Grid md={12} xs={12} sx={{display:{ md:'flex', xs:'inline'}, alignItems:'center', justifyContent:'space-between', padding:'20px', paddingTop:'10px'}}>
                                <Box>
                                    <Typography variant="h6">Hello Shahrukh <BackHandTwoToneIcon />,</Typography>
                                </Box>
                                <Box>
                                    {/* <Typography variant="h6">Search</Typography> */}
                                    <SearchBar />
                                </Box>
                            </Grid>
                            <Grid md={12} spacing={0} className="card-layout" sx={{ display:{xs:'inline', md:'flex'}, justifyContent:{ xs:'space-evenly', md:'space-between'}, height:{md:'auto', xs:'430px'}}}>
                                <Grid item md={2.5} xs={12} className="card">
                                    <Grid item >
                                        <AdjustIcon sx={{ height:'2em', width:'2em'}}></AdjustIcon>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="p">Earning</Typography>
                                        <Typography variant="h6">{'$198K'}</Typography>
                                        <Typography variant="p" sx={{ color:'green'}}>{'^37.8% '}</Typography>
                                        <Typography variant="p">{'this month'}</Typography>
                                    </Grid>
                                </Grid>
                                <Grid item md={2.5} xs={12} className="card" sx={{ mt:{md:"0px", xs:'5px'}}}>
                                    <Grid item >
                                        <AdjustIcon sx={{ height:'2em', width:'2em'}}></AdjustIcon>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="p">Orders</Typography>
                                        <Typography variant="h6">{'$2.4K'}</Typography>
                                        <Typography variant="p"  sx={{ color:'red'}}>{'^2% '}</Typography>
                                        <Typography variant="p">{'this month'}</Typography>
                                    </Grid>
                                </Grid>
                                <Grid item md={2.5} className="card" sx={{ mt:{md:"0px", xs:'5px'}}}>
                                    <Grid item >
                                        <AdjustIcon sx={{ height:'2em', width:'2em'}}></AdjustIcon>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="p">Balance</Typography>
                                        <Typography variant="h6">{'$2.4K'}</Typography>
                                        <Typography variant="p"  sx={{ color:'red'}}>{'^2% '}</Typography>
                                        <Typography variant="p">{'this month'}</Typography>
                                    </Grid>
                                </Grid>
                                <Grid item md={2.5} className="card" sx={{ mt:{md:"0px", xs:'5px'}}}>
                                    <Grid item >
                                        <AdjustIcon sx={{ height:'2em', width:'2em'}}></AdjustIcon>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="p">Total Sales</Typography>
                                        <Typography variant="h6">{'$89K'}</Typography>
                                        <Typography variant="p"  sx={{ color:'green'}}>{'^2% '}</Typography>
                                        <Typography variant="p">{'this month'}</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                        {/* third row */}
                        
                        {/* <Grid container md={12}> */}
                            
                            <Grid md={12} xs={12} sx={{display:{md:'flex', xs:'inline'}, alignItems:'center', justifyContent:'space-between', padding:{md:'20px',xs:'0'}, paddingTop:'10px'}}>
                                <Grid item md={7.8}  sx={{ background:'whiteSmoke', borderRadius:'10px'}}>
                                    <Grid item md={12} sx={{ display:'flex', alignItems:'center', justifyContent:'space-between', pl:'10px', pr:'10px'}}>
                                        <Grid item >
                                            <Box>
                                                <Typography variant="h6">Overview</Typography>
                                                <Typography variant="p">Monthly Earning</Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item >
                                            <Box>
                                                <Typography variant="p">Quantity</Typography>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                        <Grid item>
                                            <TickPlacementBars />
                                        </Grid>
                                </Grid>
                                <Grid item md={3.5} sx={{ borderRadius:'10px', background:'whiteSmoke', height:'300px', mt:{md:"0px", xs:'5px'}}}>
                                    <Grid item md={12} sx={{ display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'space-between', pl:'10px', pr:'10px'}}>
                                        <Grid item >
                                            <Box>
                                                <Typography variant="h6" sx={{ textAlign:'left'}}>Customers</Typography>
                                                <Typography variant="p">Customer that buy product</Typography>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                        
                                        <Grid item >
                                            <CustomPieChart />
                                        </Grid>
                                </Grid>
                            </Grid>
                        {/* </Grid> */}
                        {/* fourth row */}
                        <Grid item md={12} sx={{ padding:'20px'}}>
                            <Grid item sx={{ height:'auto', background:'yellow', borderRadius:'10px'}}>
                                <StickyHeadTable />
                            </Grid>
                        </Grid>
                        

                    </Grid>
                </Grid>
            </Box>
        </>
    )
}