import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { MdDelete } from 'react-icons/md'

import { BiEdit } from 'react-icons/bi'
const PostDetails = () => {
  return (
    <div>
        <Navbar />

<div className="px-8 md:px-[200px] mt-8">
<div className="flex justify-between items-center">
<h1 className="text-2xl font-bold text-black md:text-3xl">10 Uses of Artificial Intelligence in Day to Day Life</h1>
<div className="flex items-center justify-center space-x-2">
<p><BiEdit/></p>
<p><MdDelete/></p>

</div>
</div>

<div className="flex items-center justify-between mt-2 md:mt-4">
<div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:md-2">
<p>@Katleho</p>
<div className="flex space-x-2">
<p>16/06/2023</p>
<p>16:45</p>
</div>
</div>
</div>
<img src="https://insights.daffodilsw.com/hubfs/Social%20Media%20%282%29.webp"  className="w-full mx-auto mt-8" alt="" />
<p className="mx-auto mt-8">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

<div className="flex items-center mt-8  space-x-4 font-semibold">
    <p>Categories:</p>
    </div>
<div className="flex justify-center items-center space-x-2">
<div className="bg-gray-300 rounded-lg px-3 py-1">Tech</div>
<div className="bg-gray-300 rounded-lg px-3 py-1">AI</div>
</div>

</div>

        <Footer />
    </div>
  )
}

export default PostDetails