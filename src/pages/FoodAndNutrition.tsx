import React from "react";
import "../components/css/foodAndNutrition.css";
import FeaturedCard from "../components/FeaturedCard";
import RecentCard from "../components/RecentCard";
import SectionHeading from "../components/SectionHeading";
import { FeaturedData, recentData } from "../data";
import OlderCard from "../components/OlderCard";

const FoodAndNutrition = () => {
    return (
        <>
            <div className="home-container">
                <SectionHeading heading="Featured" />

                <div className="featured-section ">
                    {FeaturedData.map((feature) => (
                        <FeaturedCard
                            key={feature.id}
                            img={feature.img}
                            heading={feature.heading}
                            paragraph={feature.paragraph}
                            author={feature.author}
                        />
                    ))}
                </div>
                <SectionHeading heading="Most Recent" />
                <div className="recent-container ">
                    {recentData.map((recent) => (
                        <RecentCard
                            key={recent.id}
                            img={recent.img}
                            heading={recent.heading}
                            author={recent.author}
                        />
                    ))}
                </div>
                <SectionHeading heading="Older Post" />

                <OlderCard />
            </div>
        </>
    );
};

export default FoodAndNutrition;
