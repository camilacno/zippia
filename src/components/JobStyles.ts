import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 2rem;

  border: 1px solid rgb(216, 222, 226);
  border-radius: 3px;
  box-shadow: 0px 8px 4px -4px rgba(0, 0, 0, 0.05);
  font-family: 'Open Sans', sans-serif;
  margin: 1rem 0;
  padding: 1rem;

  &:hover {
    background-color: #f7f8f9;
  }
`

export const CompanyInfo = styled.div`
  a {
    color: var(--tundora-light);
    display: block;
    font-family: 'Open Sans';
    font-size: 1.25rem;
    font-style: normal;
    font-variant: normal;
    font-weight: 600;
    letter-spacing: normal;
    line-height: 1.75rem;
    text-decoration: none;

    &:hover {
      color: #3174ee;
    }
  }

  p {
    font-family: 'Open Sans';
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;

    letter-spacing: normal;
    line-height: 1.5rem;
    text-align: left;
    text-decoration: none solid rgb(51, 51, 51);
  }

  p + p {
    font-size: 0.8rem;
    margin-top: 1rem;
  }
`

export const Article = styled.article`
  color: #333333;
  font-size: 0.8rem;
  height: 6rem;
  line-height: 1.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
`
