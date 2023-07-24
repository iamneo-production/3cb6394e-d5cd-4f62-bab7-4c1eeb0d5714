import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { Translate } from '@mui/icons-material';

function CourseDec() {
    const reviewContainerStyle = {
        marginTop: '50px',
        marginLeft: '350px',
        marginRight: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    };

    const reviewStyle = {
        border: '1px solid #ccc',
        borderRadius: '5px',
        padding: '10px',
        marginBottom: '10px',
        backgroundColor: '#f7f7f7',
        width: '1200px',
        height: '700px',
        boxShadow: '8px 8px 8px',
        transition: 'box-shadow 0.3s ease',
        transform:'Translate(-9%,2%)',
    };
    const titleStyle = {
        fontSize: '50px',
        lineHeight: '1.5',
        margin: '20px',
        textAlign: 'center',

    };
const ImgStyle = {

    margin: '20px',
    textAlign: 'center',

};
const textStyle={
    fontSize:'30px'
}
const but2={
   transform:'Translate(40%,-70%)',

}
const but3={
    transform:'Translate(-37%,0%)',
}

const Navigate = useNavigate();
const eventNavigate=()=>{
    Navigate("/payment")
}

const newNavigate=()=>{
    Navigate("/all")
};

    return (
        <div>
            <h1>
                WellDone!You have Selected JAVA.
            </h1>
        <div style={reviewContainerStyle}>
            <div style={reviewStyle}>
                <h1 style={titleStyle}>COURSE DESCRIPTION</h1>
                <br></br><br></br>
                <div style={textStyle}>
                <p> Become an ace in Java Programming Language and master the java programming skills from basics to advanced. This course is a complete package of videos, notes & contests from basics to STL libraries & algorithms. The perfect Java course for beginners.</p>
                </div>
                <br></br>
                <div style={ImgStyle}>
                    <img src="https://banner2.cleanpng.com/20181122/krs/kisspng-java-programming-language-selenium-computer-softwa-july-2-16-halab-4-dev-5bf78387a7bb41.028192901542947719687.jpg" width="250px" height="200px" />
                    <br></br><br></br><br></br>
               
                     <div style={but3}>
                            <Button variant="contained"  onClick={eventNavigate}>ENROLL COURSE</Button>
                            </div>
                            <div style={but2}>
                            <Button variant="contained"  onClick={newNavigate}>Back</Button>
                            </div>
                       
                     
                </div>
            </div>
        </div>
        </div>
    )
}

export default CourseDec;