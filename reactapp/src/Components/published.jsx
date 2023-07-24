import React from 'react'
import Avatar from '@mui/material/Avatar';
import "./All.css";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';

export default function Publish() {
    const Navigate = useNavigate();
    const eventNavigate=()=>{
        Navigate("/declaration")
    }
    const newNavigate=()=>{
      Navigate("/perl")
    }
    const oldNavigate=()=>{
      Navigate("/c++");
    }

  return (
    <div>
          <ul>
  <li><a class="active" href="/profile">profile</a></li>
  {/* <li><a href="/sessions">Sessions</a></li> */}
  <li><a href="/materials">Materials</a></li>
  <li><a href="/blogs">About</a></li>
  <li><a href="/certification">Certification</a></li>
  <li><a href="/course">Courses</a></li>
  <li><a href="/logout">Logout</a></li>
  <div className="doubt">
  <li>
    <IconButton>
  <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        sx={{ width: 47, height: 47 }}
      />
      </IconButton>
  </li>
  </div>
</ul>
<div className="text">
<h1>
  COURSES
</h1>
</div>
<div className="move">
<ul>
  <li><a class="active" href="/all">All</a></li>
  <li><a href="/published">Published</a></li>
  {/* <li><a href="/draft">Sechdule</a></li> */}
  <div className="doubt">
  <li>
    </li>
    </div>
    </ul>
	</div>
    <div className="some">
    <Card sx={{ maxWidth: 345,boxShadow:'0px 8px 8px' }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         PERL
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Perl is a high-level, interpreted programming language that was originally developed by Larry Wall in the late 1980s. 
          Perl stands for "Practical Extraction and Reporting Language," emphasizing its original purpose of text processing and manipulation.
         However, Perl has evolved over time and is now used for a wide range of tasks, including system administration, web development, and data analysis.

        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={newNavigate}>Start</Button>
        <Button size="small">Duration:17hr</Button>
      </CardActions>
    </Card>
        </div>
        <div className="some2">
        <Card sx={{ maxWidth: 345,boxShadow:'0px 8px 8px' }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          JAVA
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Java is a high-level, object-oriented programming language that was developed by Sun Microsystems (now owned by Oracle) in the mid-1990s. 
        It is widely used for building a variety of applications, 
        ranging from web and desktop applications to mobile apps and enterprise systems
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={eventNavigate}>Start</Button>
        <Button size="small">Duration:10hr</Button>
      </CardActions>
    </Card>
  </div>
  <div className="some3">
  <Card sx={{ maxWidth: 345,boxShadow:'0px 8px 8px' }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         C++
        </Typography>
        <Typography variant="body2" color="text.secondary">
        C++ is a general-purpose, compiled programming language that was developed as an extension of the C programming language. 
        It was created by Bjarne Stroustrup in the early 1980s and has since become widely used in various domains. 
        Here are some key aspects of C++
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={oldNavigate}>Start</Button>
        <Button size="small">Duration:17hr</Button>
      </CardActions>
    </Card>
  </div>
        </div>
        
  )
}
