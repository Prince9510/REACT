/* eslint-disable no-unused-vars */
import React from 'react';
import { useLocation } from 'react-router';

export default function Dashboard() {
  const location = useLocation();
  return (
    <div>
      <h1>Dashboard</h1>
      <br /><br />
      <div>
        <h3>{location.state.name}</h3>
      </div>
    </div>
  );
}
