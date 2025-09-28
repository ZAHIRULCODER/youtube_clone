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
      <section className="space-y-4">
         <div className="panel flex h-[520px] flex-col overflow-hidden">
            <header className="flex items-center justify-between border-b border-neutral-200 pb-3">
               <h3 className="text-base font-semibold text-neutral-900">
                  Live chat
               </h3>
               <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-500">
                  {liveChats.length} active
               </span>
            </header>
            <div className="no-scrollbar flex flex-1 flex-col-reverse gap-2 overflow-y-auto pt-3">
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
            className="panel flex items-center gap-3 p-3"
         >
            <input
               value={typeLiveMessage}
               onChange={(event) => setTypeLiveMessage(event.target.value)}
               className="flex-1 rounded-full border border-neutral-200 bg-white/90 px-4 py-2 text-sm text-neutral-800 shadow-inner focus:outline-none focus:ring-2 focus:ring-neutral-900/10"
               type="text"
               placeholder="Say something nice"
               required
            />
            <button
               type="submit"
               className="rounded-full bg-neutral-900 px-5 py-2 text-sm font-semibold text-white shadow-elevated transition hover:bg-neutral-800"
            >
               Send
            </button>
         </form>
      </section>
   );
}
