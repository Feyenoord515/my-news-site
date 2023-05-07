import React from 'react';

const Article = ({ title, author, body }) => {
  return (
    <div className="max-w-2xl mx-auto my-8">
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <p className="text-gray-700 mb-2">
        By <span className="font-medium">{author}</span>
      </p>
      <p className="text-gray-600">{body}</p>
    </div>
  );
};

export default Article;
