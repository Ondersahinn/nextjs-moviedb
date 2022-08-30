import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { getMovieDetailService, getSmiilarMovie } from "src/api/service/generalService";
import Image from "next/image";
import Header from "@components/header";
import Head from "next/head";
import { Cards } from "@components/cards";
import UpComing from "@components/upcoming";

const MovieDetail: React.FC = () => {
    const router = useRouter();
    const moviRef: any = useRef();
    const [loading, setLoading]: any = useState(false);
    const [movie, setMovie]: any = useState({});
    const [recommendation, setRecommendation]: any = useState({});

    useEffect(() => {
        document.body.classList.add('detail');
        if (moviRef.current !== router.query.id) {
            moviRef.current = router.query.id;
            getMovieDetail();
        }

    })

    useEffect(() => {
        return () => {
            document.body.classList.remove('detail')
        }
    })

    const getMovieDetail = async () => {
        if (!!router.query.id) {
            setLoading(true);
            const res = await getMovieDetailService(router.query.id + '?language=tr-TR');
            const result = await getSmiilarMovie(router.query.id);
            if (!res.errStatus) {
                setMovie(res.data)
                setLoading(false);
            }
            if (!result.errStatus) {
                setRecommendation(result.data)
            }
        }

    }

    if (!loading) {
        return (
            <>
                <Head>
                    <title> {movie?.title} </title>
                    <meta title={movie?.title} />
                    <meta content={movie?.overview} />
                </Head>
                <div className="page-full-part">
                    <Header searchResultVisible={true}/>
                    <div className="detail-full-part" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie?.backdrop_path}` }}>
                        <div className="detail-normal-part" >
                            <Image src={movie?.poster_path ?? 'no-image.png'} alt={movie?.title} width={300} height={400} />
                            <div className="movie-desc">
                                <h1> {movie?.title} </h1>
                                <span>
                                    <span>{movie?.release_date}</span>
                                    <span> ({movie?.original_language?.toUpperCase()}) </span>
                                    <ul>
                                        {movie?.genres?.map((e: any) => {
                                            return (
                                                <li key={e.id}>
                                                    {e.name}
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </span>
                                <div className="overview">
                                    <p>Özet</p>
                                    <p>
                                        {movie?.overview}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {Object.keys(recommendation).length > 0 ?
                        <Cards title='Benzer Filmler' movie={recommendation} pagination={false} />
                        : ''}
                    <div className="detail-upcoming-part">
                        <UpComing pagination={false} />
                    </div>

                </div>
            </>
        );
    }
    return (
        <>
            <Head>
                <title> {movie?.title} </title>
                <meta title={movie?.title} />
                <meta content={movie?.overview} />
            </Head>
            <div className="page-full-part">
                <Header searchResultVisible={true} />
                <span className="loading">Loading </span>
            </div>
        </>

    )

}

export default MovieDetail;