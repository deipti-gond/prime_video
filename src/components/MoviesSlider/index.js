// Write your code here
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MovieItem from '../MovieItem'

const MovieSlider = props => {
  const settings = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
  }

  const {moviesList} = props

  return (
    <Slider {...settings}>
      {moviesList.map(eachMovie => (
        <MovieItem key={eachMovie.id} movieDetails={eachMovie} />
      ))}
    </Slider>
  )
}

export default MovieSlider
