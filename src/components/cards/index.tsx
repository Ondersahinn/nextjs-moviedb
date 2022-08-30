
import { Card } from "@components/card";
import Pagination from "@components/pagination";
import { useSelector } from "react-redux";

interface ICardProp {
    title: string,
    movie: any,
    pagination: boolean,
}

export const Cards = ({ title, movie, pagination }: ICardProp) => {

    const pageIndex = useSelector((state: any) => state.pagination.pageIndex)


    if (movie?.results.length > 0) {
        return (
            <>
                <div className="upcoming-part">
                    <h1> {title} </h1>
                    <div className='movie-list'>
                        {movie?.results.map((plugin: any) => (
                            <div key={plugin.id} className='cards'>
                                <Card link={plugin.id} image={plugin.poster_path} releaseDate={plugin.release_date} title={plugin.title}>{plugin.overview}</Card>
                            </div>
                        ))}
                    </div>
                </div>
                {pagination ?
                    <Pagination total={movie?.total_pages} pageSize={20} pageIndex={pageIndex} />
                    : ''}
            </>
        );
    }
    return (
        <>
            <div className="upcoming-part">
                Veri Bulunamadı.
            </div>
        </>
    )
};
