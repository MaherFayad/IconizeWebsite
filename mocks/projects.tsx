interface props {
    id:string;
    client:string;
    title:string;
    image:string;
    categories:[string,string,string];
    year:string;
    overview_1:string;
    overview_2:string;
    content_1:string;
    content_2:string;
    result1:string;
    result2:string;
    result3:string;
    result4:string;
    list1_value:string;
    list1_description:string;
    list2_value:string;
    list2_description:string;
    list3_value:string;
    list3_description:string;
    image_1: string;
    image_2: string;
    image_3: string;
    image_4: string;
};

export const projects : props[]= [
    {
        id: "0",
        client: "BoxBYLD",
        title: "CRM System for Solar Panel Contractors: BoxBYLD for BYLDer Bank",
        image: "/images/projects/Project-1/2.jpg",
        categories: ["UI Design", "SAAS Product", "Web App"],
        year: "2023",
        overview_1: "Iconize proudly announces its partnership with the BoxBYLD Network, a comprehensive platform uniting vendors, contractors, designers, distributors, and sales professionals in the solar, home improvement, and home services sectors. Our collaborative effort aims to provide real-time solutions for proposals, contracts, and project monitoring.",
        overview_2: "This strategic integration encompasses BYLDer Bank's financial services, including loans and vendor payments, within the BoxBYLD Network. This synergy creates a cohesive ecosystem for seamless project management and financial transactions. Vendors gain easy access to their loan accounts, payment monitoring, and exclusive financial products. This streamlined approach positions BYLDer Bank as the foremost financial institution for solar, home improvement, and battery storage projects across the USA.",
        content_1: "In addition to consumer loans, BYLDer Bank is committed to supporting its verified partners within the BoxBYLD Network and beyond. We extend tailored business loan offerings to strengthen our collaboration with vendors and contractors, meeting their unique needs.",
        content_2: "BYLDer Bank fortifies its reputation as a reliable and innovative financial institution by offering business loans to verified BoxBYLD Network partners. We ensure secure and efficient vendor payments through our BoxBYLD partner. Our commitment to transparent transactions, equitable compensation, and personalized vendor benefits fosters a collaborative financial growth model. As we expand our services, BYLDer Bank empowers consumers and vendors, promoting sustainable growth and trust within the renewable energy and home improvement sectors.",
        result1: "Conducting in-depth research to understand and empathize with the target user base.",
        result2: "Collaborating to ideate potential solutions and assist in constructing a robust business model that aligns with user needs.",
        result3: "Developing a functional prototype as an MVP (Minimum Viable Product) and initiating user testing to gather valuable market data.",
        result4: "Delivering a fully functional product, complete with analytics services installation, and providing training to the client's team for data collection and insights, guiding them on their business journey.",
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
    {
        id: "1",
        client: "Sanarte",
        title: "Research and design of Sanarte Mobile app, for sounds that enhances remote workers Productivity",
        image: "/images/projects/Project-2/1.jpg",
        categories: ["UI Design", "Mobile App", "AI"],
        year: "2023",
        overview_1: "The client is a researcher at a university in Canada, and he wants to use this project in both research purpose and as a source of income. he has that idea that we can improve remote workspaces using sounds, and different techniques.Also have good connections in the research market, so he wants to use that to generate more income.",
        overview_2: "he wants to design a mobile app that uses sound, to destress and increase the work quality and productivity or remote workers, to be used for research purpose, and to have the data sold later to research centers and universities. while also having the potential of growing in the future and being subscription based project (it has to be a mobile app not a slack or browser plugin) the data will be collected with the knowledge of the users, and wont be used except if the users accepts that again later on an email, and wont be linked to their personal data by anyway (for privacy consideration) also, he wants business help to verify the idea, and if the users will really use the app",
        content_1: "Based on the interviews conducted and the competitor analysis, several key findings have emerged. Firstly, while the proposed mindfulness app aims to provide a soothing and stress-relieving experience, it's important to consider potential distractions for some team members. To address this, incorporating a notification feature that prompts users to take a breath and destress could be a valuable addition. Additionally, many teams in office environments rely on office radios for a sense of unity. Integrating the app with an existing music app could help bridge the gap between onsite and remote groups, fostering a shared experience.",
        content_2: "Considering the popularity of messaging platforms like Slack and Microsoft Teams among the interviewees, seamless integration with these platforms would enhance accessibility and convenience for users. Team internal communication emerged as a vital aspect of maintaining personal connections. Offering a space for teams to engage in activities together, such as group meditation followed by brief discussions, could contribute to team bonding and mental well-being. Analytics related to team mental health, such as weekly or monthly reports, would provide valuable insights for both individual team members and team leaders to identify patterns and take proactive measures. Finally, one interviewee expressed the desire for a shared music playlist to foster a cohesive team vibe. Integrating a feature that allows teams to share and enjoy music together could further enhance the sense of unity and promote a positive work environment. By taking these findings into account and incorporating them into the app's development, it will be possible to create a holistic and engaging mindfulness experience that caters to the needs of both onsite and remote teams while promoting mental well-being and team cohesion.",
        result1: "Conducting in-depth research to understand and empathize with the target user base.",
        result2: "Collaborating to ideate potential solutions and assist in constructing a robust business model that aligns with user needs.",
        result3: "Developing a functional prototype as an MVP (Minimum Viable Product) and initiating user testing to gather valuable market data.",
        result4: "Delivering a fully functional product, complete with analytics services installation, and providing training to the client's team for data collection and insights, guiding them on their business journey.",
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
    
];
