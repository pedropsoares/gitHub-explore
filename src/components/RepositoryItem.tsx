import { RepositoryItemProps } from "../interfaces/repositories.interface"

export const RepositoryItem = ({ repository }: RepositoryItemProps) => {
  return (
    <li>
      <strong>{repository.name}</strong>
      <p>{repository.description}</p>

      <a href={repository.html_url}>
        Acessar Repositórios
      </a>
    </li>
  )
}
