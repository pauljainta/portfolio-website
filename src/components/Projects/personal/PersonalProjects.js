import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from '../ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../../styles/GlobalComponents';
import { personalprojects } from '../../../constants/constants';

const PersonalProjects = () => (
  <Section nopadding id="personalprojects">
    <SectionDivider/>
      <SectionTitle main>Personal Projects </SectionTitle>
      <GridContainer>
        {personalprojects.map((project) =>  (
         <BlogCard key={project.id}>
           <Img src={project.image}/>
           <TitleContent>
             <HeaderThree title>{project.title}</HeaderThree>
             <Hr/>
           </TitleContent>
         
         <CardInfo>{project.description}</CardInfo>
         <div>
           <TitleContent>Stack</TitleContent>
           <TagList>
             {project.tags.map((tag,i )=>(
               <Tag key={i}>{tag}</Tag>
            ))}
           </TagList>
         </div>
         <UtilityList>
           <ExternalLinks href={project.source}>Source Code</ExternalLinks>

           {project.id==3 && 
              <ExternalLinks href={project.visit}>Visit</ExternalLinks> }
         </UtilityList>
         </BlogCard>

        ))}
      </GridContainer>
  </Section>
);

export default PersonalProjects;