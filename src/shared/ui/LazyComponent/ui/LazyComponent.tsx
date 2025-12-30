import React from 'react'

const LazyComponent = (LazyComponent: React.ReactNode) => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      {LazyComponent}
    </React.Suspense>
  )
}

export default LazyComponent;