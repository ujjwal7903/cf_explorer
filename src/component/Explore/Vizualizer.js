import  React , {useState , useEffect}  from "react";
import QuestionCount from '../Cards/vizCards/QuestionCount';
import ContestCount from "../Cards/vizCards/ContestCount";
import RatingChart from '../Cards/vizCards/RatingChart';
import SolvedTagsCharts from "../Cards/vizCards/SolvedTagsCharts";
import SolvedLevelBar from "../Cards/vizCards/SolvedLevelBar";
import SolvedRatingChart from "../Cards/vizCards/SolvedRatingChart";
import { useHistory } from 'react-router-dom';

// Question Count
// Contest count

// No. of contest , best rank ,worst rank , max up , max down
// rating line graph
// verdicts
// Tags pie chart
// levels (A,B ... bar graph)
// problem ratings (bar graph)
// heat map

/*
{
    "contestId": 1284,
    "contestName": "Hello 2020",
    "handle": "umang_us",
    "rank": 7904,
    "ratingUpdateTimeSeconds": 1578148500,
    "oldRating": 1307,
    "newRating": 1210
}
*/

// maxup maxdown remaining

const handle = localStorage.getItem('user-name');

const Vizualizer = () => {

    const [rating,setRating] = useState([]);
    const [ratingLable,setRatingLable] = useState([]);

    const [solvedTags,setSolvedTags] = useState([]);
    const [solvedTagsLabel,setSolvedTagsLabel]=useState([]);

    const [solvedLevels,setSolvedLevels] = useState([]);
    const [solvedLevelsLabel , setSolvedLevelsLabel] = useState([]);

    const [solvedRatings,setSolvedRatings]=useState([]);
    const [solvedRatingsLabel,setSolvedRatingsLabel]=useState([]);

    const [BestRank , setBestRank] = useState(10000);
    const [WorstRank , setWorstRank] = useState(0);
    const [contestCount , setContestCount] = useState(0);
    const [maxUp,setMaxUp] = useState(0);
    const [maxDown , setMaxDown] = useState(0);

    const [Tried,setTried] = useState(0);
    const [solved,setSolved] = useState(0);

    const [currRating , setCurrRating] = useState(0);
    const [maxRating , setMaxRating] = useState(0);

    const [userHandle , setUserHandle] = useState("");

    const history = useHistory();

    useEffect(() => {
        
        if(handle==="")
        {
            history.push("/");
        }


        fetchRating();
        fetchProblems();
    },[]);


    const fetchRating = async () =>{
        try{
            const response = await fetch("https://codeforces.com/api/user.rating?handle="+handle);
            const tmpData = await response.json();
    ///        console.log(tmpData);
            

            if(tmpData.status=="OK")
            {
                const ratingData=[];
                const ratingDataLabel=[];
                const best=0;
                const worst=200300;

                tmpData.result.map(item=>{
                    ratingData.push(item.newRating);
                    ratingDataLabel.push(item.contestId);
                    const Rank = item.rank;
                    
                    if(best>Rank)
                    {
                        best = Rank;
                    }
                    if(worst<Rank)
                    {
                        worst = Rank;
                    }
                    

                })
                setRating(ratingData);
                setRatingLable(ratingDataLabel);
                setWorstRank(worst);
                setContestCount(ratingDataLabel.length);

           //     console.log(BestRank);
            //    console.log(WorstRank);
                    console.log(maxUp);
                    console.log(maxDown);

                ratingData.map(x=>{
                    setCurrRating(x);
                })

                setMaxRating(Math.max(...ratingData));

            }

        }
        catch(error){
            console.log("error" , error);
        }
    }

    const fetchProblems = async () =>{

        const response = await fetch("https://codeforces.com/api/user.status?handle="+handle);
        const tmpData = await response.json();
      //  console.log(tmpData);

        const solvedSet = new Set();
        const TriedSet =  new Set();
        
        const TagMap = new Map();
        const RatingMap = new Map();
        const LevelMap = new Map();


        if(tmpData.status=="OK")
        {
            tmpData.result.map(item=>{
      
                const str = `${item.problem.contestId}${item.problem.index}`; 
                str.toString();
                TriedSet.add(str);
                if(!solvedSet.has(str))
                {
                    if(item.verdict === "OK") {

                        // get the data from here
                       // console.log(item);
                        const index = item.problem.index;
                        const tags = item.problem.tags;
                        const problemRating = parseInt(item.problem.rating);

                        

                        // --------- ---tags -----------
                        tags.map(tag=>{
                            if(TagMap.has(tag))
                            {
                                const x=TagMap.get(tag);
                                TagMap.set(tag,x+1);
                            }
                            else
                            {
                                TagMap.set(tag,1);
                            }
                        });

                        //-------------levels-------------
                        if(LevelMap.has(index))
                        {
                            const x=LevelMap.get(index);
                            LevelMap.set(index,x+1);
                        }
                        else
                        {
                            LevelMap.set(index,1);
                        }

                        //----------ratings------------------
                        if(RatingMap.has(problemRating))
                        {
                            const x=RatingMap.get(problemRating);
                            RatingMap.set(problemRating,x+1);
                        }
                        else
                        {
                            RatingMap.set(problemRating,1);
                        }

                        solvedSet.add(str);
                    }

                }
                
            
            })

        }

        //-------------------Tags------------------------------
        const TagArray = [...TagMap];
        TagArray.sort();
        const TagLable=[];
        const TagData=[];
        TagArray.map(item=>{
            TagLable.push(item[0]);
            TagData.push(item[1]);
        });
        setSolvedTags(TagData);
        setSolvedTagsLabel(TagLable);


        //-------------------- Level ----------------------------------
        const LevelArray = [...LevelMap];
        LevelArray.sort();
      //  console.log(LevelArray);
        const LevelLable=[];
        const LevelData=[];
        LevelArray.map(item=>{
            LevelLable.push(item[0]);
            LevelData.push(item[1]);
        });
        setSolvedLevels(LevelData);
        setSolvedLevelsLabel(LevelLable);
        console.log(LevelLable);

        //-----------------Rating ------------------------------
            //  console.log(RatingMap);
        const RatingArray = [...RatingMap];
        RatingArray.sort();
        const RatingLable=[];
        const RatingData=[];
        RatingArray.map(item=>{
            RatingLable.push(item[0]);
         //   console.log(item[0]);
            RatingData.push(item[1]);
        });

        setSolvedRatings(RatingData);
        setSolvedRatingsLabel(RatingLable);

        const solvedQues = solvedSet.size;
        setSolved(solvedQues);

        const TriedQues = TriedSet.size;
        setTried(TriedQues);

        

    }


    return (
        <div className="container vizualizer">
            <h1 style={{textAlign:'center'}}>Vizualizer</h1>
            <div className="justify-content-center" style={{display:'flex'}}>
            <h2 style={{color:'white' , padding:'20px'}}>Max Rating: {maxRating}</h2>
            <h2  style={{color:'white',padding:'20px'}}>Current Rating: {currRating}</h2>
            </div>
            <div className="row">
              
                <div className="col">
                    <QuestionCount tried={Tried} solved={solved} />
                </div>
              
            </div>

            <div style={{paddingTop:'20px',paddingBottom:'10px'}}>
                <h2 style={{color:'white',textAlign:'center'}}>Rating of {handle}</h2>
                <RatingChart data={rating} labels={ratingLable} />
            </div>
            <div style={{paddingTop:'20px',paddingBottom:'10px'}}>
                <h2 style={{color:'white',textAlign:'center'}}>Tags of {handle}</h2>
                <SolvedTagsCharts data={solvedTags} labels={solvedTagsLabel} />
            </div>
            <div style={{paddingTop:'20px',paddingBottom:'10px'}}>
                <h2 style={{color:'white',textAlign:'center'}}>Levels of {handle}</h2>
                <SolvedLevelBar data={solvedLevels} labels={solvedLevelsLabel} />
            </div>
            <div style={{paddingTop:'20px',paddingBottom:'10px'}}>
                <h2 style={{color:'white',textAlign:'center'}}>Problem Rating of {handle}</h2>
                <SolvedRatingChart data={solvedRatings} labels={solvedRatingsLabel} />
            </div>
        </div>
    );
}

export default Vizualizer;