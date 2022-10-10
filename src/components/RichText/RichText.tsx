import React from 'react';
import { Plate, TEditableProps } from '@udecode/plate';
import { Toolbar } from './Toolbar';
import BasicMarkToolbarButtons from './BasicMarkToolbarButtons';

import useStyles from './RichText.style';

export default function RichText() {
  const { classes } = useStyles();

  const editableProps: TEditableProps = {
    placeholder: 'Type...',
  };

  return (
    <>
      <Plate editableProps={editableProps} />
      <Toolbar>
        <BasicMarkToolbarButtons />
      </Toolbar>
    </>
  );
}
