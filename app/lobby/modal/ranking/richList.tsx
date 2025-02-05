import RankingModalItem from "@/components/lobby/rankingModalItem";
import Image from "next/image";

const modalDataList = [
    {
        'rank' : 1,
        'avatar' : <Image src="/images/guild/avatar.png" alt="footer" width={45} height={45} />,
        'text': "好玩一直玩",
        'point': "211,803,456"
    },
    {
        'rank' : 2,
        'avatar' : <Image src="/images/guild/avatar.png" alt="footer" width={45} height={45} />,
        'text': "好玩一直玩",
        'point': "211,803,456"
    },
    {
        'rank' : 3,
        'avatar' : <Image src="/images/guild/avatar.png" alt="footer" width={45} height={45} />,
        'text': "好玩一直玩",
        'point': "211,803,456"
    },
    {
        'rank' : 4,
        'avatar' : <Image src="/images/guild/avatar.png" alt="footer" width={45} height={45} />,
        'text': "好玩一直玩",
        'point': "211,803,456"
    },
    {
        'rank' : 5,
        'avatar' : <Image src="/images/guild/avatar.png" alt="footer" width={45} height={45} />,
        'text': "好玩一直玩",
        'point': "211,803,456"
    }
]

export default function RichList() {

    return (
        <>
        { modalDataList.map((data, index) => 
                              
            <RankingModalItem key={index} rank={data.rank} avatar={data.avatar} text={data.text} point={data.point} />
        )}
        </>
    );
}
