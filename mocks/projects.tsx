interface props {
    id: string;
    client: string;
    title: string;
    image: string;
    categories: string[]; // An array of strings
    year: string;
    overview_1: string;
    overview_2: string;
    content_titles: string[]; // An array of strings
    content: string[]; // An array of strings
    content_1: string;
    content_2: string;
    result: string[]; // An array of strings
    list1_value: string;
    list1_description: string;
    list2_value: string;
    list2_description: string;
    list3_value: string;
    list3_description: string;
    image_1: string;
    image_2: string;
    image_3: string;
    image_4: string;
};
const project0_1 = "https://firebasestorage.googleapis.com/v0/b/iconize-website.appspot.com/o/images%2Fprojects%2FProject-0%2F1.jpg?alt=media&token=4db4a3d5-edb4-4563-a57c-b97e284c2116&_gl=1*1g3c8iu*_ga*MjAyNTM5Nzk0Mi4xNjk3MzU2ODg2*_ga_CW55HF8NVT*MTY5NzM3MzY1Ny4yLjEuMTY5NzM3NjI3OS43LjAuMA..";
const project0_2 = "https://firebasestorage.googleapis.com/v0/b/iconize-website.appspot.com/o/images%2Fprojects%2FProject-0%2F2.jpg?alt=media&token=ee65136e-93ab-4604-808b-e2757bd24673&_gl=1*1u7p92x*_ga*MjAyNTM5Nzk0Mi4xNjk3MzU2ODg2*_ga_CW55HF8NVT*MTY5NzM3MzY1Ny4yLjEuMTY5NzM3NjMwNS42MC4wLjA.";
const project0_3 = "https://firebasestorage.googleapis.com/v0/b/iconize-website.appspot.com/o/images%2Fprojects%2FProject-0%2F3.jpg?alt=media&token=beb505d0-8dac-4e34-be6e-7ab20c396e4b&_gl=1*11sw2bc*_ga*MjAyNTM5Nzk0Mi4xNjk3MzU2ODg2*_ga_CW55HF8NVT*MTY5NzM3MzY1Ny4yLjEuMTY5NzM3NjMxMy41Mi4wLjA.";
const project0_4 = "https://firebasestorage.googleapis.com/v0/b/iconize-website.appspot.com/o/images%2Fprojects%2FProject-0%2F4.jpg?alt=media&token=3ec0371e-4fa8-4f6c-b0dd-0d935319e490&_gl=1*ijiw72*_ga*MjAyNTM5Nzk0Mi4xNjk3MzU2ODg2*_ga_CW55HF8NVT*MTY5NzM3MzY1Ny4yLjEuMTY5NzM3NjMyMy40Mi4wLjA.";
const project0_5 = "https://firebasestorage.googleapis.com/v0/b/iconize-website.appspot.com/o/images%2Fprojects%2FProject-0%2F5.jpg?alt=media&token=5f7faa3b-fc98-400a-8f9c-7634b95d12c8&_gl=1*yu3rcc*_ga*MjAyNTM5Nzk0Mi4xNjk3MzU2ODg2*_ga_CW55HF8NVT*MTY5NzM3MzY1Ny4yLjEuMTY5NzM3NjMzMi4zMy4wLjA.";
const project2_1 = "https://firebasestorage.googleapis.com/v0/b/iconize-website.appspot.com/o/images%2Fprojects%2FProject-1%2F1.jpg?alt=media&token=1ec0a9fd-3419-419b-9a7f-a77cc34ef733&_gl=1*12j5jzs*_ga*MjAyNTM5Nzk0Mi4xNjk3MzU2ODg2*_ga_CW55HF8NVT*MTY5NzM3MzY1Ny4yLjEuMTY5NzM3NjM0Ni4xOS4wLjA.";
const project2_2 = "https://firebasestorage.googleapis.com/v0/b/iconize-website.appspot.com/o/images%2Fprojects%2FProject-1%2F2.jpg?alt=media&token=232668cd-4bd1-4b7e-a9ed-3d964d1b9df8&_gl=1*19q55op*_ga*MjAyNTM5Nzk0Mi4xNjk3MzU2ODg2*_ga_CW55HF8NVT*MTY5NzM3MzY1Ny4yLjEuMTY5NzM3NjM1OC43LjAuMA..";
const project2_3 = "https://firebasestorage.googleapis.com/v0/b/iconize-website.appspot.com/o/images%2Fprojects%2FProject-1%2F3.jpg?alt=media&token=a70fb4d4-204d-4477-8b75-e3fdeeedb903&_gl=1*xts5mo*_ga*MjAyNTM5Nzk0Mi4xNjk3MzU2ODg2*_ga_CW55HF8NVT*MTY5NzM3MzY1Ny4yLjEuMTY5NzM3NjM2OS42MC4wLjA.";
const project2_4 = "https://firebasestorage.googleapis.com/v0/b/iconize-website.appspot.com/o/images%2Fprojects%2FProject-1%2F4.jpg?alt=media&token=edf68991-a317-46bf-bbfd-145a53602bd2&_gl=1*njjuth*_ga*MjAyNTM5Nzk0Mi4xNjk3MzU2ODg2*_ga_CW55HF8NVT*MTY5NzM3MzY1Ny4yLjEuMTY5NzM3NjM3OC41MS4wLjA.";
const project1_1 = "https://firebasestorage.googleapis.com/v0/b/iconize-website.appspot.com/o/images%2Fprojects%2FProject-2%2F1.jpg?alt=media&token=a8ad5cbf-a62a-4893-bf69-9ad72f660b26&_gl=1*1lnocv9*_ga*MjAyNTM5Nzk0Mi4xNjk3MzU2ODg2*_ga_CW55HF8NVT*MTY5NzM3MzY1Ny4yLjEuMTY5NzM3NjM5MS4zOC4wLjA.";
const project1_2 = "https://firebasestorage.googleapis.com/v0/b/iconize-website.appspot.com/o/images%2Fprojects%2FProject-2%2F2.jpg?alt=media&token=506163e8-6f9e-437c-b001-f583bc91d26b&_gl=1*r5647b*_ga*MjAyNTM5Nzk0Mi4xNjk3MzU2ODg2*_ga_CW55HF8NVT*MTY5NzM3MzY1Ny4yLjEuMTY5NzM3NjM5OS4zMC4wLjA.";
const project1_3 = "https://firebasestorage.googleapis.com/v0/b/iconize-website.appspot.com/o/images%2Fprojects%2FProject-2%2F3.jpg?alt=media&token=1953d014-1f5a-4f71-87e1-9e6748b19443&_gl=1*pypg0d*_ga*MjAyNTM5Nzk0Mi4xNjk3MzU2ODg2*_ga_CW55HF8NVT*MTY5NzM3MzY1Ny4yLjEuMTY5NzM3NjQwNy4yMi4wLjA.";
const project1_4 = "https://firebasestorage.googleapis.com/v0/b/iconize-website.appspot.com/o/images%2Fprojects%2FProject-2%2F4.jpg?alt=media&token=234a3bd6-d36c-49e6-b7a1-7e6e6a6c0ca1&_gl=1*1tqgswp*_ga*MjAyNTM5Nzk0Mi4xNjk3MzU2ODg2*_ga_CW55HF8NVT*MTY5NzM3MzY1Ny4yLjEuMTY5NzM3NjQxNS4xNC4wLjA.";

