import React from 'react';
import Avatar from '@mui/material/Avatar';
import completion from"../completion.jpg";
import "./Certification.css";
import { IconButton } from '@mui/material';

const Certification = () => {
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
<div className="com">
  <img src={completion} alt="Certificate" height={700} width={1100}></img>
</div>
<div className="new">
  <h1>Eligibility Creteria:</h1>
  <h2>
  The certification eligibility criteria for an online tutoring platform can vary depending on the specific requirements and standards set by the platform. 
  However, here are some common eligibility criteria that online tutoring platforms may consider for certifying tutors:
  <br></br>1. Assessment score should be above 60%
  <br></br>2. The user must complete the selected course in the given duration or at any time.
  </h2>
</div>

	</div>
);
};

export default Certification;
