"use client";

import { useState } from "react";

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
        <div className="max-w-md mx-auto p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-4 text-center text-gray-900 dark:text-gray-100">
                Random Sentence Generator
            </h1>

            <div className="mb-6 p-4 bg-gray-100 dark:bg-gray-800 rounded">
                <p className="text-lg font-medium text-gray-900 dark:text-gray-200">
                    {selectedParts.length > 0
                        ? `Did you know that ${selectedParts[0]} is actually ${selectedParts[1]} ${selectedParts[2]}? It was originally revealed in ${selectedParts[3]} ${selectedParts[4]} but it actually has profound implications for ${selectedParts[5]}.`
                        : "Your sentence will appear here..."}
                </p>
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
