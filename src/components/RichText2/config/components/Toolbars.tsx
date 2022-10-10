import 'tippy.js/animations/scale.css';
import 'tippy.js/dist/tippy.css';
import { CodeAlt } from '@styled-icons/boxicons-regular/CodeAlt';
import { FormatBold } from '@styled-icons/material/FormatBold';
import { FormatItalic } from '@styled-icons/material/FormatItalic';
import { FormatStrikethrough } from '@styled-icons/material/FormatStrikethrough';
import { FormatUnderlined } from '@styled-icons/material/FormatUnderlined';
import { TippyProps } from '@tippyjs/react';

import {
  BalloonToolbar,
  getPluginType,
  MARK_BOLD,
  MARK_CODE,
  MARK_ITALIC,
  MARK_UNDERLINE,
  MARK_STRIKETHROUGH,
  ImageToolbarButton,
  LinkToolbarButton,
  MarkToolbarButton,
} from '@udecode/plate';
import { Link } from '@styled-icons/material/Link';
import { Image } from '@styled-icons/material/Image';
import { useMyPlateEditorRef } from '../typescript';

export const BasicMarkToolbarButtons = () => {
  const editor = useMyPlateEditorRef()!;

  return (
    <>
      <MarkToolbarButton
        type={getPluginType(editor, MARK_BOLD)}
        icon={<FormatBold />}
      />
      <MarkToolbarButton
        type={getPluginType(editor, MARK_ITALIC)}
        icon={<FormatItalic />}
      />
      <MarkToolbarButton
        type={getPluginType(editor, MARK_UNDERLINE)}
        icon={<FormatUnderlined />}
      />
      <MarkToolbarButton
        type={getPluginType(editor, MARK_STRIKETHROUGH)}
        icon={<FormatStrikethrough />}
      />
      <MarkToolbarButton
        type={getPluginType(editor, MARK_CODE)}
        icon={<CodeAlt />}
      />
    </>
  );
};

export const MarkBallonToolbar = () => {
  const editor = useMyPlateEditorRef()!;

  const arrow = false;
  const theme = 'dark';
  const tooltip: TippyProps = {
    arrow: true,
    delay: 0,
    duration: [200, 0],
    hideOnClick: false,
    offset: [0, 17],
    placement: 'top',
  };

  return (
    <BalloonToolbar
      popperOptions={{
        placement: 'top',
      }}
      theme={theme}
      arrow={arrow}
    >
      <MarkToolbarButton
        type={getPluginType(editor, MARK_BOLD)}
        icon={<FormatBold />}
        tooltip={{ content: 'Bold (⌘B)', ...tooltip }}
      />
      <MarkToolbarButton
        type={getPluginType(editor, MARK_ITALIC)}
        icon={<FormatItalic />}
        tooltip={{ content: 'Italic (⌘I)', ...tooltip }}
      />
      <MarkToolbarButton
        type={getPluginType(editor, MARK_UNDERLINE)}
        icon={<FormatUnderlined />}
        tooltip={{ content: 'Underline (⌘U)', ...tooltip }}
      />
    </BalloonToolbar>
  );
};

export const ToolbarButtons = () => (
  <>
    <BasicMarkToolbarButtons />
    <LinkToolbarButton icon={<Link />} />
    <ImageToolbarButton icon={<Image />} />
  </>
);
