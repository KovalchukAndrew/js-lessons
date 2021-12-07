import React, {useState} from 'react';
import API from './API';
import './lesson_3';

type Response = Array<FilmType>

type FilmType = {
    Title: string,
    Year: string,
    imdbID: string,
    Type: string,
    Poster: string
}

const Lesson3 = () => {
    const [searchName, setSearchName] = useState('');
    const [serachResult, setSerachResult] = useState<Response>([]);
    const [searchNameByType, setSearchNameByType] = useState('');
    const [serachResultByType, setSerachResultByType] = useState('');


    const searchFilm = () => {
        API.searchFilmsByTitle(searchName)
            .then(response => {
               //response.data.Response === "True" ?
                    setSerachResult(response.data.Search)
                    //setSerachResult("Error")

                                //console.log(response.data)

            })
            .catch(err => {
                if (err) {
                    alert("Error")
                }

            })
    };

    const searchByType = (e: React.MouseEvent<HTMLButtonElement>) => {
        const type: string = e.currentTarget.dataset.t ? e.currentTarget.dataset.t : '';
        API.searchFilmsByType(searchNameByType, type)
    }

    return (
        <div>
            <h1>Promises</h1>
            <div>
                <h3><p>Search by name:</p></h3>
                <input type="text" value={searchName} onChange={(e) => setSearchName(e.currentTarget.value)}/>
                <button onClick={searchFilm}>Search</button>
                <div>
                    {serachResult.map(el => <img src={el.Poster} alt=""/> )}

                </div>
            </div>

            <div>
                <h3><p>Search by type:</p></h3>
                <input type="text" value={searchNameByType}
                       onChange={(e) => setSearchNameByType(e.currentTarget.value)}/>
                <button onClick={searchByType} data-t='movie'>Movie</button>
                <button onClick={searchByType} data-t='series'>Series</button>
                <div>
                    {serachResultByType}
                </div>
            </div>
        </div>
    );
}
export default Lesson3;