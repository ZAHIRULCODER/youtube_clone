import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addChat } from "../reduxtoolkit/slices/liveChatSlice";
import { randomNameGenerator } from "../utils/randomNameGenerator/randomNameGenerator";
import { randomChatGenerator } from "../utils/randomChatGenerator/randomChatGenerator";
import { LiveChatMessage } from "./LiveChatMessage";

export function LiveChat() {
   const [typeLiveMessage, setTypeLiveMessage] = useState("");
   const dispatch = useDispatch();
   const liveChats = useSelector((store) => store.livechat.chats);

   useEffect(() => {
      const interval = setInterval(() => {
         dispatch(
            addChat({
               name: randomNameGenerator(),
               chat: randomChatGenerator(),
            })
         );
      }, 1500);

      return () => clearInterval(interval);
   }, [dispatch]);

   const handleSubmitLiveMessage = (event) => {
      event.preventDefault();
      dispatch(
         addChat({
            name: "Sk Zahirul Islam",
            chat: typeLiveMessage,
         })
      );
      setTypeLiveMessage("");
   };

   return (
      <>
         <div className="w-full h-[500px] p-3 border border-black rounded-t-xl bg-slate-100 flex flex-col">
            <p className="border-b border-b-black">Live Chat</p>
            <div className="flex-grow flex flex-col-reverse overflow-y-scroll">
               {liveChats.map((chat) => (
                  <LiveChatMessage
                     key={`${chat.name}-${chat.chat}`}
                     name={chat.name}
                     chat={chat.chat}
                  />
               ))}
            </div>
         </div>
         <form
            onSubmit={handleSubmitLiveMessage}
            className="p-3 border border-black rounded-b-xl"
         >
            <input
               value={typeLiveMessage}
               onChange={(event) => setTypeLiveMessage(event.target.value)}
               className="border border-black w-[80%] rounded-md mr-2 p-2"
               type="text"
               placeholder="Type your message here"
               required
            />
            <button className="border w-[17%] p-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md">
               send
            </button>
         </form>
      </>
   );
}
