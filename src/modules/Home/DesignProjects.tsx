import * as React from 'react';
import { Fragment } from 'react';

import FeaturedProject from '../../components/Projects';
import { PurpleFields } from '../../types/homepageTypes';
import { SeeAll, SideProjectContainer } from './FeaturedProjects';

interface IProps {
    fourthtitle: string;
    designprojects: PurpleFields[];
};

const DesignProjects: React.FC<IProps> = ({ fourthtitle, designprojects }) => {
    return (
        <Fragment>
            <div className="top-header">
                <h1 className='skills-title'>{fourthtitle}</h1>
            </div>
            <SideProjectContainer>
                {
                    designprojects.map(({
                        title,
                        image,
                        link,
                        subtitle,
                    }, id) => {
                        if (id >= 3) return;
                        return (
                            <FeaturedProject
                                big={false}
                                key={id}
                                title={title[0].text}
                                image={image.url}
                                link={link.url}
                                subTitle={subtitle[0].text}
                            />
                        )
                    })
                }
                <div className="align-center">
                    <SeeAll to={'/'} big>See More</SeeAll>
                </div>
            </SideProjectContainer>
        </Fragment>
    )
};

export default DesignProjects;