export const projects : props[] = [
    {
        id: "0",
        client: "R3 Project",
        title: "Enhancing the Student Experience at Algonquin College",
        image: project0_1,
        categories: ["UX Research",],
        year: "2023",
        overview_1: "Making the leap to a new student platform a breeze! We're crafting a communication and support plan that'll guide you through the transition.",
        overview_2: "In our unwavering commitment to enhancing the student experience at Algonquin College, we played a pivotal role in meticulously planning the transition phase, working diligently to replace the existing Algonquin College Student Information System (ACSIS). Recognizing the challenges students faced while navigating ACSIS, we empathetically addressed the need for a more modern and student-centered approach to the student support system. This recent project, in collaboration with a dedicated member from the Iconize team, embraced a human-centered design (HCD) methodology to gain a profound understanding of student preferences for support. The insights gleaned from this approach formed the bedrock for comprehensive engagement and communication plans, ensuring a seamless transition to the replacement student portal.",
        content_1: `Our research has uncovered pivotal insights into student perspectives and preferences during the development and design phase:`,
        content_titles: [
        "Hesitation and Concerns:",
        "Diverse Support Preferences:",
        "Communication and Support Challenges:",
        "Varied Live Chat Preferences:"
        ],
        content: [
        "Students express significant concerns about the new student portal due to potential difficulties and the stress of adaptation.",
        "Students favor various support options, including chat support, multilingual resources, and online tutorials for their convenience.",
        "Issues with communication, training, and support channels, especially through class representatives, have caused confusion and dissatisfaction among students.",
        "While live chat preferences differ, quick responses and a mix of in-person and online support are consistently valued by users."
        ],
        content_2: "Based on participantsn’ insights, practical training sessions for students and support for class representatives were recommended. These measures aim to provide essential resources, improve support, and foster a community for sharing. Key aspects included clear guidance, addressing support gaps, diverse training, enhanced communication, and increased campus interaction, all to enhance the student experience during the transition.",
        result: ["Smooth Transition Framework: Established a robust framework for a seamless transition.", "Clear Experience Principles: Defined principles for a user-focused design.", "Measurable Success Metrics: Set metrics to gauge project success.", "owing User Confidence: Building student trust in the new platform.", "Ongoing Stakeholder Engagement: Continuous feedback to inform development." ],
        list1_value: "966",
        list1_description: "Number of survey responses.",
        list2_value: "300",
        list2_description: "No. of participants opted in to be interviewed.",
        list3_value: "27",
        list3_description: "No. of Participants during interviews and workshopping in focus groups.",
        image_1: project0_2,
        image_2: project0_3,
        image_3: project0_4,
        image_4: project0_5,
    },
    {
        id: "1",
        client: "Sanarte",
        title: "Research and design of Sanarte Mobile app, for sounds that enhances remote workers Productivity",
        image: project1_1,
        categories: ["UI Design", "Mobile App", "AI", "Flutter Development"],
        year: "2023",
        overview_1: "The client is a researcher at a university in Canada, and he wants to use this project in both research purpose and as a source of income. he has that idea that we can improve remote workspaces using sounds, and different techniques.Also have good connections in the research market, so he wants to use that to generate more income.",
        overview_2: "he wants to design a mobile app that uses sound, to destress and increase the work quality and productivity or remote workers, to be used for research purpose, and to have the data sold later to research centers and universities. while also having the potential of growing in the future and being subscription based project (it has to be a mobile app not a slack or browser plugin) the data will be collected with the knowledge of the users, and wont be used except if the users accepts that again later on an email, and wont be linked to their personal data by anyway (for privacy consideration) also, he wants business help to verify the idea, and if the users will really use the app",
        content_1: "Key Findings from Interviews and Competitor Analysis:",
        content_titles: [
        "Potential Distractions:",
        "Unity in Office Environments:"
        ],
        content: [
        "The proposed mindfulness app, although designed for stress relief, may inadvertently become a distraction for some team members. To mitigate this, consider incorporating a notification feature that gently prompts users to pause and de-stress, enhancing the app's effectiveness.",
        "Many teams in office settings rely on office radios or music to create a sense of unity and camaraderie. To bridge the gap between onsite and remote groups, it could be beneficial to integrate the mindfulness app with an existing music app, fostering a shared experience and maintaining team cohesion."
        ],
        content_2: "Considering the popularity of messaging platforms like Slack and Microsoft Teams among the interviewees, seamless integration with these platforms would enhance accessibility and convenience for users. Team internal communication emerged as a vital aspect of maintaining personal connections. Offering a space for teams to engage in activities together, such as group meditation followed by brief discussions, could contribute to team bonding and mental well-being. Analytics related to team mental health, such as weekly or monthly reports, would provide valuable insights for both individual team members and team leaders to identify patterns and take proactive measures. Finally, one interviewee expressed the desire for a shared music playlist to foster a cohesive team vibe. Integrating a feature that allows teams to share and enjoy music together could further enhance the sense of unity and promote a positive work environment. By taking these findings into account and incorporating them into the app's development, it will be possible to create a holistic and engaging mindfulness experience that caters to the needs of both onsite and remote teams while promoting mental well-being and team cohesion.",
        result: ["Conducting in-depth research to understand and empathize with the target user base.", "Collaborating to ideate potential solutions and assist in constructing a robust business model that aligns with user needs.", "Developing a functional prototype as an MVP (Minimum Viable Product) and initiating user testing to gather valuable market data.", "Delivering a fully functional product, complete with analytics services installation, and providing training to the client's team for data collection and insights, guiding them on their business journey." ],
        list1_value: "+92 %",
        list1_description: "of Usability KPIs achieved.",
        list2_value: "+80 %",
        list2_description: "of the researched users' needs are satisfied in the MVP.",
        list3_value: "$97.6 B",
        list3_description: "Current global mindfulness application market size.",
        image_1: project1_1,
        image_2: project1_2,
        image_3: project1_3,
        image_4: project1_4,
    },
    {
        id: "2",
        client: "BoxBYLD",
        title: "CRM System for Solar Panel Contractors: BoxBYLD for BYLDer Bank",
        image: project2_1,
        categories: ["UI Design", "SAAS Product", "Web App", "React"],
        year: "2023",
        overview_1: "Iconize proudly announces its partnership with the BoxBYLD Network, a comprehensive platform uniting vendors, contractors, designers, distributors, and sales professionals in the solar, home improvement, and home services sectors. Our collaborative effort aims to provide real-time solutions for proposals, contracts, and project monitoring.",
        overview_2: "This strategic integration encompasses BYLDer Bank's financial services, including loans and vendor payments, within the BoxBYLD Network. This synergy creates a cohesive ecosystem for seamless project management and financial transactions. Vendors gain easy access to their loan accounts, payment monitoring, and exclusive financial products. This streamlined approach positions BYLDer Bank as the foremost financial institution for solar, home improvement, and battery storage projects across the USA.",
        content_1: "BYLDer Bank's Commitment to Partner Support:",
        content_titles: [
        "Consumer Loans:",
        "Tailored Business Loans:"
        ],
        content: [
        "In addition to offering consumer loans, BYLDer Bank is dedicated to supporting its verified partners within the BoxBYLD Network and beyond.",
        "In addition to offering consumer loans, BYLDer Bank is dedicated to supporting its verified partners within the BoxBYLD Network and beyond."
        ],
        content_2: "BYLDer Bank fortifies its reputation as a reliable and innovative financial institution by offering business loans to verified BoxBYLD Network partners. We ensure secure and efficient vendor payments through our BoxBYLD partner. Our commitment to transparent transactions, equitable compensation, and personalized vendor benefits fosters a collaborative financial growth model. As we expand our services, BYLDer Bank empowers consumers and vendors, promoting sustainable growth and trust within the renewable energy and home improvement sectors.",
        result: ["Conducting in-depth research to understand and empathize with the target user base.", "Collaborating to ideate potential solutions and assist in constructing a robust business model that aligns with user needs.", "Developing a functional prototype as an MVP (Minimum Viable Product) and initiating user testing to gather valuable market data.", "Delivering a fully functional product, complete with analytics services installation, and providing training to the client's team for data collection and insights, guiding them on their business journey." ],
        list1_value: "+5 years",
        list1_description: "of portfolio expansion",
        list2_value: "18 States",
        list2_description: "potential business expansion locations",
        list3_value: "$157.75 B",
        list3_description: "Current global PV panel market size",
        image_1: project2_1,
        image_2: project2_2,
        image_3: project2_3,
        image_4: project2_4,
    },
    
];
