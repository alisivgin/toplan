import React, { useMemo } from 'react';
import type { RichTextEditorProps } from '@mantine/rte';
import RichTextEditor from './MantineRTE';

import useStyles from './RichText.style';

export default function RichText(props: RichTextEditorProps) {
  const { classes } = useStyles();

  const modules = useMemo(
    () => ({
      // history: { delay: 2500, userOnly: true },
      // syntax: true,
    }),
    [],
  );
  return (
    <RichTextEditor
      controls={[
        ['bold', 'italic', 'strike'],
        ['link', 'image', 'video'],
        ['unorderedList', 'orderedList', 'blockquote'],
      ]}
      modules={modules}
      {...props}
    />
  );
}
