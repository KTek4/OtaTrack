import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

function Side({ topAnime }) {
  return (
    <div className="content-wrap" >
    <aside>
        <nav>
            <h3>Top Animes!</h3>
            {topAnime.map((anime: {
                url: string | undefined; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; 
}) => (
                <a 
                href={anime.url} 
                target='_blank' 
                rel='noreferrer'>
                    {anime.title}
                </a>
            ))}
            <a 
            href='#' 
            target='_blank' 
            rel='noreferrer'>
                Attack on Titan
            </a>
            <a 
            href='#' 
            target='_blank' 
            rel='noreferrer'>
                Naruto
            </a>
            <a 
            href='#' 
            target='_blank' 
            rel='noreferrer'>
                One Piece
            </a>
            <a 
            href='#' 
            target='_blank' 
            rel='noreferrer'>
                Hunter x Hunter
            </a>
        </nav>
    </aside>
    </div>
  )
}

export default Side;