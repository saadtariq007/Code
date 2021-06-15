import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Card from '@material-ui/core/Card';
import aa from './aa.jpeg'
import { useTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {  withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import DateFnsUtils from '@date-io/date-fns'; 

const BootstrapInput = withStyles((theme) => ({
 
 
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
    datep1: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    datef: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },

  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    width: 800,
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width:'80%',
    marginLeft: '10%',
    backgroundColor: '#EAF0ED'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    
  
  },
  margin:{ 
    margin: theme.spacing(1),
  },
    vi :{
    textAlign:'center',
    height: '30%',
    color:'red',
    backgroundColor:'blue',
    justifyContent:'center',
    justifyItems:'center',
    alignItems: 'center'

  },
  date1:{
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    justifyContent: 'center',
    width: '90%',
    alignItems:'center',
    listStylePosition:'underline'

  },
  textField:{
    colors:' blue',
    backgroundColor:'grey',
    focus:true
  },
  v2:{
    width:'100%',
  }
  
  
}));



export default function CSSGrid() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  // const [selectedDate, handleDateChange] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());
  //  const  ExampleCustomInput = (value) => {
  //   <button className="example-custom-input">
  //     {value}
  //   </button>
  // }
  
  return (
    <div >
    <Grid container spacing={2} className={classes.v2}>

      <Grid  item xs={12} className={classes.vi}>
      hcsdcnda
        <br/>
        sdcd
        sdcsd
        <img src={aa} alt ='sadsxaxss' />
      </Grid>
      <Grid item xs={12} sm={5} justify='flex-start'>
      <form className={classes.datep1} noValidate>
      <TextField
        id="date"
        label="Birthday"
        type="date"
        defaultValue="2017-05-24"
        className={classes.datef}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>

      </Grid>
      <Grid item xs={12} sm={4} style={{'align-items-xs-center'}}>
      <form className={classes.datep1} noValidate>
      <TextField
        id="date"
        label="Birthday"
        type="date"
        defaultValue="2017-05-24"
        className={classes.datef}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
      </Grid>
      <Grid item xs={12} sm={2}>
        <Paper className={classes.paper}></Paper>
      </Grid>
      <Grid item xs={12} sm={2}>
        <Paper className={classes.paper}>xs=12 sm=6</Paper>
      </Grid>
      <Grid item xs={12} >
        <Paper className={classes.paper}>
        <FormControl className={classes.margin} >
        <InputLabel id="demo-customized-select-label">Age</InputLabel>
        <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          value={age}
          onChange={handleChange}
          input={<BootstrapInput />}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
        </Paper>
      </Grid>
      
    </Grid>
  </div>
  );
}
