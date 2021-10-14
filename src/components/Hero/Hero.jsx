import Button from '../Button/Button';
import Card from '../Card/Card';
import { Fade, Heading, Services, StyledHero } from './Hero.styled';
import { RiStackLine } from 'react-icons/ri';
import { MdOutlineColorLens } from 'react-icons/md';
import { HiOutlineFingerPrint } from 'react-icons/hi';
import { BiCommand } from 'react-icons/bi';

const Hero = () => {
  return (
    <StyledHero>
      <Fade />
      <Heading className='container'>
        <h1>One Page Bootstrap Website Template</h1>
        <h3>We are team of talented designers</h3>
        <Button large text='Get Started' />
      </Heading>
      <Services className='container'>
        <Card
          icon={<RiStackLine />}
          title='Lorem Ipsum'
          body='Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi'
        />
        <Card
          icon={<MdOutlineColorLens />}
          title='Sed ut perspiciatis'
          body='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore'
        />
        <Card
          icon={<BiCommand />}
          title='Magni Dolores'
          body='Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia'
        />
        <Card
          icon={<HiOutlineFingerPrint />}
          title='Nemo Enim'
          body='At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis'
        />
      </Services>
    </StyledHero>
  );
};

export default Hero;
