import { useState } from "react";

import { CloseButton } from "../CloseButton";

import bugImageUrl from '/src/assets/bug.svg';
import ideaImageUrl from '/src/assets/idea.svg';
import thoughtImageUrl from '/src/assets/thought.svg';
import { FeedbackTypeStep } from "./Step/FeedbackTypeStep";
import { FeedbackContentStep } from "./Step/FeedbackContentStep";

export const feedbackTypes = {
  BUG:{
    title:'Problem',
    image: {
      source:bugImageUrl,
      alt:'Image de um um Inceto'
    },
  },
  IDEA:{
    title:'Idea',
    image: {
      source:ideaImageUrl,
      alt:'Image de um uma Lâmpada'
    },
  },
  OTHER:{
    title:'Other',
    image: {
      source:thoughtImageUrl,
      alt:'Image de um balão'
    },
  },
}

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [FeedbackType, setFeedbackType] = useState<FeedbackType | null>(null)


  function handleRestartFeedback() {
    setFeedbackType(null);
  }

    return (
      <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg">
        {!FeedbackType ?(
        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
        ) : (
          <FeedbackContentStep
            feedbackType={FeedbackType}
            onFeedbackRestartRequested={handleRestartFeedback}
            
            />
        )}


        <footer className="text-sm text-neutral-400">
        Made with  ♥ by <a className="underline underline-offset-2" href="https://maynardsystem.com.br">Maynard</a>
        </footer>
      </div>
    );
}