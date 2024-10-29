import React from 'react';
import img1 from '../assets/img1.jpg';

const articles = [
  {
    category: 'Business',
    title: 'The Biggest Mistakes Influencers Make on Instagram',
    author: 'Armin Vans',
    date: 'August 7, 2019',
    image: img1,
    commentsCount: 0,
  },
  {
    category: 'Health & Fitness',
    title: 'Increase your Endurance Through the Pilates Method',
    author: 'Armin Vans',
    date: 'August 7, 2019',
    image: img1,
    commentsCount: 0,
  },
  {
    category: 'Health & Fitness',
    title: 'The Ultimate Exercises to Improve Back Muscles',
    author: 'Armin Vans',
    date: 'August 7, 2019',
    image: img1,
    commentsCount: 0,
  },{
    category: 'Health & Fitness',
    title: 'The Ultimate Exercises to Improve Back Muscles',
    author: 'Armin Vans',
    date: 'August 7, 2019',
    image: img1,
    commentsCount: 0,
  },{
    category: 'Health & Fitness',
    title: 'The Ultimate Exercises to Improve Back Muscles',
    author: 'Armin Vans',
    date: 'August 7, 2019',
    image: img1,
    commentsCount: 0,
  },{
    category: 'Health & Fitness',
    title: 'The Ultimate Exercises to Improve Back Muscles',
    author: 'Armin Vans',
    date: 'August 7, 2019',
    image: img1,
    commentsCount: 0,
  },{
    category: 'Health & Fitness',
    title: 'The Ultimate Exercises to Improve Back Muscles',
    author: 'Armin Vans',
    date: 'August 7, 2019',
    image: img1,
    commentsCount: 0,
  },
  // Add more articles as needed
];

const ArticleList = () => {
  return (
    <div className="container mx-auto p-4">
      
      <div className="space-y-6">
        {articles.map((article, index) => (
          <div key={index} className="flex items-start bg-white ">
            <img
              src={article.image}
              alt={article.title}
              className="w-1/3 h-auto object-cover"
            />
            <div className="pl-4 w-2/3">
              <span className="  hidden text-xs font-semibold uppercase text-white bg-black px-2 py-1 mb-2 md:inline-block hover:bg-blue-400">
                {article.category}
              </span>
              <h2 className="text-sm md:text-xl font-semibold mb-2 hover:text-blue-500">{article.title}</h2>
              <span className="text-xs text-black mb-2 font-bold">By {article.author} </span>
              <span className='text-xs'>- {article.date}</span>
              <p className="text-gray-700 hidden md:block">
                {article.description}
              </p>
            </div>
            <div className="flex justify-end">
              <span className="text-xs bg-gray-800 text-white rounded-full px-2 py-1 items-center hidden md:flex ">
                {article.commentsCount}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleList;
