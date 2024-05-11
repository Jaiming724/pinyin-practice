import {
    AcademicCapIcon, BanknotesIcon, CheckBadgeIcon, ReceiptRefundIcon, UsersIcon,
} from '@heroicons/react/24/outline'
import {HeartIcon, BugAntIcon, CloudIcon, FaceSmileIcon} from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";
import Image from 'next/image'

const actions = [{
    title: 'A Group',
    icon: HeartIcon,
    iconForeground: 'text-red-500',
    iconBackground: 'bg-teal-50',
    group: "first",
    description: "a,ai,an,ang,ao"
}, {
    title: 'E Group',
    icon: CheckBadgeIcon,
    iconForeground: 'text-purple-700',
    iconBackground: 'bg-purple-50',
    group: "second",
    description: "e,ei,en,eng,er"

}, {
    title: 'I Group',
    icon: FaceSmileIcon,
    iconForeground: 'text-sky-700',
    iconBackground: 'bg-sky-50',
    group: "third",
    description: "i,ia,ian,iang,iao"

}, {
    title: 'I Group Continued',
    icon: BanknotesIcon,
    iconForeground: 'text-yellow-700',
    iconBackground: 'bg-yellow-50',
    group: "fouth",
    description: "ie,in,ing,iong,iou"

}, {
    title: 'O Group',
    icon: BugAntIcon,
    iconForeground: 'text-green-700',
    iconBackground: 'bg-rose-50',
    group: "fifth",
    description: "o,ong,ou"

}, {
    title: 'U Group',
    icon: CloudIcon,
    iconForeground: 'text-rose-700',
    iconBackground: 'bg-rose-50',
    group: "six",
    description: "u,ua,uai,uan,uang,uei,uen,ueng,uo"
}, {
    title: 'ü Group',
    icon: ReceiptRefundIcon,
    iconForeground: 'text-rose-700',
    iconBackground: 'bg-rose-50',
    group: "seven",
    description: "ü,üan,üe,ün"
}]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    return (<div className="flex items-center justify-center h-screen">
        <div
            className=" divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-200 shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0">
            {actions.map((action, actionIdx) => (<div
                key={action.title}
                className={classNames(actionIdx === 0 ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none' : '', actionIdx === 1 ? 'sm:rounded-tr-lg' : '', actionIdx === actions.length - 2 ? 'sm:rounded-bl-lg' : '', actionIdx === actions.length - 1 ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none' : '', 'group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500')}
            >
                <Link href={`./groups?something=${action.group}`}>

                    <div>
            <span
                className={classNames(action.iconBackground, action.iconForeground, 'inline-flex rounded-lg p-3 ring-4 ring-white')}>{action.title}
                {/*<action.icon className="h-6 w-6" aria-hidden="true"/>*/}
            </span>
                    </div>
                    <div className="mt-2">
                        <h3 className="text-base font-semibold leading-6 text-gray-900">
                        </h3>
                        <p className="mt-2 text-sm text-gray-500">
                            {action.description}
                        </p>
                    </div>
                </Link>
            </div>))}
        </div>

    </div>)
}
