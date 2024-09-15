"use client"

import React, {useState} from "react";
import DecisionTreeQuestion from "./decision_tree_questionare";


import modelDT from "./model.json"
import deploymentDT from "./deployment.json"
import bottleneckDT from "./bottleneck.json"
import securityDT from "./security.json"

function scoreQuestions({}) {
    return (
        <>
        </>
    )
}


export default function Page({}) {
    const [recommendations, setRecommendations] =  useState({
        "model": null,
        "own_deployment": null,
        "write_heavy": null,
        "high_security": null
    })

    const createOnFoundReccomendation = (key) => {
        return (recommendation) => {
            setRecommendations({...recommendations, [key]: recommendation})
        }
    }


    if (recommendations.model === null || recommendations.own_deployment === null || recommendations.write_heavy === null || recommendations.high_security === null) {
        return (
            <>
                <DecisionTreeQuestion decisionTree={modelDT} onFoundRecommendation={createOnFoundReccomendation("model")} />
                <DecisionTreeQuestion decisionTree={deploymentDT} onFoundRecommendation={createOnFoundReccomendation("own_deployment")} />
                <DecisionTreeQuestion decisionTree={bottleneckDT} onFoundRecommendation={createOnFoundReccomendation("write_heavy")} />
                <DecisionTreeQuestion decisionTree={securityDT} onFoundRecommendation={createOnFoundReccomendation("high_security")} />
            </>
        )
    } else {
        return (
            <div>
                <p>{recommendations.toString()}</p>
            </div>
        )
    }
}