import React, { Fragment } from 'react';

export const FormatNumbers = (props) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'AUD',
    minimumFractionDigits: 2,
  });
  return (
    <Fragment>
      {props.value == null ? '-' : formatter.format(props.value)}
    </Fragment>
  );
};