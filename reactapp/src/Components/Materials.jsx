import React from 'react';
import "./Dashboard.css";
import Avatar from '@mui/material/Avatar';
import "./Materials.css";
import { IconButton } from '@mui/material';

const Materials = () => {
return (
    <div>
  <ul>
  <li><a class="active" href="/profile">profile</a></li>
  {/* <li><a href="/sessions">Sessions</a></li> */}
  <li><a href="/materials">Materials</a></li>
  <li><a href="/blogs">About</a></li>
  <li><a href="/certification">Certification</a></li>
  <li><a href="/course">Courses</a></li>
  <li><a href="/">Logout</a></li>
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
<center>
  <div className="hoe">
	<h1><a href="https://www.cse.iitb.ac.in/~cs101/lectures/Lec1.pdf">C++</a></h1>
  <br></br>
  <h1><a href="https://www.iitk.ac.in/esc101/share/downloads/javanotes5.pdf">JAVA</a></h1><br></br>
  <h1><a href="https://static.realpython.com/python_cheat_sheet_v1.pdf">PYTHON</a></h1><br></br>
  </div>
  </center>
  </div>

);
};

export default Materials;