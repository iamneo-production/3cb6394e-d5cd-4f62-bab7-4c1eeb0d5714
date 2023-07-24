import React from 'react';
import "./Dashboard.css";
import Avatar from '@mui/material/Avatar';
import { Icon, IconButton } from '@mui/material';
const navbar= () =>{
  return (
  <div>
    <div className="shallo">
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
      <div class="wrapper">
	<svg>
		<text x="50%" y="50%" dy=".35em" text-anchor="middle">
			Online Tutoring platform
		</text>
	</svg>
</div>
<div>

</div>
    </div>
  </div>
  );
}
export default navbar;