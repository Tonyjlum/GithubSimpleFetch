import React from 'react';

const ProfileRender = ({currentUser}) => {
  return(
    <div className="profile-render">
      <h1>{currentUser.login}</h1>
      {currentUser.name && <p>Name: {currentUser.name}</p>}
      {currentUser.bio && <p>Bio: {currentUser.bio}</p>}
      {currentUser.blog && <a href={currentUser.blog} target="_blank"> Blog</a>}
      {currentUser.email && <p>Email: {currentUser.email}</p>}
      {currentUser.location && <p>Location: {currentUser.location}</p>}
      {currentUser.company && <p>Company: {currentUser.company}</p>}
      {currentUser.public_repos > 0 && <p>Public Repos: {currentUser.public_repos}</p>}
      <br/>
      <a href={currentUser.html_url} target="_blank"> Visit Github page</a>
    </div>
  )
}


export default ProfileRender;
