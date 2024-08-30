import React from "react";
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import RootComponent from "./root.component";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: RootComponent,
  errorBoundary(err, info, props) {
    // TOOD => customize error boundary
    return null;
  },
})

export const { bootstrap, mount, unmount } = lifecycles

