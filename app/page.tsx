import Image from "next/image";
import Navbar from "@/components/Nav/Navbar";
export default function Home() {

  return (
   <div>
    <Navbar />

    <div className="mt-20 p-5">
    Landing Page
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, praesentium! Culpa at cupiditate veritatis soluta recusandae sint ducimus fuga facere. Rem doloribus qui provident! Officiis, ex. Autem placeat error ratione?
    Doloremque iure accusantium expedita voluptas voluptates hic at rerum dignissimos corrupti porro voluptatibus deserunt delectus illum optio nam fuga, itaque excepturi recusandae, molestias ea eveniet. Ipsum obcaecati modi natus quisquam.
    Aliquid dolorum sed illum veniam, voluptatum nobis eaque earum et nemo rerum, expedita obcaecati. Autem, labore, dolorem quasi aut similique delectus, recusandae enim placeat voluptate possimus commodi dolores amet distinctio.
    Quod pariatur exercitationem quasi modi architecto maiores veritatis laudantium mollitia eos, officiis in quo natus! Odio non cum quia quisquam in exercitationem eveniet, nulla tempora nostrum praesentium atque cumque numquam.   
    </div>
    
    {/* <section
        id="/"
        className="text-white h-screen bg-black  text-center flex"
      >
        <h1 className="m-auto font-waterfall text-7xl text-purple-600 font-bold  ">
          Home
        </h1>
      </section> */}
      <section id="about" className=" text-white h-screen bg-purple-900 flex">
        <h1 className="m-auto font-waterfall lg:text-7xl text-5xl  text-white font-bold">
          About
        </h1>
      </section>
      <section
        id="contact"
        className="text-white h-screen bg-black  text-center flex"
      >
        <h1 className="m-auto font-waterfall lg:text-7xl text-5xl  text-purple-600 font-bold">
          Contact{' '}
        </h1>
      </section>
      <section
        id="privacy"
        className=" text-white h-screen bg-purple-900 flex"
      >
        <h1 className="m-auto font-waterfall lg:text-7xl text-5xl text-center text-white font-bold">
          Privacy Policy
        </h1>
      </section>

   </div>
  );
}
