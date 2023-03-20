import React from "react"
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import HeadingShortner from "../components/HeadingShortner.jsx"
import { Logo, experience, MotionWrapper } from "../FIle/Exporter.js"

const WorkExperience = () => {
    return (
        <div className="mt-[6rem] overflow-hidden">
            <HeadingShortner
                MainHeadline="WHAT I HAVE DONE SO FAR"
                headline="Work Experience."
            />

            <VerticalTimeline>
                {experience?.map((e, index) => {
                    return (
                        <VerticalTimelineElement
                            key={`key-prd-${index}`}
                            className="vertical-timeline-element--work"
                            contentStyle={{
                                backgroundColor: "rgba(255, 255, 255, 0.1)",
                                backdropFilter: blur("5px"),
                                WebkitBackdropFilter: blur("5px"),
                            }}
                            iconStyle={{ background: e?.iconBg }}
                            contentArrowStyle={{
                                borderRight:
                                    "7px solid  rgba(255, 255, 255, 0.1)",
                            }}
                            date={e?.date}
                            icon={<img src={e?.icon} />}
                        >
                            <div className="p-4">
                                <h3 className="vertical-timeline-element-title ">
                                    {e?.title}
                                </h3>
                                <h4 className="vertical-timeline-element-subtitle text-red-100">
                                    {e?.company_name}
                                </h4>
                                <ul className="list-disc text-base text-gray-400 mt-3">
                                    {e?.points?.map((e, index) => (
                                        <li key={index}>{e}</li>
                                    ))}
                                </ul>
                            </div>
                        </VerticalTimelineElement>
                    )
                })}
            </VerticalTimeline>
        </div>
    )
}

export default MotionWrapper(WorkExperience, "")
