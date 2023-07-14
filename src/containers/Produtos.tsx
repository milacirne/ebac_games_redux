import Produto from '../components/Produto'
import { useGetJogosQuery } from '../services/api'

import * as S from './styles'

const Produtos = () => {
  const { data: jogos, isLoading } = useGetJogosQuery()

  return (
    <>
      <S.Produtos>
        {jogos?.map((game) => (
          <Produto key={game.id} game={game} />
        ))}
      </S.Produtos>
    </>
  )
}

export default Produtos
