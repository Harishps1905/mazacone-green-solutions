import React, { lazy, Suspense } from 'react';

const LazySlider = lazy(() => import('./Slider'));

const Slider = props => (
  <Suspense fallback={null}>
    <LazySlider {...props} />
  </Suspense>
);

export default Slider;
