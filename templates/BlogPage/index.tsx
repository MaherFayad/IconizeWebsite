import Layout from "@/components/Layout";
import Main from "./Main";
import Content from "./Content";
import Preview from "@/components/Preview";
import Review from "@/components/Review";
import Gallery from "@/components/Gallery";
import Share from "./Share";
import Posts from "@/components/Posts";

import { blogs } from "@/mocks/blogs";

const reviewAuthor = {
    content:
        "Pinterest users come to the platform for inspiration; they are actively searching for information.",
};

const gallery = [
    {
        image: "/images/photo-12.jpg",
        title: "Optional Image Caption Lorem Ipsum Dolr Sit Amet Consectetur",
    },
    {
        image: "/images/photo-13.jpg",
    },
];

const BlogPage = ({ id }: any) => {
    return (
        <Layout>
            <Main id={id} />
            <Content
                title="An effective and affordable element of your digital marketing strategy"
                content={
                    <>
                        <p>
                            Pinterest has a huge potential for advertisers with
                            over 1.7 million monthly reaches in Switzerland, but
                            marketers in our nation are still not fully
                            utilizing it. Businesses that use the platform as
                            part of their digital marketing strategy are still
                            rare. Because there is less competition for
                            advertising space on Pinterest than on other social
                            platforms, it has an impressive Return on Ad Spend
                            (ROAS), making it an effective and affordable tool
                            for many different types of digital marketing
                            strategies.
                        </p>
                        <p>
                            With over 60% of its users being female, Pinterest
                            is especially appealing for targeting female
                            demographics in addition to its ROAS performance.
                            With a 50% increase in generation Z users over the
                            previous year and a 36% increase in generation Y
                            users, Pinterest is another important channel for
                            marketing to millennial and digital native
                            consumers. However, Pinterest is more generally
                            positioning itself as a major player on the social
                            media scene, and its relevance to the digital
                            campaign strategies of various types of businesses
                            should be carefully considered. Over the past year,
                            the number of male users has increased by 48%.
                        </p>
                    </>
                }
            />
            <Preview
                className="section-mb120"
                title="Optional Image Caption Lorem Ipsum Dolr Sit Amet Consectetur"
                image="/images/image-4.jpg"
            />
            <Content
                title="4 months of increased sales by 60%: a tried-and-true tactic"
                content={
                    <>
                        <p>
                            Keeper recently created a unique Social Media
                            Advertising campaign for Graine de Shopping, an
                            online store featuring artisanal jewelry designers,
                            with a primary focus on Pinterest. The campaign that
                            was run was a resounding success, generating 60%
                            more sales in just 4 months, 55% more new customers,
                            and a record ROAS of 6.8.
                        </p>
                        <p>
                            Keeper recently created a unique Social Media
                            Advertising campaign for Graine de Shopping, an
                            online store featuring artisanal jewelry designers,
                            with a primary focus on Pinterest. The campaign that
                            was run was a resounding success, generating 60%
                            more sales in just 4 months, 55% more new customers,
                            and a record ROAS of 6.8.
                        </p>
                    </>
                }
            />
            <Review className="section-mb120" review={reviewAuthor} />
            <Preview
                className="section-mb120"
                title="Optional Image Caption Lorem Ipsum Dolr Sit Amet Consectetur"
                video="/videos/video-1.mp4"
            />
            <Content
                title="A seamless customer journey from discovery to purchase"
                content={
                    <>
                        <p>
                            The ideal native advertising format is provided by
                            Pinterest. Consumers view Pinterest Ads as much less
                            intrusive than other digital ads thanks to its
                            system of &quot;promoted pins&quot; that seamlessly
                            integrate into the platform&apos;s style of posts.
                            This makes the customer experience particularly
                            helpful for making purchasing decisions, along with
                            the platform&apos;s emphasis on visual content.
                        </p>
                        <p>
                            Additionally, because Pinterest users are typically
                            further along in the buying process when they view
                            an advertisement, advertising on the platform makes
                            it much easier to target qualified leads. Users of
                            Pinterest visit the site looking for ideas and are
                            actively looking for information. And that&apos;s
                            exactly the time that you want them to think about
                            you!
                        </p>
                        <ul>
                            <li>List Item 1 appears here</li>
                            <li>
                                List Item 2 appears here with enough content to
                                push it to two lines.
                            </li>
                            <li>List Item 3 appears here</li>
                            <li>List Item 4 appears here</li>
                            <li>List Item 5 appears here</li>
                        </ul>
                    </>
                }
            />
            <Gallery images={gallery} />
            <Preview
                className="section-mb120"
                title="Optional Image Caption Lorem Ipsum Dolr Sit Amet Consectetur"
                image="/images/image-5.jpg"
            />
            <Share />
            <Posts items={blogs.slice(0, 2)} />
        </Layout>
    );
};

export default BlogPage;
