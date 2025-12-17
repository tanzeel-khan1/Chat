// import React, { useEffect } from "react";
// import Chatuser from "./Chatuser";
// import Message from "./Message";
// import Type from "./Type";
// import useConversation from "../../stateman/useConversation";
// import Loading from "../../components/Loading";
// import { useAuth } from "../../context/AuthProvider";

// export default function Right() {
//   const { selectedConversation, setSelectedConversation } = useConversation();
//   useEffect(() => {
//     setSelectedConversation(null);
//   }, [selectedConversation]);
//   return (
//     <div className=" w-[70%] bg-slate-950 text-white">

//     <div>
//       {!selectedConversation ? (
//         <Nochat/>
//       ) : (
//         <>
//             <Chatuser />
//             <div
//               className="flex-babar overflow-y-auto"
//               style={{ maxHeight: "calc(88vh - 8vh" }}
//             >
//               <Message />
//             </div>
//             <Type />
//         </>
//       )}
//     </div>
//     </div>
//   );
// };

// const Nochat  =()  => {
//   const {authUser} = useAuth()
//   return(
//     <>
//     <div className="flex items-center justify-center h-full">
//       <h1 className="text-center">No chat selected</h1>
//       {authUser.name && <Nochat/>}
//     </div>
//     </>
//   )
// }
import React, { useEffect } from "react";
import Chatuser from "./Chatuser";
import Message from "./Message";
import Type from "./Type";
import useConversation from "../../stateman/useConversation";
import { useAuth } from "../../context/AuthProvider";

export default function Right() {
  const { selectedConversation, setSelectedConversation } = useConversation();

  // ✅ reset only on unmount
  useEffect(() => {
    return () => setSelectedConversation(null);
  }, []);

  return (
    <div className="w-[70%] bg-slate-950 text-white">
      {!selectedConversation ? (
        <NoChat />
      ) : (
        <>
          <Chatuser />

          <div
            className="flex-babar overflow-y-auto"
            style={{ maxHeight: "calc(88vh - 8vh)" }}
          >
            <Message />
          </div>

          <Type />
        </>
      )}
    </div>
  );
}

/* ================= NO CHAT ================= */

const NoChat = () => {
  const { authUser } = useAuth();

  return (
    <div className="flex items-center justify-center h-full">
      <h1 className="text-center text-gray-400">

        {/* {authUser?.name
          ? `Welcome ${authUser.user.name}, select a chat`
          : "No chat selected"} */}
          Welcome {authUser.user.name}, 
          <br />
          select a chat to start messaging
      </h1>
    </div>
  );
};
