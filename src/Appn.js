import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import aa from './aa.jpeg'
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
import {  withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { ReactVideo } from "reactjs-media";
import video from './video.mp4'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import logo from'./logo.svg'
import down from'./down.png'
import NativeSelect from '@material-ui/core/NativeSelect';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '80%',
    marginLeft:'2%'
    
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height:'80%'
  },
  drop:{
      justifyContent:'flex-start',
    alignContent:'flex-start',
    alignItems:'flex-start',
    // marginLeft:'8%',
      
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  formControl: {
    // margin: theme.spacing(1),
    // width:  300,
    // width: '100%'
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  rootpaper:{
    // minWidth: 200,
    height:'70%',
    alignContent:'center',
    alignItems:"center",
    width:'90%',
    // margin:'1px',


  },
  dat:{
    marginTop:'20px'
},
you:{
    width:'300px',
    height:'200px',
    marginLeft:'10',
    marginTop:'10px'
}
}));
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
        width: 160,
        
      },
      aa:{
        margin:'1px',
        padding: '2px'
      }
     
  
    },
    input: {
      borderRadius: 4,
      
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      maxWidth: 1160,
      minWidth:500,
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

export default function AutoGrid() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const bull = <span className={classes.bullet}>•</span>;

  const handleChange = (event) => {
    setAge(event.target.value);
  };

//   const handleChange = (event) => {
//     const name = event.target.name;
//     setState({
//       ...state,
//       [name]: event.target.value,
//     });
//   };
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} >
          <div >

          <ReactVideo
                src={video}
                poster="https://www.example.com/poster.png"
                primaryColor="red"
                className={classes.you}
                // other props
            />
            </div>
        
        </Grid>
        
      </Grid>
      <Grid container spacing={2} className={classes.dat}>
        <Grid item xs={12} sm={4}  >
          {/* <Paper className={classes.paper}> */}

          <form  noValidate>
      <TextField
        id="date"
        type="date"
        variant = 'filled'
        
        
        defaultValue="2017-05-24"
        className={classes.datef}
        // InputLabelProps={{
            //   shrink: true,
            // }}
            />
    </form>
          {/* </Paper> */}
        </Grid>
        <Grid item xs={12} sm={4} >
          {/* <Paper className={classes.paper}> */}

      <TextField
        id="date"
        type="date"
        defaultValue="2017-05-24"
        className={classes.datef}
        variant = 'filled'
        // InputLabelProps={{
            //   shrink: true,
            // }}
            />
            
    
          {/* </Paper> */}
        </Grid>

        <Grid item xs={12} sm={2}>
        <img src={down} style={{width:'80px',marginLeft:'100px',height:'60px'}}/> 
    </Grid>
        
        
        
        <Grid Container spacing={1} >
        <Grid  item xs={12} sm={6} > 
        <FormControl className={classes.drop} >
        <InputLabel htmlFor="age-native-simple">Age</InputLabel>
        <Select autosize={true} native
            value={10}
            onChange={handleChange}
            width='100%'
            >
          <option aria-label="None" value="" />
          <option value={10}>میرے ریفرلز</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
      </FormControl>

        {/* <FormControl >

        <InputLabel id="demo-customized-select-label">Age</InputLabel>
        
        <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          MenuProps={{
              anchorOrigin:{
                vertical: 'bottom', horizontal: 'center'
                //   vertical:'bottom',
                //   horizontal:'left'
              },
              transformOrigin: {
                vertical: "top",
                horizontal: "center"
              },
              anchorPosition:{
                  left:10
              },
              anchorEl:{
                
              }
             
          }}
          
          
          value={10}
          onChange={handleChange}
          input={<BootstrapInput />}
          
          
          >
          <MenuItem value="میرے ریفرلز
">
            <em>میرے ریفرلز
</em>
          </MenuItem>
          <MenuItem selected value={10}>میرے ریفرلز</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
    </FormControl> */}
            </Grid>
        </Grid>
        <Grid container >
        <Grid xs={6} sm={5} style={{marginTop:'3px'}}>

        <Paper className={classes.rootpaper} style={{backgroundColor:'lightpink'}}>
        
        {/* <Typography variant="body2" style={{textAlign:'center'}} component="p"> */}
         <p style={{textAlign:'center' }}>    3</p>
       <p style={{textAlign:'center'}}> غیر تصدیق شدہ بکنگ
       </p>
        {/* </Typography> */}
      
    </Paper>
        </Grid>
        <Grid xs={6} sm={5}>
        <Paper className={classes.rootpaper} style={{backgroundColor:'lightgreen'}}>
        
        {/* <Typography variant="body2" style={{textAlign:'center'}} component="p"> */}
       <div>
         
       </div>
         <p style={{textAlign:'center'}}>    1</p>
       <p style={{textAlign:'center'}}> تصدیق شدہ بکنگ
       </p>
        {/* </Typography> */}
      
    </Paper>

    </Grid>
    

        </Grid>
            <Grid xs={11}  style={{}}>
            <Paper  style={{backgroundColor:'gold'}}>
        
        {/* <Typography variant="body2" style={{textAlign:'center'}} component="p"> */}
         <p style={{textAlign:'center'}}>    0</p>
       <p style={{textAlign:'center'}}> 
       میری کل کمائ

       </p>
        {/* </Typography> */}
      
    </Paper>
    <p style={{textAlign:'center'}}>
        Showing Results From 5th May 2021 to 4th June 2021
    </p>
        </Grid>
      </Grid>
    </div>
  );
}
// تصدیق شدہ بکنگ
