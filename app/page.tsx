import React from 'react';
import Chat from './chat';

const Home: React.FC = () => {
  const chats = [
    {
      name: 'Kelvin Souza',
      image: '/clients/1.png',
      initialMessages: [
        'Olá, essa é uma mensagem automática! Responderemos em breve',
      ],
      callerName: 'Kelvin',
    },
    {
      name: 'Greicy Brandão',
      image: '/clients/2.png',
      initialMessages: ['Você precisa de mais informações sobre a vaga?'],
      callerName: 'Greicy',
    },
    {
      name: 'Ana Paula',
      image: '/clients/3.png',
      initialMessages: ['Podemos entrar em contato com você?'],
      callerName: 'Ana',
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      {chats.map((chat, index) => (
        <Chat
          key={index}
          name={chat.name}
          image={chat.image}
          initialMessages={chat.initialMessages}
          callerName={chat.callerName}
        />
      ))}
    </div>
  );
};

export default Home;
