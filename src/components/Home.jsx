import { useState } from "react";
import { debounce } from "lodash";
import Images from "./getImages";
import Switch from "react-switch";
import Hero from "./Hero";

const Home = () => {
  const [search, setSearch] = useState("");
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [initialContent, setInitialContent] = useState(true);
  const [clicked, isClicked] = useState(false);
  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const debouncedApiRequest = debounce((text) => {
    setIsLoading(true);
    fetch(
      `https://api.unsplash.com/search/photos?query=${text}&client_id=GJ7EnD53eZR-J4kt-HkQ1OrV36q6K8QZx4OjH9R4aD4`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.results);

        setIsLoading(false);
      });
  }, 1000);

  const handleInputChange = (e) => {
    const { value } = e.target;

    setSearch(value);
    setInitialContent(false);

    debouncedApiRequest(value);
  };

  return (
    <>
      <div
        className={`app-container ${
          isDark ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        <nav>
          <div className="container relative space-y-10 mx-auto flex flex-row justify-center space-x-6 hidden md:block">
            <a href="#" className="text-3xl font-normal">
              Image Gallery
            </a>
            <input
              type="text"
              placeholder="Search high resolution Images, categories, wallpapers"
              className="w-1/4 bg-gray-200 h-10 text-left px-3" // Adjusted background color here
              onChange={(e) => handleInputChange(e)}
            />
            <a href="#" className="font-semibold">
              Explore
            </a>
            <a href="#" className="font-semibold">
              Collection
            </a>
            <a href="#" className="font-semibold">
              Community
            </a>
            <span className="font-semibold px-5">Dark Mode</span>
            <Switch onChange={toggleTheme} checked={isDark} />
          </div>
        </nav>

        <section>
          {isLoading ? (
            <div>
              <p>Loading some awesome Images...</p>
            </div>
          ) : initialContent ? (
            <div className="w-3/3">
              <img
                src="hero.png"
                className="mt-10"
                alt="A beautiful hero image"
              />
            </div>
          ) : (
            <div className="w-screen">
              <p className="text-neutral-600 text-4xl font-bold mt-6 text-left px-22 container mx-auto">
                {search}
              </p>
            </div>
          )}
        </section>

        <Images images={images} clicked={clicked} />
      </div>
    </>
  );
};

export default Home;
