import Image from "next/image";
import Link from 'next/link'
type CardProps = {
  title: string;
  children: React.ReactNode;
  image?: string,
  releaseDate: string,
  link: string,
};

export const Card: React.FC<CardProps> = ({ title, children, releaseDate, link, image }) => {
  const releaseDateFormatter = new Date(releaseDate);
  return (
    <>

      <Link href={'/movie/detail/' + link}>
        <a>
          <Image src={image ?? '/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg'} alt={title} width={220} height={330} />
        </a>
      </Link>
      <div className='card-content'>
        <Link href={'/movie/detail/' + link}>
          <a>{title}</a>
        </Link>
        <span className="relase-date"> {releaseDateFormatter.toLocaleDateString()} </span>
      </div>
    </>
  );
};
