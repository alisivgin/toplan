import { useState, useMemo } from 'react';

import RichText from 'components/RichText';
import Message from 'components/Message';

interface ChatProps {}
function Chat(props: ChatProps) {
  const [value, onChange] = useState<string>('');

  return (
    <>
      {/* <RichText value={value} onChange={onChange} /> */}
      <Message />
      <Message />
      <Message />
      <Message />
    </>
  );
}

export default Chat;
