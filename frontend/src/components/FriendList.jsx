import React from 'react'
import { LANGUAGE_TO_FLAG } from "../constants";
import { Link } from 'react-router';
import { MapPinIcon, MessageSquareMore } from 'lucide-react';
import { capitialize, getLanguageFlag } from './FriendCard';

function FriendList({friend}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 p-4 bg-base-100 rounded-xl shadow-sm hover:shadow-md transition">

  {/* Left: Avatar + Name + Location */}
  <div className="flex items-center gap-4 min-w-[240px]">
    <div className="avatar">
      <div className="mask mask-squircle h-12 w-12">
        <img src={friend.profilePic} alt={friend.fullName} />
      </div>
    </div>

    <div>
      <p className="font-bold leading-tight">{friend.fullName}</p>

      {friend.location && (
        <div className="flex items-center text-xs opacity-70 mt-1">
          <MapPinIcon className="size-3 mr-1" />
          {friend.location}
        </div>
      )}
    </div>
  </div>

  {/* Middle: Bio + Language */}
  <div className="flex-1">
    <p className="text-sm opacity-80 line-clamp-2">
      {friend.bio}
    </p>

    <span className="badge badge-ghost badge-sm mt-2">
      {getLanguageFlag(friend.nativeLanguage)}
      Native: {capitialize(friend.nativeLanguage)}
    </span>
  </div>

  {/* Date */}
  <div className="text-sm opacity-60 whitespace-nowrap">
    {formatDate(friend.createdAt)}
  </div>

  {/* Action */}
  <Link
    to={`/chat/${friend._id}`}
    className="btn btn-sm btn-primary flex items-center gap-2"
  >
    <MessageSquareMore className="size-5" />
    Chat
  </Link>
</div>




      
  )
}

export default FriendList

export const formatDate = (date) =>
  new Date(date).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });