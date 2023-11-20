import React from 'react';
import Email from './Email';
import Name from './Name';
import Address from './Address';
import PersonalInfo from './PersonalInfo';
import '../Css/profile.css'

const Profile = () =>{
  return (
    <div className='profile'>
      <h1>User Profile</h1>
      <Email />
      <Name />
      <Address />
      <PersonalInfo /> </div>
  );
};
export default Profile;
