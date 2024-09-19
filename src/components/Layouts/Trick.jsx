import React from 'react';

const EducationalTips = () => {
  const tips = [
    {
      title: 'Review regularly',
      description: 'Revisit previous lessons to strengthen memory retention. This could be through re-reading notes, watching summary videos, or taking practice quizzes.',
      image:'src/image/review.png', 
    },
    {
      title: 'Practice and application',
      description: 'Apply concepts through real-world projects and case studies. This could include solving problems, building models, or working on case studies.',
      image: 'src/image/practise.jpg', 
    },
    {
      title: 'Visual learning',
      description: 'This method emphasizes using images, diagrams, charts, and videos to help you grasp and retain information. Visual learners absorb knowledge best when they can see relationships between ideas.',
      image: 'src/image/visual.jpg', 
    },
  ];

  return (
<div className="w-4/5 mx-auto p-4 sm:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {tips.map((tip, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={tip.image}
              alt={tip.title}
              className="w-full h-40 sm:h-48 object-cover"
            />
            <div className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{tip.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base">{tip.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationalTips;
