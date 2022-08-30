import { useDispatch } from "react-redux";
import { handlePageIndexChange } from "@redux/slices/pagination";
import { fetchUpComingMovieList } from "@redux/slices/upcoming";

interface IProps {
    total: number,
    pageSize: number,
    pageIndex: number,
}
const Pagination = ({ total, pageIndex}: IProps) => {

    const dispatch = useDispatch();

    let pageList = [];
    if(total > 20) {
        for (let index = 1; index <= 20; index++) {
            pageList.push(
                <li onClick={() => handlePaginationChange(index)} key={index} className={pageIndex === index ? 'active' : ''}> {index} </li>
            )
        }
        
    }
    else {

        for (let index = 1; index <= total; index++) {
            pageList.push(
                <li onClick={() => handlePaginationChange(index)} key={index} className={pageIndex === index ? 'active' : ''}> {index} </li>
            )
    
        }
    }

    const handlePaginationChange = (index: number) => {
        if (!(index > total) && index > 0) {
            dispatch(handlePageIndexChange(index));
            dispatch(fetchUpComingMovieList('?page='+index))
        }
    }

    return (
        <>
            <ul className="pagination">
                <li className='pagination-desc' onClick={() => handlePaginationChange(pageIndex - 1)}> Prev</li>
                {pageList}
                <li className='pagination-inc' onClick={() => handlePaginationChange(pageIndex + 1)}>Next</li>
            </ul>
        </>
    );
};

export default Pagination;