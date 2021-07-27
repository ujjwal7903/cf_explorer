import React , {useEffect , useState} from 'react';
import Loader from '../Cards/Loader';
import Card from '../Cards/RecommenderCard';
import solvedProblems from '../Data/SolvedData';


// useEffect fix karna hai


// item.id = A , B ..
// content = Question

const Temporary = () =>{
    return(
        <Loader />
    );
}

export default Temporary;

