import React from "react";

export default function CommentCard() {
  return (
    <>
      <div className=" bg-white w-[360px] h-[200px] p-5 flex flex-col gap-4 rounded-lg">
        <div>
           <p>sssss</p>
        </div>
        <div>
          <p className="text-[10px]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores<br/>
            delectus reiciendis expedita maiores totam error? A aut quo soluta,<br/>
            vitae accusantium nobis consequuntur placeat iusto eveniet<br/>
            temporibus. Molestiae, illum dolore?
          </p>
        </div>
        <div className=" flex items-center gap-4">
          <div>
            <img src="/profile.jpg" alt="profile" className=" rounded-full w-[30px] h-[30px]" />
          </div>
          <div className="text-[10px]">
            <p className="font-bold">sian nasibparst</p>
            <p>Developer</p>
          </div>
        </div>
      </div>
    </>
  );
}
