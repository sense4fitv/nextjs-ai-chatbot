'use client'

import React from "react";
import { Spotlight } from "@/components/ui/spotlight-new";
import { EvervaultCard, Icon } from "@/components/ui/evervault-card";


import { assignCoach } from "@/app/(chat)/actions";
import { useRouter } from "next/navigation";


import { Button } from "@/components/ui/button";

export default function SpotlightNewDemo() {

    const router = useRouter();

    async function handleAssignCoach(trainerId: string) {
        const result = await assignCoach(trainerId); // Calls the Server Action
        
        if(result) {
            router.push('/');
        }
    }

  return (
    <div className="h-auto pt-[10rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Find the Perfect Coach
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-2xl text-center mx-auto">
        Choosing the right trainer is an important step toward achieving your fitness goals. Whether you're looking to build strength, lose weight, improve endurance, or enhance overall wellness, we have a range of trainers to match your needs.
        </p>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4 max-w-5xl mx-auto mt-10">
            <div className="">
            <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
                <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
                <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
                <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
                <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
            
                <EvervaultCard text="Ionut" />
            
                <h2 className="dark:text-white text-black mt-4 text-sm font-light">
                Ionut focuses on building strength, endurance, and overall well-being for a healthier, longer life. His approach blends functional training with sustainable fitness habits.
                </h2>
                <div className="flex flex-row gap-x-2">
                        <p className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
                        Fitness
                        </p>
                        <p className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
                        Longevity
                        </p>
                        <p className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
                        Strength
                        </p>
                    </div>
                    <p className="text-sm border bg-emerald-400  font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-black px-2 py-0.5">
                    Motivational & Supportive
                     </p>
                <Button className="mt-10" onClick={() => handleAssignCoach('cdac44de-1322-4f6c-bcb5-07b18c2be528')}>Pick Ionut</Button>
            </div>
            </div>

            <div className="">
                <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
                    <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
                    <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
                    <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
                    <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
                
                    <EvervaultCard text="Antonio" />
                
                    <h2 className="dark:text-white text-black mt-4 text-sm font-light">
                    Antonio is all about muscle growth and sculpting the perfect physique. Whether you're a beginner or an advanced lifter, he helps you maximize strength and aesthetics.
                    </h2>
                    <div className="flex flex-row gap-x-2">
                        <p className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
                        Bodybuilding
                        </p>
                        <p className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
                        Hypertrophy
                        </p>
                        <p className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
                        Strength
                        </p>
                    </div>
                    <p className="text-sm border bg-rose-400  font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
                    Disciplined & Goal-Oriented
                     </p>
                    <Button className="mt-10" onClick={() => handleAssignCoach('cdac44de-1322-4f6c-bcb5-07b18c2be528')}>Pick Antonio</Button>
                </div>
            </div>

            <div className="">
                <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
                    <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
                    <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
                    <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
                    <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
                
                    <EvervaultCard text="Oana" />
                
                    <h2 className="dark:text-white text-black mt-4 text-sm font-light">
                        Oana provides expert guidance on healthy eating, meal planning, and lifestyle optimization to help you achieve your fitness goals through proper nutrition.
                    </h2>
                    <div className="flex flex-row gap-x-2">
                        <p className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
                        Nutrition
                        </p>
                        <p className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
                        Meal Planning
                        </p>
                        <p className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
                        Wellness
                        </p>
                    </div>
                    <p className="text-sm border bg-rose-400  font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
                    Encouraging & Holistic
                     </p>
                    <Button className="mt-10" onClick={() => handleAssignCoach('cdac44de-1322-4f6c-bcb5-07b18c2be528')}>🏅 Pick Oana</Button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
