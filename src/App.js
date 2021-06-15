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
    margin:10
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  video:{
      height: '300px',
        borderRadius:'20px'
    },
  dateg:{
        marginTop:'px'
  }
}));

export default function App() {
  const classes = useStyles();
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [age, setAge] = React.useState('');

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
          
        <Grid item xs={12}>

        <ReactVideo
                src={video}
                poster="https://www.example.com/poster.png"
                primaryColor="red"
                className={classes.video}
                
                // other props
            />        </Grid>
        <Grid item xs={12} >
        <p style={{marginTop:'1%',height:'5px'}}>Select Date</p>
        </Grid>
        <Grid className={classes.dateg} item xs={12} sm={4}>
        <form  noValidate>
      <TextField
        id="date"
        type="date"
        variant = 'filled'
        style={{width:'92%'}}
        
        defaultValue="2017-05-24"
        className={classes.datef}
        // InputLabelProps={{
            //   shrink: true,
            // }}
            />
    </form>        </Grid>
        <Grid className={classes.dateg} item xs={12} sm={4}>
        <form  noValidate style={{}}>
      <TextField
        id="date"
        type="date"
        variant = 'filled'
        // style={{marginRight:'60px'}}
        style={{width:'92%'}}

        defaultValue="2017-05-24"
        className={classes.datef}
        // InputLabelProps={{
            //   shrink: true,
            // }}
            />
    </form>        </Grid>
    <Grid xs={12} sm={2}>

    </Grid>
    <Grid xs={12} sm={2}>

    </Grid>
    <Grid  item xs={12}  > 
        <FormControl className={classes.drop} style={{width:'100%'}} >
        <InputLabel htmlFor="age-native-simple"></InputLabel>
        <Select autosize={true} native
            value={10}
            onChange={handleChange}
            width='100%'
            variant='outlined'
            
            >
          <option aria-label="None" value="" />
          <option value={10} style={{textDecoration:'bold'}}> میرے ریفرلز </option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
      </FormControl>
      </Grid>
      <Grid xs={12} sm={6} >

<Paper className={classes.rootpaper} style={{backgroundColor:'lightpink',width:'96%',height:'130px',borderRadius:'10px'}}>

{/* <Typography variant="body2" style={{textAlign:'center'}} component="p"> */}
 <p style={{textAlign:'center',paddingTop:'30px',fontSize:'25px' }}> <b>    3 <br/>  غیر تصدیق شدہ بکنگ </b></p>
{/* <p style={{textAlign:'center'}}> غیر تصدیق شدہ بکنگ */}
{/* </p> */}
{/* </Typography> */}

</Paper>
</Grid>
<Grid xs={12} sm={6}>
        <Paper className={classes.rootpaper} style={{borderRadius:'10px',backgroundColor:'lightgreen',width:'96%',height:'130px',borderRadius:'10px' ,marginLeft:'20px'}}>
        
        {/* <Typography variant="body2" style={{textAlign:'center'}} component="p"> */}
       <div style={{marginTop:'1%'}}>
         
         <p style={{textAlign:'center',paddingTop:'30px',borderRadius:'2px',fontSize:'25px'}}> <b>   1 <br/>تصدیق شدہ بکنگ </b></p>
       <p style={{textAlign:'center'}}> 
       </p>
       </div>
        {/* </Typography> */}
      
    </Paper>

    </Grid>
    <Grid xs={12}  style={{}}>
            <Paper  style={{backgroundColor:'gold',height:'130px',borderRadius:'10px',marginRight:'10px'}}>
        
        {/* <Typography variant="body2" style={{textAlign:'center'}} component="p"> */}
         <p style={{textAlign:'center',paddingTop:'30px',borderRadius:'2px',fontSize:'25px'}}> <b>
                0 <br/> میری کل کمائ
             </b> 
                </p>
       {/* <p style={{textAlign:'center'}}>  */}

       {/* </p> */}
        {/* </Typography> */}
      
    </Paper>
    <p style={{textAlign:'center',fontSize:'20px'}}>
        Showing Results From 5th May 2021 to 4th June 2021
    </p>
        </Grid>
        
      </Grid>
    </div>
  );
}

