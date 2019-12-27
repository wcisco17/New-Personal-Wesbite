import * as React from 'react';
import { Fragment } from 'react';

import FeaturedProject from '../../components/Projects';
import { Designproject } from '../../types/design';
import { SeeAll, SideProjectContainer } from './FeaturedProjects';

interface IProps {
    fourthtitle: string;
    designprojects: Designproject[];
    isEmpty?: boolean;
};

const DesignProjects: React.FC<IProps> = ({ fourthtitle, designprojects, isEmpty }) => {
    return (
        <Fragment>
            {
                isEmpty ? null : (
                    <div className="top-header">
                        <h1 className='skills-title'>{fourthtitle}</h1>
                    </div>
                )
            }
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
                                url={link.url}
                                big={false}
                                key={id}
                                title={title[0].text}
                                image={image.url}
                                link={'link'}
                                subTitle={subtitle[0].text}
                            />
                        )
                    })
                }
                <div className="align-center">
                    <SeeAll to={'/design'} big>See More</SeeAll>
                </div>
            </SideProjectContainer>
        </Fragment>
    )
};

export default DesignProjects;