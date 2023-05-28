import Carousel from '../../components/Carousel'
import Footer from '../../components/Footer'
import Hero from '../../components/Hero'
import MenuHeader from '../../components/MenuHeader'
import MovieCard from '../../components/MovieCard'
import * as S from './styles'

const HomeTemplate = () => {
  return (
    <S.Wrapper>
      <MenuHeader />
      <Hero
        title='Guardiões da Galáxia'
        description='Peter Quill deve reunir sua equipe para defender o universo e proteger um dos seus. Se a missão não for totalmente bem-sucedida, isso pode levar ao fim dos Guardiões.'
        backgroundImageUrl='/assets/images/cartaz.jpg'
        onClickAdd={() => console.log('Adicionar')}
        onClickInfo={() => console.log('Info')}
        onClickPlay={() => console.log('Play')}
      />
      <Carousel title='carousel'>
        {Array.from(Array(20).keys()).map((_, index) => (
          <MovieCard key={index} />
        ))}
      </Carousel>
      <Carousel title='carousel'>
        {Array.from(Array(20).keys()).map((_, index) => (
          <MovieCard key={index} />
        ))}
      </Carousel>
      <Carousel title='carousel'>
        {Array.from(Array(20).keys()).map((_, index) => (
          <MovieCard key={index} />
        ))}
      </Carousel>
      <Footer />
    </S.Wrapper>
  )
}

export default HomeTemplate
