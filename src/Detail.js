import React from 'react';
import Typography from '@material-ui/core/Typography';

export default function Detail(props){

    const moive=props.item;
    return(
        <div style={{color:'white'}}>
        <div style={{position: 'relative', backgroundImage:`linear-gradient(rgba(17, 18, 18, 0) 0%, rgba(17, 18, 18, 0.7) 50%, rgb(17, 18, 18) 99%), url(https://image.tmdb.org/t/p/w500${moive.poster_path})` ,
        minHeight:'400px',   
        color:'white',
        
        fontWeight: '400',
            }} >
            <div style={{position:'absolute',bottom:'0'}}>
                <Typography variant='h4' >{moive.title}</Typography>
                <Typography variant='subtitle1'>release_date : {moive.release_date}</Typography>
            </div>
        </div>
        { moive.production_companies !='[]' ?
            <Typography variant ='subtitle1'>production_companies : {JSON.parse(moive.production_companies.replace(/(?<=: )None/g, 'null').replace(/'/g, '"'))[0].name }</Typography> : <></>}
        { moive.production_countries !='[]' ?
            
            <Typography variant ='subtitle1'> 
            production_countries : {JSON.parse(moive.production_countries.replace(/'/g, '"'))[0].name }</Typography>:<></>}
        { moive.genres !='[]' ?
        
        <Typography variant ='subtitle1'> 
        genres : {JSON.parse(moive.genres.replace(/'/g, '"')).map(item=>`${ item.name } |`) }</Typography>:<></>}

        <Typography variant='body1' gutterBottom >KeyWords: { moive.tagline} </Typography>
        <br />
        <Typography variant='bady1' gutterBottom > <Typography variant='h5'>overview:</Typography>  {moive.overview} </Typography>
        </div>
    );

}