import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'
import Autoplay from 'embla-carousel-autoplay'

import hero1 from '../../assets/hero/hero1.jpeg'
import hero2 from '../../assets/hero/hero2.jpeg'
import hero3 from '../../assets/hero/hero3.jpeg'
import { Card, CardContent } from '../ui/card'
const carouselImages = [hero1, hero2, hero3]

function HeroCorousel() {
  return (
    <div className='hidden lg:block'>
      <Carousel plugins={[Autoplay({ delay: 3000 })]}>
        <CarouselContent>
          {carouselImages.map((image, index) => (
            <CarouselItem key={index}>
              <Card>
                <CardContent className='p-2'>
                  <img src={image} alt='hero' className='w-full h-[24rem] rounded-md object-cover' />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='mx-10' />
        <CarouselNext className='mx-10' />
      </Carousel>
    </div>
  )
}
export default HeroCorousel
