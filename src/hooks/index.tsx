import React from 'react';

import { AuthUser } from './auth';

const AppGame: React.FC = ({ children }) => (
  <AuthUser>{ children }</AuthUser>
);

export default AppGame;