"use client";

import { useState } from "react";
import StaticFragment from "./components/StaticFragment";
import VariableFragment from "./components/VariableFragment";

// Define your sentence fragments here
const parts = [
    ["Roxas", "Xion"],
    ["the Nobody form of", "the human form of"],
    ["Sora", "Riku", "Kairi"],
    ["the secret ending of", "the Ultimania for"],
    ["Kingdom Hearts II Final Mix", "Birth By Sleep"],
    ["the plot of Kingdom Hearts IV", "Vanitas's true origin"],
];

export default function Home() {
    const [selectedParts, setSelectedParts] = useState<string[]>([]);

    const generateRandomSentence = () => {
        const newParts = parts.map((part) => {
            const randomIndex = Math.floor(Math.random() * part.length);
            const fragment = part[randomIndex];
            return fragment;
        });

        setSelectedParts(newParts);
    };

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-4 text-center text-gray-900 dark:text-gray-100">
                Random Sentence Generator
            </h1>

            <div className="mb-6 p-4 bg-gray-100 dark:bg-gray-800 rounded">
                {selectedParts.length > 0 && (
                    <p className="text-lg font-medium text-gray-900 dark:text-gray-200">
                        <StaticFragment>Did you know that </StaticFragment>
                        <VariableFragment>{selectedParts[0]}</VariableFragment>
                        <StaticFragment> is actually </StaticFragment>
                        <VariableFragment>{selectedParts[1]}</VariableFragment>
                        <StaticFragment> </StaticFragment>
                        <VariableFragment>{selectedParts[2]}</VariableFragment>
                        <StaticFragment>
                            ?<br />
                        </StaticFragment>
                        <StaticFragment>It was originally revealed in </StaticFragment>
                        <VariableFragment>{selectedParts[3]} </VariableFragment>
                        <VariableFragment>{selectedParts[4]}</VariableFragment>

                        <StaticFragment>
                            ,<br /> but it actually has profound implications for
                        </StaticFragment>
                        <VariableFragment> {selectedParts[5]}</VariableFragment>
                        <StaticFragment>.</StaticFragment>
                    </p>
                )}
            </div>

            <button
                onClick={generateRandomSentence}
                className="w-full py-2 px-4 font-medium rounded transition-colors bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white"
            >
                Generate Sentence
            </button>
        </div>
    );
}
