/**
=========================================================
* Argon Dashboard 2 MUI - v3.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-material-ui
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { alpha } from '@mui/material';
import pxToRem from './pxToRem';

/**
  The boxShadow() function helps you to create a box shadow for an element
 */

// Argon Dashboard 2 MUI helper functions

function boxShadow(offset = [0, 0], radius = [0, 0], color = '', opacity = 0, inset = '') {
  const [x, y] = offset;
  const [blur, spread] = radius;

  return `${inset} ${pxToRem(x)} ${pxToRem(y)} ${pxToRem(blur)} ${pxToRem(spread)} ${alpha(
    color,
    opacity,
  )}`;
}

export default boxShadow;
