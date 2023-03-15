import React from 'react'
import Image from 'next/image'
import { Container, ContainerInputs, Nav } from './HeaderStyles'

type FiltersProps = {
  selectedCompany: string
  setSelectedCompany: (value: string) => void
  companies: string[]
  showLast7Days: boolean
  setShowLast7Days: (showLast7Days: boolean) => void
}

export const Header = ({
  selectedCompany,
  setSelectedCompany,
  companies,
  showLast7Days,
  setShowLast7Days,
}: FiltersProps) => (
  <Container>
    <Image
      src="/images/zippia-logo.png"
      alt="Zippia Logo"
      height={36}
      width={154}
    />

    <ContainerInputs>
      <select
        id="company-select"
        value={selectedCompany}
        onChange={(e) => setSelectedCompany(e.target.value)}
      >
        <option value="">Filter by Company</option>
        {companies.map((company) => (
          <option key={company} value={company}>
            {company}
          </option>
        ))}
      </select>
      <button onClick={() => setShowLast7Days(!showLast7Days)}>
        {showLast7Days ? 'Show All Jobs' : 'Show Jobs from Last 7 Days'}
      </button>
    </ContainerInputs>

    <Nav>
      <ul>
        <li>
          <a
            href="https://github.com/camilacno/"
            target="_blank"
            rel="noopener noreferrer"
          >
            GITHUB
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/camilacno/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LINKEDIN
          </a>
        </li>
        <li>
          <a
            href="mailto:camila.cno@gmail.com?subject=Professional Contact"
            target="_blank"
          >
            EMAIL
          </a>
        </li>
      </ul>
    </Nav>
  </Container>
)
