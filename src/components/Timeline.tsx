import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Image from 'next/image';
import clipboardIcon from '../assets/content_copy_24dp_FILL0_wght400_GRAD0_opsz24.svg';
import success from '../assets/check_24dp_FILL0_wght400_GRAD0_opsz24.svg'
import { useState } from 'react';

export default function NoOppositeContent() {
    const codeString1 = `npm i mvk-ui`;
    const [copy1, setCopy1] = useState(false)

    return (
        <Timeline
            sx={{
                [`& .${timelineItemClasses.root}:before`]: {
                    flex: 0,
                    padding: 0,
                },
            }}
            className='ml-[17px]'
        >
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent className='text-lg'>Jump right into building with mvk-ui, install it via package manager.</TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent className='flex'> <p className='text-lg'>Install mvk-ui as a Node package</p>
                    <div className="flex justify-center mt-[-8px] ml-10 mb-7 w-[194px] bg-[#282c34] rounded-lg overflow-hidden">
                        <SyntaxHighlighter language="jsx" style={atomOneDark} customStyle={{ padding: '10px', paddingLeft: '20px' }}>
                            {codeString1}
                        </SyntaxHighlighter>
                        <div className="flex justify-between px-4 text-white text-xs items-center">
                            {
                                copy1 ?
                                    (
                                        <button className="py-1 items-center">
                                            <span className='text-base mt-1 text-white'>
                                                <Image src={success} alt="Code Copied" />
                                            </span>
                                            {/* Copied! */}
                                        </button>
                                    ) :
                                    (
                                        <button
                                            className="py-1 items-center"
                                            onClick={() => {
                                                navigator.clipboard.writeText(codeString1);
                                                setCopy1(true);
                                                setTimeout(() => {
                                                    setCopy1(false)
                                                }, 3000);
                                            }}
                                        >
                                            <span className='text-base mt-1 text-white'>
                                                <Image src={clipboardIcon} alt="Copy Code" />
                                            </span>
                                            {/* Copy code */}
                                        </button>
                                    )
                            }
                        </div>
                    </div>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent className='text-lg'>Import the component you want to use.</TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent className='text-lg'>And just copy the code and paste it where you want to use it.</TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent className='text-lg'>Make sure to pass the suitable props along with the component.</TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot />
                </TimelineSeparator>
                <TimelineContent className='text-lg'>Here's the demo of a component.</TimelineContent>
            </TimelineItem>
        </Timeline>
    );
}
