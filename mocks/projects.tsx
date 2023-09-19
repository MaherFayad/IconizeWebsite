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
    
];
