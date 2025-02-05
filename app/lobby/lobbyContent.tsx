'use client';

import AllContent from "./content/allContent";
import FavouriteContent from "./content/favouriteContent";
import ElectricContent from "./content/electricContent";
import ArcadeContent from "./content/arcadeContent";
import ChessCardContent from "./content/chessCardContent";
import PrizePoolContent from "./content/prizePoolContent";
 

export default function LobbyContent({activeIndex} : {activeIndex: number}) {


  return (
    <div className="w-full px-3 mt-[225px]" >
       { activeIndex == 0 && < AllContent /> }
       { activeIndex == 1 && < FavouriteContent /> }
       { activeIndex == 2 && < ElectricContent /> }
       { activeIndex == 3 && < ArcadeContent /> }
       { activeIndex == 4 && < ChessCardContent /> }
       { activeIndex == 5 && < PrizePoolContent /> }
    </div>
  );
}
