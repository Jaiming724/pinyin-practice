import React from 'react';
import QuizCard from "@/app/components/QuizCard";
import {useSearchParams} from "next/navigation";
import {usePathname} from 'next/navigation'
import NavBar from "@/app/components/NavBar";

function Group1Page({searchParams}) {
    console.log("group")
    console.log(searchParams?.["something"])
    return (
        <div>
            <NavBar></NavBar>
            <div className="flex items-center justify-center h-screen">
                <QuizCard group={searchParams?.["something"]}></QuizCard>
            </div>
        </div>
    );
}

export default Group1Page;
