import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import AcademicProjects from '../components/Projects/academic/AcademicProjects';
import PersonalProjects from '../components/Projects/personal/PersonalProjects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <Layout>
      <Section grid> 
        <Hero />
         <BgAnimation /> 
       </Section> 
      <AcademicProjects />
      <PersonalProjects/>
      <Technologies />
      <Timeline />
      <Acomplishments />
    </Layout>
  );
};

export default Home;
