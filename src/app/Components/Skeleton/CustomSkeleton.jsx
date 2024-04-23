"use client";

import React from "react";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const CustomSkeleton = () => {
  const numarr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
        <div className="row">
          {numarr.map(() => {
            return (
              <div className="col-md-4">
                <SkeletonTheme>
                  <Skeleton height={100} style={{ marginBottom: "30px" }} />
                  <Skeleton count={3} height={30} />
                </SkeletonTheme>
              </div>
            );
          })}
        </div>
    </>
  );
};

export default CustomSkeleton;
