'use client'; 

import FriendList from "./friendList";
import FriendListSearchModal from "./friendListSearchModal";

export default function PrivateChatMainBoard() {


    return (
    <div className="w-full flex flex-col justify-start items-center py-3" >
      <FriendList />
      <FriendListSearchModal />
    </div>
  );
}
