import * as React from 'react';
import styled from 'styled-components';

import GlobalLayout from '../components/common/GlobalLayout';

const AboutContainer = styled.section`
    position: absolute;
    top: 120px;
    left: 0;
    right: 0;

    .blog-title {
        text-align: center;
        font-size: 3rem;
    }
`;

const AboutPage: React.FC = (props: any) => {
    return (
        <GlobalLayout path={props.location} >
            <AboutContainer>
                <h1 className='blog-title' >About Me</h1>
            </AboutContainer>
        </GlobalLayout>
    )
};

export default AboutPage;