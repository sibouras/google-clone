import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { url: '/search', text: '🔎 All' },
  { url: 'news', text: '📰 News' },
  { url: 'image', text: '📸 Images' },
  { url: '/videos', text: '📺 Videos' },
];

export const Links = () => {
  return (
    <div className="links">
      {links.map(({ url, text }) => (
        <NavLink key={text} to={url} activeClassName="link-active">
          {text}
        </NavLink>
      ))}
    </div>
  );
};
