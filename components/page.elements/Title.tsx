import * as React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

interface Props<T, B> {
  main: T;
  subTitle?: T;
  cta?: B;
  ctaText?: T;
  ctaPath?: T;
  bg?: T;
  color?: T;
}

interface TitleProps<T> {
  bg?: T;
  color?: T;
}
const StyledTitle = styled.div<TitleProps<string>>``;

const Title: React.FC<Props<string, boolean>> = ({
  main,
  subTitle,
  cta,
  ctaText,
  ctaPath,
  bg,
  color,
}) => {
  const options = {
    ctaText: ctaText ? ctaText : 'About',
    path: ctaPath ? ctaPath : '/about',
  };
  return (
    <StyledTitle>
      <h1>{main}</h1>
      {subTitle && <h3>{subTitle}</h3>}
      {cta && (
        <Link href={options.path}>
          <a>{options.ctaText}</a>
        </Link>
      )}
    </StyledTitle>
  );
};
export default Title;
