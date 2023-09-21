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

export const projects : props[] = [
    {
        id: "0",
        client: "R3 Project",
        title: "Enhancing the Student Experience at Algonquin College",
        image: "/images/projects/Project-0/1.jpg",
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
        image_1: "/images/projects/Project-0/2.jpg",
        image_2: "/images/projects/Project-0/3.jpg",
        image_3: "/images/projects/Project-0/4.jpg",
        image_4: "/images/projects/Project-0/5.jpg",
    },
    {
        id: "1",
        client: "Sanarte",
        title: "Research and design of Sanarte Mobile app, for sounds that enhances remote workers Productivity",
        image: "/images/projects/Project-2/1.jpg",
        categories: ["UI Design", "Mobile App", "AI"],
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
        image_1: "/images/projects/Project-2/1.jpg",
        image_2: "/images/projects/Project-2/2.jpg",
        image_3: "/images/projects/Project-2/3.jpg",
        image_4: "/images/projects/Project-2/4.jpg",
    },
    {
        id: "2",
        client: "BoxBYLD",
        title: "CRM System for Solar Panel Contractors: BoxBYLD for BYLDer Bank",
        image: "/images/projects/Project-1/2.jpg",
        categories: ["UI Design", "SAAS Product", "Web App"],
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
        image_1: "/images/projects/Project-1/1.jpg",
        image_2: "/images/projects/Project-1/2.jpg",
        image_3: "/images/projects/Project-1/3.jpg",
        image_4: "/images/projects/Project-1/4.jpg",
    },
    
];
