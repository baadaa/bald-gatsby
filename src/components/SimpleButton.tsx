import React from 'react';
import styled from 'styled-components';

type SimpleButtonProps = React.HTMLAttributes<HTMLAnchorElement> & {
  href: string;
  cta: string;
  variant?: 'green' | 'yellow' | 'gray';
};

const ButtonStyles = styled.a`
  color: #fff;
  padding: 1.3rem 2rem;
  font-size: 1.6rem;
  border: none;
  border-radius: 5rem;
  font-family: inherit;
  margin-right: 1rem;
  text-decoration: none;
  font-weight: 600;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0.5rem;
  flex: 1;
  width: 100%;
  transition: transform 0.2s;
  &[data-variant='green'] {
    background-color: var(--green500);
    color: var(--green900);
    &:hover {
      box-shadow: var(--base-shadow);
      color: inherit;
    }
  }
  &[data-variant='yellow'] {
    background-color: var(--yellow500);
    color: var(--yellow900);
    &:hover {
      box-shadow: var(--base-shadow);
      color: inherit;
    }
  }
  &[data-variant='gray'] {
    background-color: var(--gray100);
    color: var(--gray700);
    &:hover {
      box-shadow: var(--base-shadow);
      color: inherit;
    }
  }
  &:hover {
    transform: translateY(-0.2rem);
    color: inherit;
  }
  @media screen and (max-width: 500px) {
    flex-basis: 100%;
  }
`;
const SimpleButton: React.FC<SimpleButtonProps> = ({
  href,
  cta,
  variant = 'green',
}) => (
  <ButtonStyles href={href} data-variant={variant}>
    {cta}
  </ButtonStyles>
);
const InlineButton: React.FC<SimpleButtonProps> = ({
  href,
  cta,
  variant = 'green',
}) => (
  <ButtonStyles
    href={href}
    data-variant={variant}
    style={{ width: 'auto', fontSize: '1.4rem' }}
  >
    {cta}
  </ButtonStyles>
);

const ButtonContainer = ({ children }) => (
  <div
    style={{
      display: 'flex',
      maxWidth: '600px',
      margin: '3rem auto 0',
      flexWrap: 'wrap',
    }}
  >
    {children}
  </div>
);

export { InlineButton, SimpleButton, ButtonContainer };
