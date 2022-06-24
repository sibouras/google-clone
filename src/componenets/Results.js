import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useResultContext } from '../contexts/ResultContextProvider';
import ReactPlayer from 'react-player';

export const Results = () => {
  const { term, isLoading, results, getResults } = useResultContext();
  const location = useLocation();

  useEffect(() => {
    if (term) {
      if (location.pathname === '/videos') {
        getResults(`/search/q=${term} site:youtube.com`);
      } else {
        getResults(`${location.pathname}/q=${term}&num=40`);
      }
    }
  }, [term, location.pathname]);

  if (isLoading)
    return (
      <main>
        <div className="loading"></div>
      </main>
    );

  switch (location.pathname) {
    case '/search':
      return (
        <main className="search">
          {results?.map(({ link, title, description, cite }, index) => (
            <div className="result" key={index}>
              <a className="link-container" href={link} rel="noreferrer">
                <div className="link">{cite?.domain}</div>
                <h5 className="title">{title}</h5>
              </a>
              <p className="description">{description}</p>
            </div>
          ))}
        </main>
      );
    case '/image':
      return (
        <main className="images">
          {results?.map(({ image, link: { href, title } }, index) => (
            <a className="image" href={href} key={index}>
              <img src={image?.src} alt={title} />
              <p>{title}</p>
            </a>
          ))}
        </main>
      );
    case '/news':
      return (
        <main className="news">
          {results?.map(({ link, id, source, title, published }) => (
            <div className="result" key={id}>
              <a className="link-container" href={link} rel="noreferrer">
                <div className="link">{source?.href}</div>
                <h5 className="title">{title}</h5>
              </a>
              <div className="published">{published}</div>
            </div>
          ))}
        </main>
      );
    case '/videos':
      return (
        <main className="videos">
          {results?.map((video, index) => (
            <div key={index} className="p-2">
              {video?.link && (
                <ReactPlayer
                  url={video?.link}
                  controls
                  width="500px"
                  height="281px"
                />
              )}
            </div>
          ))}
        </main>
      );

    default:
      return 'ERROR!';
  }
};
