import React from 'react';
import Skeleton from '@mui/material/Skeleton';

const NewsCardSkeleton = () => {
  return (
    <div className="card news-card">
      <Skeleton variant="rectangular" width="100%" height={200} />
      <div className="card-body news-details">
        <Skeleton variant="text" width="80%" height={20} />
        <Skeleton variant="text" width="60%" height={16} />
        <Skeleton variant="text" width="40%" height={16} />
      </div>
    </div>
  );
};

export default NewsCardSkeleton;
