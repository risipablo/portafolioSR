
import { Box, Text } from "@chakra-ui/react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export function Experencia(){

    const exps = [
        {
            place:"Casa vita",
            location:"Cipolletti",
            description:"Atención en consultorios, loren dasdafsdgadahrafdadfadf",
            years: "2023- Actualidad"
        },
        {
            place:"Siete Sentidos",
            location:"Roca",
            description:"Atención en consultorios, loren dasdafsdgadahrafdadfadf",
            years: "2023- Actualidad"
        },
        {
            place:"Fundacion Alas",
            location:"Cipolletti",
            description:"Atención en consultorios, loren dasdafsdgadahrafdadfadf",
            years: "2023- Actualidad"
        }
    ]

    return(
        <Box className="exp" fontFamily="Montserrat" > 
        <Text as="h2"  fontSize="1.3rem"  m="2rem auto" p="1rem" fontWeight="700">
            Te comporto mi experencia de trabajo a lo largo de estos años
        </Text>
            <VerticalTimeline>
                {exps.map((item,index)=> (
                    <VerticalTimelineElement
                        key={index}
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#0D6BAE', color: '#fff', }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)'}}
                        iconStyle={{ background: '#0D6BAE', color: '#fff' }}
                    >
                        <Text as="h3" className="vertical-timeline-element-title"  fontSize="1.4rem" fontWeight="600">{item.place}</Text> 
                        <Text as="h4" className="vertical-timeline-element-subtitle" fontSize="1rem">{item.location}</Text> 
                        <Text>{item.description}</Text> 
                        <Text> {item.years}</Text>
                    </VerticalTimelineElement>
                ))}

            </VerticalTimeline>
        </Box>
    )
}
