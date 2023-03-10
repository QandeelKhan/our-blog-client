import React from "react";
import "../components/css/post-detail.css";

const PostDetail = () => {
    return (
        <div className="main-post-container">
            <div className="post-category-heading">
                <span>Skin-Care Tips / Moisturizer</span>
            </div>
            <div className="second-post-container">
                <span className="main-post-heading">
                    I Replaced My Entire Multi-Step Skin-Care Routine
                    <br /> With This 5-in-1 Moisturizer, and Caring for My
                    <br /> Complexion Has Never Been Quicker
                </span>
                <div className="detail-user-name">
                    <img src="user-img.jpg" alt="user-image" />
                    <span>Frencesca Krempa</span>
                </div>
                <div className="post-date-time">
                    <span>March 10, 2023</span>
                </div>
                <div className="post-main-image">
                    <img src="post-detail-main.jpg" alt="mainimage" />
                    <span>Photo: Getty Images/Supersizer</span>
                </div>
                <div className="post-article-main">
                    <div className="post-right-article">
                        <div className="border-article">
                            <div className="shop-logo">
                                <span>Well Plus Good</span>
                                <span>SHOP</span>
                            </div>
                            <div className="shop-text">
                                <span>
                                    With the Well+Good SHOP, our editors put
                                    their years of know-how to work in order to
                                    pick products (from skin care to self care
                                    and beyond) they’re betting you’ll love.
                                    While our editors independently select these
                                    products, making a purchase through our
                                    links may earn Well+Good a commission. Happy
                                    shopping!<a href="/">Explore the Shop</a>
                                </span>
                            </div>
                        </div>
                        <div className="main-article">
                            <span>
                                You know the saying, "Work smarter, not harder"?
                                That's the kind of attitude I have toward skin
                                care. I, like the rest of us overworked
                                millennials trying to maintain a semblance of
                                work-life balance, don't have time to spare on
                                15-step beauty routines and hour-long
                                treatments. My beauty routine better be fast or
                                else I'm simply not doing it. Seriously—if it
                                requires an extra step, waiting around for
                                product to develop, or worse, a separate
                                device?! It ain't happening. As a frustrated
                                math teacher once told me: KISS—Keep it simple,
                                stupid.
                                <br />
                                <br /> In the spirit of cutting corners, I
                                recently replaced my multi-step skin-care
                                routine with Peter Thomas Roth's new 5-in-1
                                moisturizer which streamlines five steps into
                                one, very simple cream. The Ultimate Solution 5
                                Multitasking Moisturizer ($75) firms, brightens,
                                exfoliates, smoothes, and hydrates in one fell
                                swoop which—at least for lazy gals like me—is a
                                dream come true. The best part? It actually
                                works. So much so that it's the only product
                                I've used on my face besides cleanser for the
                                past two weeks.
                            </span>
                            <div className="post-mid-image">
                                <img
                                    src="post-mid-iamge.jpeg"
                                    alt="mid-image"
                                />
                            </div>
                        </div>
                        <div className="post-second-heading-container">
                            <div className="link-to-product">
                                <a href="/">
                                    Peter Thomas Roth, Ultimate Solution 5
                                    Multitasking Moisturizer — $75.00
                                </a>
                            </div>

                            <div className="product-size-url">
                                <span>Also available in a </span>
                                <a href="/">
                                    smaller, travel-size jar for $32.
                                </a>
                            </div>
                            <div className="shop-now-btn">
                                <a href="/">Shop Now</a>
                            </div>
                        </div>
                        <div className="after-second-heading">
                            <span>
                                Apparently, I'm not the only one who wants to
                                shorten their beauty routines. Founder Peter
                                Thomas Roth explains that nowadays, most people
                                want to shrink their skin-care regimens down to
                                something that takes minutes, if not seconds.
                                "Some people just want a quick skin-care
                                routine," Roth says. While technically a
                                moisturizer, each jar of the Ultimate Solution 5
                                Multitasking Moisturizer is formulated to skip
                                any extraneous serums and toners all together.
                                "Clean skin is all you need," Roth says. "Simply
                                apply twice daily after cleansing and use
                                continuously to see the best results... All you
                                need to add is an eye cream and sunblock."
                            </span>
                            <img src="post-second-ad.jpeg" alt="second-ad" />
                            <span>
                                The secret behind its formidable, multi-tasking
                                powers lies in its complex formulation which is
                                chock-full of derm-approved ingredients. There's
                                a lot in this cream. But, let's follow the KISS
                                method and break it down, benefit by benefit:
                            </span>
                        </div>
                    </div>
                    <div className="google-ads">
                        <img src="google-ad.png" alt="google-ad" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostDetail;
