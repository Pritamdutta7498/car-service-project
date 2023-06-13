import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200 my-5 rounded-lg">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
          <img src={person} className="w-3/4 rounded-lg shadow-2xl" />

          <img
            src={parts}
            className="w-1/2 absolute top-1/2 right-5 border-8 border-white rounded-lg shadow-2xl"
          />
        </div>
        <div className="lg:w-1/2 space-y-5">
          <div className="badge badge-secondary badge-outline">About Us</div>
          <h1 className="text-5xl font-bold">
            We are qualified and experience in this field!
          </h1>
          <p className="py-2">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi. Provident cupiditate voluptatem et in. Quaerat fugiat ut
            assumenda excepturi exercitationem quasi. In deleniti eaque aut
            repudiandae et a id nisi.
          </p>
          <p>
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-error">Get More info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
