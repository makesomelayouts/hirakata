"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Japanese character pairs (hiragana and katakana)
const characterPairs = [
  { hiragana: "あ", katakana: "ア", romaji: "a" },
  { hiragana: "い", katakana: "イ", romaji: "i" },
  { hiragana: "う", katakana: "ウ", romaji: "u" },
  { hiragana: "え", katakana: "エ", romaji: "e" },
  { hiragana: "お", katakana: "オ", romaji: "o" },
  { hiragana: "か", katakana: "カ", romaji: "ka" },
  { hiragana: "き", katakana: "キ", romaji: "ki" },
  { hiragana: "く", katakana: "ク", romaji: "ku" },
  { hiragana: "け", katakana: "ケ", romaji: "ke" },
  { hiragana: "こ", katakana: "コ", romaji: "ko" },
  { hiragana: "さ", katakana: "サ", romaji: "sa" },
  { hiragana: "し", katakana: "シ", romaji: "shi" },
  { hiragana: "す", katakana: "ス", romaji: "su" },
];

export default function JapaneseTransition() {
  const [activeSystem, setActiveSystem] = useState("hiragana");
  const [selectedChar, setSelectedChar] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleCharacterClick = (index) => {
    setSelectedChar(index);
    setIsAnimating(true);

    // Toggle between hiragana and katakana
    setTimeout(() => {
      setActiveSystem(activeSystem === "hiragana" ? "katakana" : "hiragana");
      setIsAnimating(false);
    }, 600); // Match this with the animation duration
  };

  return (
    <div className="space-y-6">
      <Tabs defaultValue="interactive" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="interactive">Interactive Mode</TabsTrigger>
          <TabsTrigger value="comparison">Comparison View</TabsTrigger>
        </TabsList>

        <TabsContent value="interactive" className="space-y-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex justify-center mb-4">
                <Button
                  variant="outline"
                  onClick={() => setActiveSystem("hiragana")}
                  className={`mr-2 ${
                    activeSystem === "hiragana"
                      ? "bg-slate-200 dark:bg-slate-700"
                      : ""
                  }`}
                >
                  ひらがな
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setActiveSystem("katakana")}
                  className={
                    activeSystem === "katakana"
                      ? "bg-slate-200 dark:bg-slate-700"
                      : ""
                  }
                >
                  カタカナ
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-4 sm:grid-cols-5">
                {characterPairs.map((pair, index) => (
                  <div
                    key={index}
                    className="relative cursor-pointer"
                    onClick={() => handleCharacterClick(index)}
                  >
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`${activeSystem}-${index}`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.2 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className={`flex flex-col items-center justify-center p-4 rounded-lg border ${
                          selectedChar === index
                            ? "border-blue-500 dark:border-blue-400"
                            : "border-slate-200 dark:border-slate-700"
                        } hover:border-blue-300 dark:hover:border-blue-600 transition-colors`}
                      >
                        <span className="mb-2 text-4xl">
                          {activeSystem === "hiragana"
                            ? pair.hiragana
                            : pair.katakana}
                        </span>
                        <span className="text-xs text-slate-500 dark:text-slate-400">
                          {pair.romaji}
                        </span>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {selectedChar !== null && (
            <div className="flex justify-center mt-8">
              <Card className="w-full max-w-md">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-center space-x-8">
                    <div className="text-center">
                      <div className="mb-1 text-sm text-slate-500 dark:text-slate-400">
                        Hiragana
                      </div>
                      <div className="text-5xl font-bold">
                        {characterPairs[selectedChar].hiragana}
                      </div>
                    </div>

                    <motion.div
                      animate={{
                        x: [0, 10, 0],
                        opacity: [1, 0.5, 1],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                      }}
                      className="text-2xl text-slate-400"
                    >
                      ↔
                    </motion.div>

                    <div className="text-center">
                      <div className="mb-1 text-sm text-slate-500 dark:text-slate-400">
                        Katakana
                      </div>
                      <div className="text-5xl font-bold">
                        {characterPairs[selectedChar].katakana}
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 text-center text-slate-600 dark:text-slate-300">
                    Romaji:{" "}
                    <span className="font-medium">
                      {characterPairs[selectedChar].romaji}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </TabsContent>

        <TabsContent value="comparison">
          <Card>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <h3 className="mb-4 text-xl font-semibold text-center">
                    ひらがな (Hiragana)
                  </h3>
                  <div className="grid grid-cols-5 gap-3">
                    {characterPairs.map((pair, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.1 }}
                        className="flex flex-col items-center justify-center p-3 border rounded-lg border-slate-200 dark:border-slate-700"
                      >
                        <span className="text-3xl">{pair.hiragana}</span>
                        <span className="text-xs text-slate-500 dark:text-slate-400">
                          {pair.romaji}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-semibold text-center">
                    カタカナ (Katakana)
                  </h3>
                  <div className="grid grid-cols-5 gap-3">
                    {characterPairs.map((pair, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.1 }}
                        className="flex flex-col items-center justify-center p-3 border rounded-lg border-slate-200 dark:border-slate-700"
                      >
                        <span className="text-3xl">{pair.katakana}</span>
                        <span className="text-xs text-slate-500 dark:text-slate-400">
                          {pair.romaji}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardContent className="pt-6">
          <h3 className="mb-4 text-xl font-semibold">Motion Transition Demo</h3>
          <div className="flex justify-center">
            <div className="relative flex items-center justify-center w-40 h-40">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSystem}
                  initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                  transition={{
                    duration: 0.8,
                    type: "spring",
                    stiffness: 100,
                  }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <span className="text-8xl">
                    {selectedChar !== null
                      ? activeSystem === "hiragana"
                        ? characterPairs[selectedChar].hiragana
                        : characterPairs[selectedChar].katakana
                      : activeSystem === "hiragana"
                      ? "あ"
                      : "ア"}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <Button
              onClick={() =>
                setActiveSystem(
                  activeSystem === "hiragana" ? "katakana" : "hiragana"
                )
              }
              disabled={isAnimating}
              className="px-6"
            >
              Switch to {activeSystem === "hiragana" ? "カタカナ" : "ひらがな"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
