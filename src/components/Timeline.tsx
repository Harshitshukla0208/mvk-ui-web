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
import success from '../assets/check_24dp_FILL0_wght400_GRAD0_opsz24.svg';
import { useState } from 'react';
import { Selector } from '../components/Selector'

export default function NoOppositeContent() {
    const dropdownOptions = [
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' },
        { label: 'Option 3', value: '3' },
    ];

    const handleSelect = (value: string) => {
        console.log('Selected value:', value);
    };

    const codeString1 = `npm i mvk-ui`;
    const [copy1, setCopy1] = useState(false);

    return (
        <Timeline
            sx={{
                [`& .${timelineItemClasses.root}:before`]: {
                    flex: 0,
                    padding: 0,
                },
            }}
            className="ml-4 md:ml-[60px]"
        >
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent className="text-sm md:text-lg">
                    Jump right into building with mvk-ui, install it via package manager.
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent className="flex flex-col md:flex-row items-start md:items-center text-sm md:text-lg">
                    <p className="md:mt-[-40px]">Install mvk-ui as a Node package</p>
                    <div className="flex justify-center mt-7 md:mt-[-8px] md:ml-10 mb-7 w-[85%] md:w-[210px] bg-[#282c34] rounded-lg overflow-hidden">
                        <SyntaxHighlighter language="jsx" style={atomOneDark} customStyle={{ padding: '10px', paddingLeft: '20px', fontSize:'0.9em' }}>
                            {codeString1}
                        </SyntaxHighlighter>
                        <div className="flex justify-between px-4 text-white text-xs items-center">
                            {copy1 ? (
                                <button className="py-1 items-center">
                                    <span className="text-base mt-1 text-white">
                                        <Image src={success} alt="Code Copied" />
                                    </span>
                                </button>
                            ) : (
                                <button
                                    className="py-1 items-center"
                                    onClick={() => {
                                        navigator.clipboard.writeText(codeString1);
                                        setCopy1(true);
                                        setTimeout(() => {
                                            setCopy1(false);
                                        }, 3000);
                                    }}
                                >
                                    <span className="text-base mt-1 text-white">
                                        <Image src={clipboardIcon} alt="Copy Code" />
                                    </span>
                                </button>
                            )}
                        </div>
                    </div>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent className="text-sm md:text-lg">
                    Import the component you want to use.
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent className="text-sm md:text-lg">
                    And just copy the code and paste it where you want to use it.
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent className="text-sm md:text-lg">
                    Make sure to pass the suitable props along with the component.
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot />
                </TimelineSeparator>
                <TimelineContent className="flex flex-col md:flex-row items-start md:items-center text-sm md:text-lg">
                    <p className="md:mt-[-30px]">Here&apos;s the demo of a component.</p>
                    <div className="mt-4 md:mt-[-30px] md:ml-10">
                        <Selector options={dropdownOptions} placeholder="Select an option" onSelect={handleSelect} />
                    </div>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    );
}
