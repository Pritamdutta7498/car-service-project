import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";


const Banner = () => {
  return (
    <div className="carousel w-full h-[600px] mt-5  ">
      <div id="slide1" className="carousel-item relative w-full ">
        <img src={img1} className="w-full rounded-xl bg-slate-400" />

        <div className="absolute rounded-xl flex items-center h-full left-0  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21, 0)]">
          <div className="text-white w-1/2 space-y-7  font-bold pl-12">
            <h2 className="text-6xl">Afforable price car for servicing</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              sequi excepturi, nobis dolore eaque distinctio necessitatibus
              dolorem tenetur quisquam in.
            </p>
            <div className="gap-5 flex">
              <button className="btn btn-warning">Discover More</button>
              <button className="btn btn-outline btn-error">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 gap-10 right-5  left-5 bottom-0">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full ">
        <img src={img2} className="w-full rounded-xl " />

        <div className="absolute rounded-xl flex items-center h-full  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21, 0)]">
          <div className="text-white w-1/2 space-y-7  font-bold pl-12">
            <h2 className="text-6xl">Afforable price car for servicing</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              sequi excepturi, nobis dolore eaque distinctio necessitatibus
              dolorem tenetur quisquam in.
            </p>
            <div className="gap-5 flex">
              <button className="btn btn-warning">Discover More</button>
              <button className="btn btn-outline btn-error">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 gap-10 right-5  left-5 bottom-0">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full ">
        <img src={img3} className="w-full rounded-xl bg-slate-400" />

        <div className="absolute rounded-xl flex items-center h-full left-0  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21, 0)]">
          <div className="text-white w-1/2 space-y-7  font-bold pl-12">
            <h2 className="text-6xl">Afforable price car for servicing</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              sequi excepturi, nobis dolore eaque distinctio necessitatibus
              dolorem tenetur quisquam in.
            </p>
            <div className="gap-5 flex">
              <button className="btn btn-warning">Discover More</button>
              <button className="btn btn-outline btn-error">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 gap-10 right-5  left-5 bottom-0">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full ">
        <img src={img4} className="w-full rounded-xl bg-slate-400" />

        <div className="absolute rounded-xl flex items-center h-full left-0  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21, 0)]">
          <div className="text-white w-1/2 space-y-7  font-bold pl-12">
            <h2 className="text-6xl">Afforable price car for servicing</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              sequi excepturi, nobis dolore eaque distinctio necessitatibus
              dolorem tenetur quisquam in.
            </p>
            <div className="gap-5 flex">
              <button className="btn btn-warning">Discover More</button>
              <button className="btn btn-outline btn-error">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 gap-10 right-5  left-5 bottom-0">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
