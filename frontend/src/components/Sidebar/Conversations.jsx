
import React from 'react';
import Conversation from "./Conversation";
import useGetConversations from '../../hooks/useGetConversations';

const Conversations = () => {
  const { loading, conversations } = useGetConversations();

  return (
    <div className='flex flex-col overflow-auto'>
      {Array.isArray(conversations) && conversations.length > 0 ? (
        conversations.map((conversation, idx) => (
          <Conversation
            key={conversation._id}
            conversation={conversation}
            lastIdx={idx === conversations.length - 1}
          />
        ))
      ) : (
        !loading && <div>No conversations found.</div>
      )}
      {loading && <span className='loading loading-spinner mx-auto'></span>}
    </div>
  );
};

export default Conversations;

// import React from 'react';
// import Conversation from "./Conversation";
// import useGetConversations from '../../hooks/useGetConversations';

// const Conversations = () => {
//   const { loading, conversations } = useGetConversations();
//   console.log("CONVERSATION:", conversations);

//   return (
//     <div className='flex flex-col overflow-auto'>
//       {conversations.map((conversation, idx) => (
//         <Conversation
//           key={conversation._id}
//           conversation={conversation}
//           lastIdx={idx === conversations.length - 1}
//         />
//       ))}
//       {loading ? <span className='loading loading-spinner mx-auto'></span> : null}
//     </div>
//   );
// };

// export default Conversations;


// STARTER CODE GOES HERE
// import React from 'react'
// import Conversation from "./Conversation"

// const Conversations = () => {
//   return (
//     <div className='flex flex-col overflow-auto'>
//       <Conversation/>
//       <Conversation/>
//       <Conversation/>
//       <Conversation/>
//       <Conversation/>
      
//     </div>
//   )
// }

// export default Conversations