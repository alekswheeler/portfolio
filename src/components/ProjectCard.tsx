interface ProjectCardProps {
  title: string
  subtitle: string
  description: string
  tecnologies: string[]
  image: string
  sourceCodeLink: string
  liveLink: string
}

const ProjectCard = (props: ProjectCardProps) => {
  const tecnologies = new Map()

  tecnologies.set(
    'C',
    'https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white',
  )
  tecnologies.set(
    'typescript',
    'https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white',
  )
  tecnologies.set(
    'nodejs',
    'https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white',
  )
  tecnologies.set(
    'docker',
    'https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white',
  )
  tecnologies.set(
    'postgres',
    'https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white',
  )
  tecnologies.set(
    'aws',
    'https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white',
  )
  tecnologies.set(
    'react',
    'https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB',
  )
  tecnologies.set(
    'nextjs',
    'https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white',
  )

  return (
    <div className="container-flex project-card">
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <span className="project-card-title">
          <strong>{props.title}</strong>
        </span>
        <span className="project-card-subtitle">
          <i>{props.subtitle}</i>
        </span>
      </div>

      <div className="project-card-badges">
        {props.tecnologies.map((tecnology) => {
          return (
            <div key={tecnology} className="container-flex">
              <img src={tecnologies.get(tecnology)} alt="" />
            </div>
          )
        })}
      </div>

      <span className="project-card-description">{props.description}</span>

      <div className="container-flex project-card-links">
        <span className="container-flex card-buttom">
          <a target="_blank" href={props.sourceCodeLink} rel="noreferrer">
            Code
          </a>
        </span>
        {props.liveLink !== '' ? (
          <span className="container-flex card-buttom">
            <a target="_blank" href={props.liveLink} rel="noreferrer">
              Live demo
            </a>
          </span>
        ) : (
          <span
            title="not provided"
            className="container-flex card-buttom-disabled"
          >
            Live demo
          </span>
        )}
      </div>
    </div>
  )
}

export { ProjectCard }
