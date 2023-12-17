import { FaFacebookF, FaRegEnvelope } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-center">
      <div className='bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl'>
        <div className='w-3/5 p-5'>
          <div className="text-left font-bold"><span className='text-blue-500'>NextJs</span><span>Redux</span></div>
          <div className='py-10'>
            <h2 className='text-3xl font-bold text-blue-500 mb-2'>Sign In to Account</h2>
            <div className='border-2 w-20 border-blue-500 inline-block mb-2'></div>
            <div className='flex justify-center my-2'>
              <a href="#"><FaFacebookF /></a>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center bg-gray-100 w-64 p-2 mb-3 "><FaRegEnvelope className="text-gray-400 mr-2" />
                <input type="email" name="email" placeholder="Email" className="bg-gray-100 outline-none text-sm flex-1" />
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center bg-gray-100 w-64 p-2 mb-3"><MdLockOutline className="text-gray-400 mr-2" />
                <input type="password" name="password" placeholder="Password" className="bg-gray-100 outline-none text-sm flex-1" />
              </div>
              <div className="flex justify-between w-64 mb-5">
                <label className="flex items-center text-xs"><input type="checkbox" name="remember" className="mr-1" />Remember me</label>
                <a href="#" className="text-xs">Forget Password?</a>
              </div>
              <a href="#" className="border-2 border-blue-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-blue-500 hover:text-white">Sign In</a>
            </div>
          </div>
        </div>
        <div className='w-2/5 bg-blue-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12'>
          <h2 className='text-2xl font-bold mb-2'>Hello Friend</h2>
          <div className='border-2 w-20 border-white inline-block mb-2 '></div>
          <p className='mb-2'>Fill up and start journey with us</p>
          <a href="#" className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-blue-500">Sign Up</a>
        </div>
      </div>
    </main>
  )
}
