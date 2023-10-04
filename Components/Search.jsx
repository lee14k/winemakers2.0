'use client'

import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits, Highlight } from 'react-instantsearch-dom';

const searchClient = algoliasearch('ZNVM513MG7', '490f9acd2e46f97227da3e1b2c3ad6e5');

function Hit(props) {
  return (
    <div>
      <a href={props.hit.url} target="_blank" rel="noopener noreferrer">
        <Highlight attribute="name" hit={props.hit} />
      </a>
    
    </div>
  );
}


function Search() {
  return (
    <InstantSearch searchClient={searchClient} indexName="pdfs">
      <SearchBox />
      <Hits hitComponent={Hit} />
    </InstantSearch>
  );
}

export default Search;
