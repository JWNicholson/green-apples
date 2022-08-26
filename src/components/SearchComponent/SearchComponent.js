import React from 'react';

// import { useDispatch } from 'react-redux';
//import { getMovies } from '../../reduxStore/moviesSlice';

import { Container } from 'react-bootstrap';

export default function SearchBox() {
  //  query typed in the search field
  // const [query, setQuery] = useState(''); 
  // const dispatch = useDispatch();

  return (
    <>
      <Container>
        <h4>Search for a movie title</h4>

        <div>
          {/* <input
              type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                variant="outlined"
                size="small"
              /> */}
        </div>
        <div></div>
      </Container>
    </>
  );
}
