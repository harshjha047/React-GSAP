// Post.jsx
import React from 'react';
import Card from './Card';

function Post() {
  // Define an array of card data
  const cardData = [
    {
      id: 'card1',
      thumbnail: 'https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg',
      title: 'Hello',
      description: 'Hello Everyone',
      video: 'https://videos.pexels.com/video-files/5585939/5585939-hd_1920_1080_25fps.mp4',
    },
    {
      id: 'card2',
      thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCZlf5lc5tX-0gY-y94pGS0mQdL-D0lCH2OQ&s',
      title: 'Title 1',
      description: 'Description 1',
      video: './backgroundVideo.mp4',
    },
    {
      id: 'card3',
      thumbnail: 'https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg',
      title: 'Title 2',
      description: 'Description 2',
      video: 'https://videos.pexels.com/video-files/3048179/3048179-uhd_2560_1440_24fps.mp4',
    },
    {
      id: 'card4',
      thumbnail: 'https://example.com/image3.jpg',
      title: 'Title 3',
      description: 'Description 3',
      video: 'https://videos.pexels.com/video-files/5585939/5585939-hd_1920_1080_25fps.mp4',
    },
    {
      id: 'card5',
      thumbnail: 'https://example.com/image4.jpg',
      title: 'Title 4',
      description: 'Description 4',
      video: 'https://videos.pexels.com/video-files/5585939/5585939-hd_1920_1080_25fps.mp4',
    },
  ];

  return (
    <div className="bg-[#111] flex justify-center items-center">
      <div className="">
        <div className="h-[16vh] w-full"></div>
        <div className="flex flex-wrap w-[80vw] justify-between">
          {cardData.map((card) => (
            <Card
              key={card.id}
              id={card.id}
              thumbnail={card.thumbnail}
              title={card.title}
              description={card.description}
              video={card.video}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Post;
