// Create a separate component which will load RichTextEditor only in browser
import React from 'react';
import type { RichTextEditorProps } from '@mantine/rte';

export default function MantineRTE(props: RichTextEditorProps) {
  if (typeof window === 'undefined') return null;
  // eslint-disable-next-line import/extensions, global-require
  const { RichTextEditor } = require('@mantine/rte');
  return <RichTextEditor {...props} />;
}
