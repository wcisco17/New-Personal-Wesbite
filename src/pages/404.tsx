import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

import GlobalLayout from '../components/common/GlobalLayout';
import { ContactButton } from '../components/Navigation';

const notFound = require('../images/page-not-found-2.png');

const BackgroundErrorPage = styled.div`
  height: 100vh;
  h1 {
    text-align: center;
  }
  img {
    height: 70vh;
    margin: 0 auto;
    display: block;
  }

  .back-home {
    margin: 0 auto;
    display: block;
  }
`;

const NotFoundPage: React.SFC = (props: any) => {
   console.log("Props", props)
   return (
      <GlobalLayout path={props.location} >
         <BackgroundErrorPage>
            <h1>Sorry, page not found</h1>
            <img src={notFound} alt="..." />
            <Link to='/' style={{ textDecoration: 'none' }} >
               <ContactButton
                  onClick={() => props.navigate('/')}
                  className='back-home' big>
                  Go back Home
            </ContactButton>
            </Link>
         </BackgroundErrorPage>
      </GlobalLayout>
   )
}

export default NotFoundPage
