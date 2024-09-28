import React from "react";

export default function CommentCard({name,titel,comment}) {
  return (
    <>
      <div className=" bg-white w-[360px] h-[200px] p-5 flex flex-col gap-4 rounded-lg">
        <div>
           <p>{titel}</p>
        </div>
        <div>
          <p className="text-[10px]">
              {comment}
          </p>
        </div>
        <div className=" flex items-center gap-3">
          <div>
            <img src="/profile.jpg" alt="profile" className=" rounded-full w-[30px] h-[30px]" />
          </div>
          <div className="text-[10px]">
            <p className="font-bold">{name}</p>
            <p>admin</p>
          </div>
        </div>
      </div>
    </>
  );
}
