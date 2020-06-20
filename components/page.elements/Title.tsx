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
  center?: B;
}

interface TitleProps<T, B> {
  bg?: T;
  color?: T;
  center?: B;
}

const StyledTitle = styled.div<TitleProps<string, boolean>>`
  text-align: ${({ center }) => center && 'center'};
`;

const Title: React.FC<Props<string, boolean>> = ({
  main,
  subTitle,
  cta,
  ctaText,
  ctaPath,
  bg,
  color,
  center,
}) => {
  const options = {
    ctaText: ctaText ? ctaText : 'About',
    path: ctaPath ? ctaPath : '/about',
  };
  return (
    <StyledTitle center={center} bg={bg} color={color}>
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
