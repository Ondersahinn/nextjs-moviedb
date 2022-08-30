import { fetchSearchMovieList, handleRecentSearchChange, handleDeleteRecentSearch } from "@redux/slices/movie";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/router'
import { useRef, useState } from "react";

interface ISearch {
    searchResultVisible: boolean,
}

const Search = ({searchResultVisible} : ISearch) => {
    const router = useRouter()
    const dispatch = useDispatch();
    const searchResultRef: any = useRef();
    const movieList = useSelector((state: any) => state.movie.movies);
    const [searchValue, setSearchValue] = useState('');
    const [searchresultVisible, setSearchResultVisible] = useState(false);
    const recentSearch = useSelector((state: any) => state.movie.recentSearches)

    const handleSearchChange = (e: any) => {
        setSearchResultVisible(true);
        let queryParams = '?language=tr-TR&page=1&include_adult=false'
        if (!!e.target.value) {
            setSearchValue(e.target.value);
            setTimeout(() => {
                queryParams = queryParams + '&query=' + e.target.value;
                dispatch(fetchSearchMovieList(queryParams));
            }, 1000);
        }


    }
    const handleDeleteClik = () => {
        dispatch(handleDeleteRecentSearch());

    }
    const handleSearchResultShow = () => {
        setSearchResultVisible(false);
    }

    const handleSearchClick = () => {
        setSearchResultVisible(false);
        dispatch(handleRecentSearchChange(searchValue));
        router.push('/movie/searchresult');
    }

    return (
        <div className="search-full-part">
            <div className="search-input">
                <input type='text' onKeyPress={handleSearchChange} onChange={handleSearchChange} />
                <button onClick={handleSearchClick}> Ara </button>
            </div>

            {!!movieList?.results && searchResultVisible ?
                <>
                    <div className="search-result" ref={searchResultRef} style={{ display: searchresultVisible ? 'block' : 'none' }}>
                        <div className="close-button">
                            <button onKeyDown={handleSearchResultShow} onClick={handleSearchResultShow}>X</button>
                            <button onClick={handleDeleteClik}> Aramaları Temizle</button>
                        </div>
                        <span className="recent-title">Geçmiş Aramalar</span>
                        {!!recentSearch ?
                            <ul className="recent-search">
                                {recentSearch.map((e: string, index: number) => {
                                    return (
                                        <li key={e + index}>
                                            {e}
                                        </li>
                                    )
                                })}
                            </ul>
                            : ''}
                        <ul className="movie-list">
                            {movieList?.results.map((e: any) => {
                                return (
                                    <Link href={'/movie/detail/' + e.id} key={'movie' + e.id}>
                                        <li>
                                            <Image src={e.poster_path ?? 'no-image.jpg'} alt={e.title} width={100} height={120} />
                                            <span className="title">
                                                <span>{e.title}</span>
                                                <span> {e.release_date} </span>
                                            </span>
                                        </li>
                                    </Link>
                                )
                            })}
                        </ul>
                    </div>
                </>
                : ''
            }

        </div>
    )
}

export default Search;