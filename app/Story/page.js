import React from 'react'
import Image from 'next/image'
const Story = () => {
  return (
    <div className='relative'>
    <Image className='border-2 border-red-400 w-[96.5%]' src="/MtFUJI_ILLUSTRATION_SET.png" width={3000} height={300} alt="nature video" />

<div className='absolute grid place-items-center top-[40%] left-1/2 transform -translate-x-1/2'>
<Image className='border-2 border-red-400' src="/LOGO_2_BK.png" width={100} height={300} alt="nature video" />
<p className='en-vertical-text text-4xl mt-3'>STORY</p>
</div>

<div className='border-2 border-red-400 w-[100%] grid place-items-center'>
<Image className='w-[80%]' src="/STORY_IMG_DUMMY.png" width={3000} height={300} alt="nature video" />

</div>
    </div>
  )
}

export default Story
