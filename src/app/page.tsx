"use client";

import { useState } from "react";
import StaticFragment from "./components/StaticFragment";
import VariableFragment from "./components/VariableFragment";

// Define your sentence fragments here
const parts = [
    [
        "Roxas",
        "Xion",
        "Ventus",
        "Vanitas",
        "Yen Sid",
        "Mickey",
        "Ava",
        "The Master of Masters",
        "Yozora",
        "The Nameless Star",
        "Subject X",
        '"Player"',
        "Yuffie",
        "Sigurd",
        "Sigrun",
        "Chernabog",
        "Your favorite Organization member",
        "That one unnamed Agrabah NPC",
        "Tetsuya Nomura",
        "the Nameless Star",
        "the Master of Masters",
    ],
    [
        "the Nobody form of",
        "the human form of",
        "a vessel for",
        "a disguise used by",
        "the future version of",
        "an ancestor of",
        "the long-lost sibling of",
        "the sworn enemy of",
        "in a scandalous relationship with",
    ],
    [
        "Sora",
        "Riku",
        "Kairi",
        "Aqua",
        "Terra",
        "Luxu",
        "Xehanort",
        "Skuld",
        "Riku Replica",
        "True Darkness",
        "Marluxia's Specter",
        "Caw",
        "a Peepsta Hoo",
        "the Organization Moogle",
        "the Traverse Town lady",
        "Aya Brea from Parasite Eve",
        "Takeharu Ishimoto",
    ],
    [
        "the secret ending of",
        "the Ultimania for",
        "the manga adapation of",
        "the novelization of",
        "an unused cutscene in the files of",
        "the beta version of",
        "the official Japanese website for",
        "an obscure Nomura interview about",
        "a Square Enic investor report about",
        "the French localization of",
    ],
    [
        "Kingdom Hearts II Final Mix",
        "Birth By Sleep",
        "Dream Drop Distance",
        "Kingdom Hearts III Re Mind",
        "the original Kingdom Hearts coded",
        "Quest 978 of Union χ",
        "the Mission Mode of 358/2 Days",
        "a Kingdom Hearts Mobile mini-game",
        "Kingdom Hearts for V CAST",
        "the Second Breath orchestra concert",
        "the Kingdom Hearts Tamagotchi",
    ],
    [
        "the plot of Kingdom Hearts IV",
        "Vanitas's true origin",
        "what's in the black box",
        "the identity of the voice in the KH1 totiral",
        "why Roxas can dual-wield",
        "why Xehanort is bald",
        "why King Triton recognized the Keyblade in KH1",
        "why Final Mix Heartless have different colors",
        "the release date of Missing-Link",
    ],
];

export default function Home() {
    const [selectedParts, setSelectedParts] = useState<string[]>([]);
    const [cyclingParts, setCyclingParts] = useState<string[]>([]);

    const generateRandomSentence = () => {
        const newParts: string[] = Array(parts.length).fill("");
        const cycles: string[] = Array(parts.length).fill("");

        // Start cycling through options
        parts.forEach((part, index) => {
            let cycleIndex = 0;

            const interval = setInterval(() => {
                cycles[index] = part[cycleIndex];
                setCyclingParts([...cycles]);
                cycleIndex = (cycleIndex + 1) % part.length;
            }, 100); // Change every 100ms

            // Stop cycling after a random delay and select the final option
            setTimeout(() => {
                clearInterval(interval);
                const randomIndex = Math.floor(Math.random() * part.length);
                newParts[index] = part[randomIndex];
                setCyclingParts([]); // Ensure the last cycle is shown
                if (newParts.length === parts.length) {
                    setSelectedParts(newParts);
                }
            }, 1000 + index * 200); // Stagger the stop times for each part
        });
    };

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-4 text-center text-gray-900 dark:text-gray-100">
                Kingdom Hearts Lore Generator
            </h1>

            <div className="font-medium text-gray-900 dark:text-gray-200">
                <p>Generate a random ENTIRELY TRUE* Kingdom Hearts lore fact! Guaranteed to get clicks on Twitter!</p>
                <p>
                    Inspired by{" "}
                    <a
                        className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                        href=" https://bsky.app/profile/aid1043.bsky.social/post/3llzzsp6q2s2d"
                    >
                        Aid1043
                    </a>
                    .
                </p>
            </div>

            <div className="mb-6 p-4 bg-gray-100 dark:bg-gray-800 rounded">
                {(cyclingParts.length > 0 || selectedParts.length > 0) && (
                    <p className="text-lg font-medium text-gray-900 dark:text-gray-200">
                        <StaticFragment>Did you know that </StaticFragment>
                        <VariableFragment>{cyclingParts[0] || selectedParts[0]}</VariableFragment>
                        <StaticFragment> is actually </StaticFragment>
                        <VariableFragment>{cyclingParts[1] || selectedParts[1]}</VariableFragment>
                        <StaticFragment> </StaticFragment>
                        <VariableFragment>{cyclingParts[2] || selectedParts[2]}</VariableFragment>
                        <StaticFragment>
                            ?<br />
                        </StaticFragment>
                        <StaticFragment>It was originally revealed in </StaticFragment>
                        <VariableFragment>{cyclingParts[3] || selectedParts[3]} </VariableFragment>
                        <VariableFragment>{cyclingParts[4] || selectedParts[4]}</VariableFragment>

                        <StaticFragment>
                            ,<br /> but it actually has profound implications for {""}
                        </StaticFragment>
                        <VariableFragment>{cyclingParts[5] || selectedParts[5]}</VariableFragment>
                        <StaticFragment>.</StaticFragment>
                    </p>
                )}
            </div>

            <button
                onClick={generateRandomSentence}
                className="w-full py-2 px-4 font-medium rounded transition-colors bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white"
            >
                Generate Fact
            </button>
        </div>
    );
}
