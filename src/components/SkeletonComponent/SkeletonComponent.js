import React from 'react'
import ContentLoader from 'react-content-loader';

 const SkeletonComponent = () => {
  return (
    <ContentLoader 
        speed={1}
        width={320}
        height={330}
        viewBox="0 0 320 330"
        backgroundColor="#a3a3a3"
        foregroundColor="#808080"
        
      >
        <rect x="75" y="82" rx="0" ry="0" width="168" height="0" /> 
        <rect x="0" y="4" rx="18" ry="18" width="300" height="170" /> 
        <rect x="0" y="180" rx="0" ry="0" width="220" height="24" /> 
        <rect x="75" y="215" rx="8" ry="8" width="68" height="20" /> 
        <rect x="4" y="215" rx="8" ry="8" width="68" height="20" /> 
        <rect x="147" y="216" rx="8" ry="8" width="68" height="20" /> 
        <rect x="230" y="287" rx="10" ry="10" width="71" height="22" /> 
        <rect x="166" y="293" rx="10" ry="10" width="62" height="16" />
    </ContentLoader>
  )
  
}
export default SkeletonComponent;


