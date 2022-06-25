import { Fragment } from "react";
import type { ComponentType, ReactNode } from "react";

type SkeletonTypes = {
  children: ReactNode;
  on: boolean;
  SkeletonComponent: ComponentType;
}

export default function Skeleton({ children, on, SkeletonComponent }: SkeletonTypes) {
  return on ? <SkeletonComponent />
    : <Fragment>{children}</Fragment>
};