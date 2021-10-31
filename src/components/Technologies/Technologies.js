import React from 'react';
import { DiFirebase, DiReact, DiZend,DiJava, DiPython, DiJavascript, DiAndroid } from 'react-icons/di';
import {SiCplusplus} from 'react-icons/si'
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
 <Section id="tech">
   <SectionDivider/>
   <SectionTitle>Technologies</SectionTitle>
   <SectionText>
     I have worked with a range of technologies both for my academic and personal projects.
   </SectionText>

   <List>
     <ListItem>
       <ListContainer>
         <ListTitle>Language</ListTitle>
          <ListParagraph>
            <ul>
             <li size="6em"><SiCplusplus size="1.5em"/>C++</li>  
             <li size="6em"><DiJava size="1.5em"/>Java</li>
             <li size="6em"><DiPython size="1.5em"/>Python</li>
             <li size="6em"><DiJavascript size="1.5em"/>Javascript</li>      
            </ul>
          </ListParagraph>
       </ListContainer>
     </ListItem>

     <ListItem>
       <ListContainer>
         <ListTitle>Frameworks</ListTitle>
          <ListParagraph>
            <ul>
              <li size="6em"><DiAndroid size="2em"/>Android Studio(did a academic project)</li>
              <li size="6em">Java FX(did two academic projects)</li>
            </ul>
          </ListParagraph>
       </ListContainer>
     </ListItem>

   </List>
 </Section>
);

export default Technologies;
