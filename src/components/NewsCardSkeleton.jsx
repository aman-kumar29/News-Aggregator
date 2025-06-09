import React from "react";
import { Skeleton, Card, CardContent } from "@mui/material";

const NewsCardSkeleton = () => (
  <Card sx={{ width: 300, height: 420 }}>
    <Skeleton variant="rectangular" height={160} />
    <CardContent>
      <Skeleton variant="text" height={30} width="80%" />
      <Skeleton variant="text" height={20} width="60%" />
    </CardContent>
  </Card>
);

export default NewsCardSkeleton;
