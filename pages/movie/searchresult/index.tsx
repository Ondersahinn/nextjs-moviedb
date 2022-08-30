import { useSelector } from "react-redux";
import { Cards } from "@components/cards";
import Header from "@components/header";
import { useEffect } from "react";
import {useRouter} from "next/router";

const SearchResult = () => {
    const router = useRouter()
    const movies = useSelector((state: any) => state.movie.movies);
    const movieStatus = useSelector((state: any) => state.movie.status);

    useEffect(() => {
        if(movieStatus === 'idle') {
            router.push('/')
        }
    })

    if (movieStatus === 'succeeded') {
        return (
            <>
                <div className="page-full-part">
                    <div className="page-normal-part">
                        <Header searchResultVisible={false} />
                        <Cards title='Arama Sonuçları' movie={movies} pagination={true} />
                    </div>
                </div>
            </>
        );
    }
    else if (movieStatus === 'failed') {
        return (
            <>
             <div className="page-full-part">
                    <div className="page-normal-part">
                        <Header searchResultVisible={false} />
                        <span>Bir hata oluştur lütfen tekrar deneyiniz.</span>
                    </div>
                </div>
                
            </>
        )
    }
    return (
        <>
           <div className="page-full-part">
                    <div className="page-normal-part">
                        <Header searchResultVisible={false} />
                       <span className="loading">Loading</span>
                    </div>
                </div>
        </>
    )


}

export default SearchResult;