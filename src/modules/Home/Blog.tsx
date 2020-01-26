import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';
import { Fragment } from 'react';

import BlogPost from '../../components/BlogPost';
import { PrismicData } from '../../types/pill';
import { SeeAll, SideProjectContainer } from './FeaturedProjects';

interface IProps {
    fithTitle: string;
};

const BlogShowcase: React.FC<IProps> = (props) => {
    const data = useStaticQuery(limitQuery);
    const { nodes: blog } = (data as PrismicData).allPrismicBlogpost;
    return (
        <Fragment>
            <div className="top-header">
                <h1 className='skills-title'>{props.fithTitle}</h1>
                <SeeAll to='/blog' big={false} >See All</SeeAll>
            </div>
            <Fragment>
                <SideProjectContainer>
                    {
                        blog.map(({ data: {
                            title,
                            date,
                            pill,
                            image,
                        } }, key) => {
                            if (key >= 2) return;
                            return (
                                <BlogPost
                                    key={key}
                                    title={title.text}
                                    date={date.text}
                                    pill={pill}
                                    src={image.url}
                                    alt={image.alt}
                                />
                            )
                        })
                    }
                </SideProjectContainer>
            </Fragment>
        </Fragment>
    )
};

export default BlogShowcase;

export const limitQuery = graphql`
    {
      allPrismicBlogpost(limit: 2) {
        nodes {
          data {
            text {
              text
            }
            title {
              text
            }
            image {
              alt
              url
            }
            date {
              text
            }
            pill
            keytext
          }
        }
      }
    }
`;