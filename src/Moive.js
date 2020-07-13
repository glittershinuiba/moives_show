import React from 'react';
import StarRateIcon from '@material-ui/icons/StarRate';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Icon } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { yellow } from '@material-ui/core/colors';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  


function Moive(props){
    var moive=props.item;
    const useStyles = makeStyles({
        root: {
          maxWidth:180,
          backgroundColor:'rgb(26,26,26)',
          color:'white',
          
        },
        conent:{
            display:'flex',
            
            alignItems: 'center',
            minHeight: '1.5rem',
            
        }
      });
    const classes = useStyles();
    const img="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAANlBMVEXf39+goKDi4uKdnZ2np6e4uLjU1NSamprOzs7KysrExMTj4+PBwcHc3NyoqKiioqKwsLC0tLSjj0KtAAADSklEQVR4nO2b2WKqMBBAA0EjAkL//2fLIMuAigsXeh3OebAVQiWnM9kkrihcITih0HRvhzPqZ/Nb+6IuHA6P3riW27/XnR7KTI/oGxofvHfLo3PdBcM9uQnXgzeHYZcQBzgAAAAAAACAeZg34kDAAQAAaOgXcCDgAAcCDgCgg/YABwIOcCDgAAcCDnAg4AAHAg5wIOAABwIOAABAQ7+AAwEHOBBwgAMBBzgAAIAx9As4EFZ3EC9n7VtcnfywmG+P1TgJfiHh+NeVWEic+GghNhwsCILagTfhoPq8LdjCwdrtjTjwp+zTLiHzVhykH3dvMQ6sOIiuDorj2zhrDs7hXUpnzsHb44QkxsHFsIMy8sFH4akTiQO3hYO1uePA+0Ndq+Jc+nkNjYPIqINj21X+7MaBnzjoFbjsMiuhywUTc6aRA3/I+pNFeOYgtulA1Si77MpB3DtQ4+b4MJcMdh1E2kG+TwdejUj+kzjYfIzkU3WyVFUukwcODI4Tkz4Z4lSFgf85edMOnB4fdJ1jfNSVDmk2WX417CDyVZHVDYREgY6DOizCXhzUUyZf5edDOfqv+yqbrsNvNmf6gzhoqjyZL/mQumkgbDZf+CMHE8prlxmPuoadOWhSYRoIF+O5MCVcl55HgWBsHck9jYO2tB48b+ZgbV5cT6zaMcNRJYOh+cIrDvoBdKaSwZyDeMaB96EvrpJhPw588FU6tEpqaWknDuqhUi1AfxtZTxr81g42+871jgMfqtRNHrlSyWBovvDAQSMgu71gSAZjDtyNA58UdwQ43TMYcnB/zpQ8vCCftgdGHTxWoJJhMwdrczcX6kR4fEWfDKYdzEWBmjxadjCvoA6EVoK5dSQ1RnqioJdgbg0lzrvnlp8qaNJBClpz4E55yyufmEnps61ckNpcNyK8uBtBijXFbTn47HIbDhY9p2rneeX89DFWHNRzRMV4j0q43eaijwUb/cLifSw4sLCWVpXJQspvd8D+xu/g2/dP/gtwgAMBBzgQcIADAQc4EHCAAwEHOBBwgAMAABhDv4ADAQc4EHCAAwEHOACAAdoDHAg4wIGAAxwIOMCBgAMcAMAA7QEOBBzgQMABDgQcAAAAAADAI5gv4AAAen4BZVMuzK5mga8AAAAASUVORK5CYII="
    const showDetail=()=>{
        return(
        <div>
            <h2>{moive.title}</h2>
        </div>
        )
    }

    return(
    <Link to={`/${moive.title}`} style={{textDecoration:'none'}} >
        <Card className={classes.root}>
            <CardActionArea>

                { moive.poster_path == ''?
                    
                    <CardMedia component="img" height="240" image={ img} alt="without pig" ></CardMedia> :
                
                <CardMedia component="img" height="240" image={'https://image.tmdb.org/t/p/w500' + moive.poster_path} alt="without pig" ></CardMedia>}
                <CardContent >
                    <div className={classes.conent}>
                    <StarRateIcon  style={{ color: yellow[500]  }}></StarRateIcon>{moive.vote_average}</div>
                    <Typography align='left' style={{height: '3rem'}}>{moive.title}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                
                <Button color="primary" onClick={showDetail} >Detail</Button>
                
            </CardActions>
        </Card>
        </Link>
    );
}

export default Moive;