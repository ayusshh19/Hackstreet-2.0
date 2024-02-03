import React from 'react'
import { useSelector } from 'react-redux';

function Responsivetext() {
  const { chatdata } = useSelector(
    (state) => state.chat
  );
  return (
    <div>
            {chatdata!=null &&chatdata && (
              <div className=" flex flex-col justify-start relative h-auto items-start">

                <h1 className="text-xl sm:text-3xl sm:mb-0 mb-3 h-10 text-fillcomp font-semibold">
                  {chatdata[0]?.user_response}
                </h1>
                <p className="text-sm h-4/5 sm:h-5/6 relative whitespace-pre-line w-full" >
                  {chatdata[0]?.ai_response}
                </p> 
              </div>
            )}
    </div>
  )
}

export default Responsivetext