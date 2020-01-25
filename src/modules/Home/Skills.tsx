import * as React from 'react';
import { Fragment } from 'react';
import styled from 'styled-components';

import theme from '../../config';
import { Secondtitle, Skill } from '../../types';

const SkillsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;

    .skill-content {
        h4 {
            text-align: center;
        }
        img {
            width: 250px;
            ${theme.media.media_MD} {
                width: 280px;
                display: block
            }
        }
    }

    ${theme.media.media_MD} {
        flex-direction: column; 
    }
`;

interface ISkillsProps {
    secondtitle: Secondtitle
    skillsData: Skill[];
};

const Skills: React.FC<ISkillsProps> = ({ secondtitle, skillsData }) => {
    return (
        <Fragment>
            <div className="top-header">
                <h1 className='skills-title' >{secondtitle.text}</h1>
            </div>
            <SkillsContainer>
                {
                    (skillsData).map((values, key) => {
                        const { text1, image: { url } } = values;
                        return (
                            <div key={key} className="skill-content">
                                <img src={url} alt="..." />
                                <h4>{text1.text}</h4>
                            </div>
                        )
                    })
                }
            </SkillsContainer>
        </Fragment>
    )
};

export default Skills;