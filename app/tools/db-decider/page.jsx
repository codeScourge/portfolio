"use client"

import React, {useState} from "react";

import DecisionTreeQuestion from "./decision_tree_questionare";

import modelDT from "./dt_model.json"
import deploymentDT from "./dt_deployment.json"
import bottleneckDT from "./dt_bottleneck.json"
import securityDT from "./dt_security.json"

import databases from "./databases.json"

function findDatabaseMatch(inputAttributes) {
    console.log("calculating")
    let matchingDB = null;


    for (const db of databases) {
      const attributes = db.attributes;
      if (
        attributes.model === inputAttributes.model &&
        ((attributes.own_deployment === true) || (attributes.own_deployment === false && inputAttributes.own_deployment === false)) &&
        attributes.write_heavy === inputAttributes.write_heavy &&
        attributes.high_security === inputAttributes.high_security
      ) {
        matchingDB = db.name
      }
    }


    const explanation = `
        Model: ${inputAttributes.model}, 
        Own Deployment: ${inputAttributes.own_deployment}, 
        Write Heavy: ${inputAttributes.write_heavy}, 
        High Security: ${inputAttributes.high_security}.`;

    return {
        name: matchingDB,
        explanation: explanation
    };
  }


export default function Page({}) {
    const [recommendations, setRecommendations] =  useState({
        "model": null,
        "own_deployment": null,
        "write_heavy": null,
        "high_security": null
    })

    const createOnFoundRecommendation = (key) => {
        return (recommendation) => {
            setRecommendations((prevRecommendations) => ({
                ...prevRecommendations,
                [key]: recommendation
            }));
        };
    };

    console.log(recommendations)

    if (recommendations.model === null) {
        return <DecisionTreeQuestion key={"model"} decisionTree={modelDT} onFoundRecommendation={createOnFoundRecommendation("model")} />
    } 
    else if (recommendations.own_deployment === null) {
        return <DecisionTreeQuestion key={"own_deployment"} decisionTree={deploymentDT} onFoundRecommendation={createOnFoundRecommendation("own_deployment")} />
    }
    else if (recommendations.write_heavy === null) {
        return <DecisionTreeQuestion key={"write_heavy"} decisionTree={bottleneckDT} onFoundRecommendation={createOnFoundRecommendation("write_heavy")} />
    }
    else if (recommendations.high_security === null) {
        return <DecisionTreeQuestion key={"high_security"} decisionTree={securityDT} onFoundRecommendation={createOnFoundRecommendation("high_security")} />
    }
    else {
        const {name, explanation} = findDatabaseMatch(recommendations)
        return (
            <div className="block">
                {name && <p>You should choose {name}</p>}
                {explanation}
                <a href="/blog/00_how_to_choose_a_db">Want to learn why?</a>
            </div>
        )
    }
}