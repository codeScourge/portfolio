import React, {useState, useEffect} from "react"

function TreeNode({currentNode, setCurrentNode}) {
    const handleClick = (answerIndex) => {
        const answerNode = currentNode.answers[answerIndex]
        if (answerNode.nextNode) {setCurrentNode(answerNode.nextNode)} else {setCurrentNode()}
        
    }

    return (
        <div className="block">
            <h2>{currentNode.question}</h2> 
            <div className="buttonRow">
                {currentNode.answers.map((answer, index) => (
                    <button key={currentNode.question + answer.text} onClick={() => {handleClick(index)}}>{answer.text}</button>
                ))}   
            </div>
        </div>
    )
}

export default function DecisionTreeQuestion({decisionTree, onFoundRecommendation}) {
    // the state starts as the root of the JSON, when clicking an answer it traverses to one of the answers and puts
    // its nextNode as the current state. Only the branch-ends have a recommendation key, which is how we see if
    // we have reached the end, otherwise we use the question and answer keys to traverse it further 
    const [currentNode, setCurrentNode] = useState(decisionTree);


    // we take a function to lift up the state of the resulting reccomendation
    useEffect(() => {
            if ('recommendation' in currentNode) {
                onFoundRecommendation(currentNode.recommendation);
            }
    }, [currentNode]);
    
    return (
        <>
            {!('recommendation' in currentNode) ? (
                <TreeNode currentNode={currentNode} setCurrentNode={setCurrentNode} />
            ): <p>thinking...</p>}
        </>
    )
}
