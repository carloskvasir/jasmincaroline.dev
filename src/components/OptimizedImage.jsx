import React from 'react';
import styled from 'styled-components';

const ImageContainer = styled.figure`
  position: relative;
  display: inline-block;
  margin: 0;
`;

const StyledImage = styled.img`
  width: ${props => props.size || '200px'};
  height: ${props => props.size || '200px'};
  border-radius: ${props => props.rounded ? 'var(--radius-full)' : 'var(--radius-lg)'};
  object-fit: cover;
  object-position: center;
  border: 4px solid var(--color-bg);
  box-shadow: var(--shadow-xl), 0 0 0 2px var(--color-border);
  transition: all var(--transition-normal);
  position: relative;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: var(--shadow-xl), 0 0 0 4px var(--color-accent);
  }
  
  /* Loading placeholder */
  &[data-loading="true"] {
    background: linear-gradient(90deg, var(--color-bg-alt) 25%, var(--color-border) 50%, var(--color-bg-alt) 75%);
    background-size: 200% 100%;
    animation: loading 1.5s infinite;
  }
  
  @keyframes loading {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  }
  
  @media (max-width: 768px) {
    width: ${props => props.mobileSizes?.md || '150px'};
    height: ${props => props.mobileSizes?.md || '150px'};
  }
  
  @media (max-width: 480px) {
    width: ${props => props.mobileSizes?.sm || '120px'};
    height: ${props => props.mobileSizes?.sm || '120px'};
  }
`;

const OptimizedImage = ({ 
  src, 
  alt, 
  size = "200px",
  mobileSizes = { md: "150px", sm: "120px" },
  rounded = true,
  loading = "lazy",
  decoding = "async",
  className,
  ...props 
}) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [hasError, setHasError] = React.useState(false);
  
  const handleLoad = () => {
    setIsLoading(false);
  };
  
  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };
  
  // Generate sizes attribute for responsive images
  const sizes = `(max-width: 480px) ${mobileSizes.sm}, (max-width: 768px) ${mobileSizes.md}, ${size}`;
  
  return (
    <ImageContainer className={className}>
      <StyledImage
        src={src}
        alt={alt}
        size={size}
        mobileSizes={mobileSizes}
        rounded={rounded}
        loading={loading}
        decoding={decoding}
        sizes={sizes}
        data-loading={isLoading}
        onLoad={handleLoad}
        onError={handleError}
        {...props}
      />
      {hasError && (
        <div style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          right: 0, 
          bottom: 0, 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          backgroundColor: 'var(--color-bg-alt)',
          borderRadius: rounded ? 'var(--radius-full)' : 'var(--radius-lg)',
          color: 'var(--color-text-light)',
          fontSize: 'var(--font-size-sm)'
        }}>
          Imagem não encontrada
        </div>
      )}
    </ImageContainer>
  );
};

export default OptimizedImage;
