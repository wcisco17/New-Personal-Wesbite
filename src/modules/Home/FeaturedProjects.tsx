import { Link } from 'gatsby';
import * as React from 'react';
import { Fragment } from 'react';
import styled from 'styled-components';

import FeaturedProject from '../../components/Projects';
import theme from '../../config';
import { PurpleFields } from '../../types/homepageTypes';

export const SideProjectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 2rem;
`;


export const SeeAll = styled(Link)`
        background:${theme.colors.primary.lightRed};
        text-decoration: none;
        color:white;
        padding:${(props: { big: boolean }) => (props).big ? '20px 30px' : '10px 20px'};
        border-radius: 5px;
        cursor: pointer;
        &:hover {
            box-shadow: ${theme.other.shadow.feature.big.hover};
            transform: translateY(-5px) !important;
            transition: 0.28s;
        } 
        ${theme.media.media_SM} {
            padding: 12px;
        }
`;

interface IProps {
    thirdtitle?: string;
    featuredprojects: PurpleFields[];
    isDisplay: boolean;
};

const FeaturedProjetcs: React.FC<IProps> = ({ thirdtitle, featuredprojects, isDisplay }) => {
    return (
        <Fragment>
            {
                isDisplay && (
                    <div className="top-header">
                        <h1 className='skills-title'>{thirdtitle}</h1>
                        <SeeAll to='/projects' big={false} >See All</SeeAll>
                    </div>
                )
            }
            <SideProjectContainer>
                {
                    featuredprojects.map(({
                        link,
                        subtitle,
                        image: { url },
                        title,
                    }, id) => {
                        if (isDisplay) {
                            if (id >= 3) return;
                            return (
                                <Fragment key={id} >
                                    <FeaturedProject
                                        url={link.url}
                                        key={id}
                                        big
                                        image={url}
                                        link={link.url}
                                        subTitle={subtitle[0].text}
                                        title={title[0].text}
                                    />
                                </Fragment>
                            )
                        } else {
                            console.log(link)
                            return (
                                <Fragment key={id} >
                                    <FeaturedProject
                                        url={link.url}
                                        key={id}
                                        isDisplay={true}
                                        big
                                        image={url}
                                        link={link.url}
                                        subTitle={subtitle[0].text}
                                        title={title[0].text}
                                    />
                                </Fragment>
                            )
                        }
                    })
                }
            </SideProjectContainer>
        </Fragment>
    )
};

export default FeaturedProjetcs;