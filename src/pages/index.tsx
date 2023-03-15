import Link from 'next/link'
import styled from 'styled-components'

export default function Home() {
  return (
    <Container>
      <Component>
        <h1>Hello Zippia 👋</h1>
        <h1>Code challenge</h1>
        <p>
          <Link href="/test/jobs">Check the jobs page as requested</Link>
        </p>
      </Component>
    </Container>
  )
}

const Container = styled.main`
  display: flex;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
`

const Component = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  padding: 0 1rem;

  p {
    margin-top: 1.5rem;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`
