import { useState, useMemo } from 'react';
import { Stack } from '@mantine/core';

import RichText from 'components/RichText';
import Message from 'components/Message';
import MessageThread from 'components/MessageThread';

interface ChatProps {}
function Chat(props: ChatProps) {
  const [value, onChange] = useState<string>('');

  return (
    <>
      {/* <RichText value={value} onChange={onChange} /> */}
      <Stack>
        <MessageThread />
      </Stack>
    </>
  );
}

export default Chat;
