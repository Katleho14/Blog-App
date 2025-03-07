

const HomePost = () => {
  return (
    <div className="w-full flex mt-8 space-x-2">
      {/* left */}
<div className="w-[35%] h-[200px] flex items-center justify-center">
<img src="https://insights.daffodilsw.com/hubfs/Social%20Media%20%282%29.webp" alt="" className="h-full w-full object-cover" />
</div>

{/* right */}
<div className="flex flex-col w-[65%]">
<h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
10 Uses of Artificial Intelligence in Day to Day Life
</h1>
<div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:md-2">
<p>@Katleho</p>
<div className="flex space-x-2">
<p>16/06/2023</p>
<p>16:45</p>
</div>
</div>
<p className="text-sm md:text-lg">Prominent examples of AI software used in everyday life include voice assistants, image recognition for face unlock in mobile phones, and ML-based financial fraud detection. AI software usually involves just downloading software with AI capabilities from an online store and requires no peripheral devices.</p>
</div>

    </div>
  )
}

export default HomePost