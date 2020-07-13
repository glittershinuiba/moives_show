
import React, { useState, useEffect } from 'react';
import Movie from './Moive';

import { makeStyles } from '@material-ui/core/styles';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function Showmovies(props) {


  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'block',
      position: 'relative',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.primary.paper,
    },

    gridList: {
      display: '',
      overflow: 'hidden',
      flexWrap: 'nowrap',
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)',
    },
    title: {
      color: theme.palette.primary.light,
    },
    titleBar: {
      background:
        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },

  }));
  const classes = useStyles();


  return (


    <div className={classes.root}>

      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite={false}
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024
            },
            items: 6,
            partialVisibilityGutter: 40
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0
            },
            items: 1,
            partialVisibilityGutter: 30
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464
            },
            items: 2,
            partialVisibilityGutter: 30
          }
        }}
        showDots={false}
        sliderClass=""
        slidesToSlide={6}
        swipeable
      >


        {props.data.map((item, index) => {

          if (index > 18) {
            return;
          }
          return (<Movie item={item}></Movie>)

          })
        }
      </Carousel>


    </div>
  );
}
export default Showmovies;





/* if (index >= itemIndex)
  return (
    <Slide direction="right" in={Checked} mountOnEnter unmountOnExit>

      <GridListTile >

        <Movie item={item}></Movie>

      </GridListTile>

    </Slide>)
else {
  if (itemIndex + index > props.data.length) {
    setitemIndex(0);
  }
  return (
    <Slide direction="left" in={Checked} mountOnEnter unmountOnExit>
      <GridListTile >

        <Movie item={props.data[index + itemIndex]}></Movie>


      </GridListTile>
    </Slide>)
}
 */