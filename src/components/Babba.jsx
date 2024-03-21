import React from 'react';
import { FaFile } from "react-icons/fa6";
import { HiDownload } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
import { motion } from "framer-motion"
function Babba({data,reference}) {
  return (
    <motion.div drag dragConstraints={reference}
     whileDrag={{scale : 1.2}}
      dragElastic={.1}
      dragTransition={{bounceStiffness:600, bounceDamping:30}}
 className='flex-shrink-0 relative w-52 h-60 rounded-[40px]   px-10 py-6 overflow-hidden bg-zinc-700 opacity-85 text-white'>
        <FaFile/>
        <p className='rext-sm mt-5 leading-tight font-mono'>{data.desc}</p>
        <div className='footer absolute bottom-0 w-full h-15 left-0'>
            <div className='flex items-center justify-between px-7 py-3 '>
                <h5>{data.filesize}</h5>
              <span className='bg-zinc-900 rounded-full w-7 h-7 text-lg flex items-center justify-center opacity-90'>
                {data.close ?<MdOutlineClose  className='font-bold text-lg'/>:<HiDownload/>}
              </span>
            </div>
            {
                data.tag.isOpen ?(
                    <div className={`tag w-full py-2 flex items-center justify-center ${data.tag.tagColor=='white' ? "bg-blue-400" : "bg-pink-400"} opacity-80`}>
                    <h3 className='text-lg font-semibold'>{data.tag.tagTitle}</h3>
                </div>
                ) :null  }
           
        </div>
    </motion.div>
  )
}

export default Babba