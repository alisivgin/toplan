import { useState, useMemo } from 'react';
import { Stack } from '@mantine/core';

import RichText2 from 'components/RichText2';
import Message from 'components/Message';
import MessageThread from 'components/MessageThread';

interface ChatProps {}
function Chat(props: ChatProps) {
  const [value, onChange] = useState<string>('');

  return (
    <Stack>
      <RichText2 />
      <MessageThread />
    </Stack>
  );
}

export default Chat;
