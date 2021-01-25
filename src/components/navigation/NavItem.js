/**
 * Copyright 2018-2020 Cargill Incorporated
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '@material-ui/core/Icon';

export const NavItem = props => {
  let { path, logo, label } = props;
  path = `"${path}#${label}"`;

  const classes = classnames('nav-tab', {
    'page-active': path === `/${window.location.pathname.split('/')[1]}`
  });
  console.log(path);

  return (
    <a href={path} className={classes}>
      <div id = {label} className="icon"><Icon>{logo}</Icon></div>
      <div className="label">{label}</div>
    </a>
  );
};

NavItem.propTypes = {
  label: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired
};
