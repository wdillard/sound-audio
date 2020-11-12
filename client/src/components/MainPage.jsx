import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchForm from './SearchForm';
import SongBox from './SongBox';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';

const MainPage = () => {
  const [search, setSearch] = useState([]);
  const [apiData, setApiData] = useState([]);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://www.songsterr.com/a/ra/songs/byartists.json?artists=audioslave,%20soundgarden,%22Chris%20Cornell%22`
      );

      setApiData(response.data);
    };
    fetchData();
  }, []);

  const filteredSongs = apiData.filter((song) => 
    song.title.toLowerCase().includes(search)
  );

    return (
      <>
        <div className="search">
          <SearchForm serch={search} onChange={handleChange} />
        </div>
        <Row>
          {filteredSongs && filteredSongs.map((song) => {
            console.log(song);
            return (
              <div key={song.id}>
                <SongBox
                key={song.id}
                id={song.id}
                title={song.title}
                artist={song.artist.name}
                />
              </div>
            )
          })}
        </Row>
      </>
    );
};
export default MainPage;