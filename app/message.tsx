import React from 'react';

interface MessageProps {
  content: string;
  received: boolean;
  callerName?: string;
}

const getAvatarIcon = (callerName: string): JSX.Element | undefined => {
  const avatarIcons: Record<string, JSX.Element> = {
    Kelvin: (
      <img
        alt="Client"
        height="40"
        style={{ aspectRatio: '40/40', objectFit: 'cover' }}
        width="40"
        src="/clients/1.png"
      />
    ),
    Greicy: (
      <img
        alt="Client"
        height="40"
        style={{ aspectRatio: '40/40', objectFit: 'cover' }}
        width="40"
        src="/clients/2.png"
      />
    ),
    Ana: (
      <img
        alt="Client"
        height="40"
        style={{ aspectRatio: '40/40', objectFit: 'cover' }}
        width="40"
        src="/clients/3.png"
      />
    ),
  };

  return avatarIcons[callerName];
};

const Message: React.FC<MessageProps> = ({ content, received, callerName }) => {
  const messageStyle = received
    ? 'rounded-lg bg-gray-100 p-4 text-sm max-w-[85%] self-start'
    : 'flex rounded-lg border p-4 text-sm w-full';

  const avatarIcon = callerName ? getAvatarIcon(callerName) : undefined;

  return (
    <div className="flex gap-4">
      {!received && avatarIcon && (
        <div className="flex items-center">{avatarIcon}</div>
      )}
      <div className={messageStyle}>
        <div>{content}</div>
      </div>
    </div>
  );
};

export default Message;
