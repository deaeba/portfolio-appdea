import PropTypes from "prop-types";

const ProjectItem = ({ img, title, infoHref, imgHref }) => {
  const handleRedirect = (href) => {
    window.location.href = href;
  };

  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-grey-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]">
      <a href={imgHref} onClick={() => handleRedirect(imgHref)}>
        <img
          src={img}
          alt="/"
          className="rounded-xl project-img transition-all duration-300 ease-in-out transform hover:scale-110 hover:brightness-80"
        />
      </a>
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl font-bold text-white tracking-wider text-center">
          {title}
        </h3>
        {title === "Evogym App" ? (
          <p className="pb-4 pt-2 text-white text-center">React TypeScript</p>
        ) : (
          <p className="pb-4 pt-2 text-white text-center">Next Js</p>
        )}
        <p className="text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg">
          <a href={infoHref} onClick={() => handleRedirect(infoHref)}>
            More Info
          </a>
        </p>
      </div>
    </div>
  );
};

ProjectItem.propTypes = {
  img: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  infoHref: PropTypes.string.isRequired,
  imgHref: PropTypes.string.isRequired,
};

export default ProjectItem;
