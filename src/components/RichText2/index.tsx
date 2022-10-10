import { useRef } from 'react';
import {
  createPlateUI,
  HeadingToolbar,
  MentionCombobox,
  Plate,
  createAlignPlugin,
  createBlockquotePlugin,
  createBoldPlugin,
  createCodeBlockPlugin,
  createCodePlugin,
  createHeadingPlugin,
  createHighlightPlugin,
  createImagePlugin,
  createItalicPlugin,
  createLinkPlugin,
  createListPlugin,
  createParagraphPlugin,
  createStrikethroughPlugin,
  createUnderlinePlugin,
  createComboboxPlugin,
  createMentionPlugin,
  PlateEventProvider,
  ELEMENT_CODE_BLOCK,
  StyledElement,
} from '@udecode/plate';
import {
  MarkBallonToolbar,
  ToolbarButtons,
} from './config/components/Toolbars';
import { withStyledPlaceHolders } from './config/components/withStyledPlaceHolders';
import { MENTIONABLES } from './config/mentionables';
import { CONFIG } from './config/config';
import { createDragOverCursorPlugin } from './config/plugins';

import { createMyPlugins, MyValue } from './config/typescript';

const id = 'Richtext';

let components = createPlateUI({
  // [ELEMENT_EXCALIDRAW]: ExcalidrawElement,
  [ELEMENT_CODE_BLOCK]: StyledElement,
  // customize your components by plugin key
});
components = withStyledPlaceHolders(components);

const plugins = createMyPlugins(
  [
    createParagraphPlugin(),
    createBlockquotePlugin(),
    createHeadingPlugin(),
    createImagePlugin(),

    createLinkPlugin(),
    createListPlugin(),

    createCodeBlockPlugin(),
    createAlignPlugin(CONFIG.align),
    createBoldPlugin(),
    createCodePlugin(),
    createItalicPlugin(),
    createHighlightPlugin(),
    createUnderlinePlugin(),
    createStrikethroughPlugin(),
    createDragOverCursorPlugin(),
    createComboboxPlugin(),
    createMentionPlugin(),
  ],
  {
    components,
  },
);

const RichText2 = () => {
  const containerRef = useRef(null);

  return (
    <>
      <PlateEventProvider>
        <ToolbarButtons />
      </PlateEventProvider>

      <div ref={containerRef} style={{ position: 'relative' }}>
        <Plate id={id} editableProps={CONFIG.editableProps} plugins={plugins}>
          <MarkBallonToolbar />

          <MentionCombobox items={MENTIONABLES} />
        </Plate>
      </div>
    </>
  );
};
export default RichText2;
