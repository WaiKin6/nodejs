import React from 'react';
import {Link} from 'umi';
import styles from './index.less';

export default () => {
  return (
    <div>

      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      
    </div>
  );
}
