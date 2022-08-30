import { fetchUpComingMovieList } from "@redux/slices/upcoming";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Cards } from "@components/cards";

const UpComing = (props : any) => {
    const dispatch = useDispatch();
    const upComingMovies = useSelector((state: any) => state.upcoming.upcommingMovie);
    const upComingMovieStatus = useSelector((state: any) => state.upcoming.status);

    useEffect(() => {
        if (upComingMovieStatus === 'idle') {
            dispatch(fetchUpComingMovieList('?language=tr-TR'));
        }
    }, [dispatch, upComingMovieStatus])

    if (upComingMovieStatus === 'succeeded') {

        return (
            <>
                <Cards title='Yakında Vizyona Girecek Filmler' pagination={props?.pagination ?? true}  movie={upComingMovies} /> 
            </>
        );
    }
    else if (upComingMovieStatus === 'failed') {
        return (
            <>
                Bir hata oluştur lütfen tekrar deneyiniz.
            </>
        )
    }
        return (
            <>
                <div className="loading">
                    <span>Loading</span>
                </div>
            </>
        )
    

}

export default UpComing;