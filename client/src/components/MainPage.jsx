import React, { useState, useEffect } from 'react';
import axios from 'axios';

import SearchForm from './SearchForm';
import SongBox from './SongBox';
import Row from 'react-bootstrap/Row';

const MainPage = () => {
  const [search, setSearch] = useState([]);
  const [apiData, setApiData] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearch(event.target.elements.searchbar.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      let response = await axios.get(
        `https://www.songsterr.com/a/ra/songs/byartists.json?artists=audioslave,%20soundgarden,%22Chris%20Cornell%22`
      );

      setApiData(response.data);
    };
    fetchData();
  }, [search]);

    return (
        <>
            <div>
                <SearchForm handleSubmitProp={handleSubmit} />
            </div>
            <Row>
                {apiData.songs &&
                apiData.songs.map((song) => {
                    console.log(song);
                    return (
                    <SongBox
                        key={song.id}
                        id={song.id}
                        title={song.title}
                        artist={song.artist.name}
                    />
                    );
                })}
            </Row>
        </>
    );
};
export default MainPage;