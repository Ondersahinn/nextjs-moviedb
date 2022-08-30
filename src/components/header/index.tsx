import Search from '@components/search';
import  Link  from 'next/link'

interface ISearch {
    searchResultVisible: boolean,
}

const Header = ({searchResultVisible} : ISearch) => {
    return (
        <div className="header-full-part">
            <div className="header-normal-part">
                <Link href='/'>
                    <img src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg' 
                    alt='logo' width={100} height={60} />
                </Link>
                <Search searchResultVisible={searchResultVisible} />
                <h1><span>TTG </span>Case</h1>
            </div>
        </div>
    )
}

export default Header;