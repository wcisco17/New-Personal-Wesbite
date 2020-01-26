import { graphql, useStaticQuery } from 'gatsby';
import React, { Fragment } from 'react';

export interface Node {
    author: string;
    en: string;
    id: string;
}

export interface AllRandomQuoteGenerator {
    nodes: Node[];
}

export interface RandomData {
    allRandomQuoteGenerator: AllRandomQuoteGenerator;
}

export interface RandomQuoteData {
    data: RandomData;
}

const Quote = () => {
    const data = useStaticQuery(famousQuote);
    const { nodes: quote } = (data as RandomData).allRandomQuoteGenerator
    return (
        <Fragment>
            <p style={{ fontWeight: 'bold' }} >Quote of the Day: {quote[0].en}</p>
            <p >Author: {quote[0].author}</p>
        </Fragment>
    )
}

export default Quote

export const famousQuote = graphql`
query FamousQuote {
  allRandomQuoteGenerator {
    nodes {
      author
      en
      id
    }
  }
}
`;