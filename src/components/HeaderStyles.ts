import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: var(--tundora);
  padding: 1rem 7rem;

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    padding: 1rem 2rem;
  }

  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    padding: 1rem 2rem;
    img {
      display: none;
    }
  }
`

export const ContainerInputs = styled.div`
  align-items: center;
  display: flex;

  select {
    border: 0;
    border-radius: 3px 0 0 3px;
    font-family: 'Open Sans', sans-serif;
    font-size: 0.875rem;
    font-weight: 500;
    height: 2.75rem;
    max-width: 15rem;

    @media screen and (min-width: 768px) and (max-width: 1023px) {
      width: 12rem;
    }

    @media screen and (max-width: 767px) {
      width: 10rem;
    }
  }

  button {
    border: 0;
    border-radius: 0 3px 3px 0;
    font-family: 'Open Sans', sans-serif;
    font-size: 0.875rem;
    font-weight: 500;
    height: 2.75rem;
    max-width: 15rem;
    padding: 0 1rem;
  }
`

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 767px) {
    margin-top: 0.875rem;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    display: inline;
    margin: 0 6px;
  }

  a {
    color: var(--alto);

    font-family: 'Open Sans', sans-serif;
    font-size: 0.875rem;
    font-style: normal;
    font-variant: normal;
    font-weight: 400;
    letter-spacing: normal;
    line-height: 1.5rem;
    text-decoration: none;
  }
`
