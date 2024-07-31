import Hero from "@/components/hero";
import Section from "@/components/section";
import SectionInner from "@/components/sectioninner";
import SideBySide from "@/components/sidebyside";
import Pg from "@/components/pg";
import TLink from "@/components/tlink";
import BackToTop from "@/components/backtotop";
import Script from "next/script";
import Conclusion from "@/components/conclusion";

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_MEASUREMENT_ID;

export default function Home() {
    return (
        <>
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){window.dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${GA_MEASUREMENT_ID}');
                `}
            </Script>
            <Hero />
            
            <div className="max-w-big m-auto mt-30">
            
                
                
                <div className="max-w-big m-auto relative">
                    <BackToTop />
                    
                    <div className="z-20 relative">
                        <Section id="felon">
                            <SectionInner>
                                <SideBySide img="/handcuff.png" headline="We have a convicted felon running for the presidency.">
                                    <Pg>If you've been living under a rock for a while, you may not know that Donald Trump is literally a convicted felon. As in a jury was convinced - based on presented evidence, even when considering the defense's testimony - that he commited a serious crime..</Pg>

                                    <Pg>..And that doesn't even count the civil trial judgements against him, or the other pending criminal cases.</Pg>
                                    <em>Sources: 
                                        <ul>
                                            <li><TLink link="https://apnews.com/article/trump-trial-deliberations-jury-testimony-verdict-85558c6d08efb434d05b694364470aa0">Trump felony conviction [AP]</TLink></li> 
                                            <li><TLink link="https://apnews.com/article/trump-civil-fraud-verdict-attorney-general-cf9df608a576d561393b4ceeac4cae3a">Trump civil trial verdict [AP]</TLink></li>
                                            <li><TLink link="https://apnews.com/projects/trump-investigations-civil-criminal-tracker/">All Trump investigations [AP]</TLink></li>
                                        </ul>
                                    </em>
                                </SideBySide>
                            </SectionInner>
                        </Section>
                        <Section id="2025">
                            <SectionInner>
                                <SideBySide img="/elephant.png" reverse={true} headline="The republican party's “project 2025” seeks to completely undermine pretty much everything.">
                                    <Pg>Project 2025 is a wet dream written down by top Republican figures.. Including folks who served in Trump's cabinet, no matter how much Trump denies knowing anything about it.</Pg>

                                    <Pg>Abortion rights, equality, social security, medicaid/medicare, VA benefits and more are all on the chopping block if the Republican party can get Trump and enough House & Senate Republicans elected.</Pg>

                                    <em>Sources: 
                                        <ul>
                                            <li><TLink link="https://www.project2025.org/">Project 2025 [Project 2025 Website]</TLink></li> 
                                            <li><TLink link="https://apnews.com/article/election-2024-conservatives-trump-heritage-857eb794e505f1c6710eb03fd5b58981">Plan to dismantle the US government and replace it with Trump's vision [AP]</TLink></li>
                                        </ul>
                                    </em>
                                </SideBySide>
                            </SectionInner>
                        </Section>
                        <Section id="authoritarianism">
                            <SectionInner>
                                <SideBySide img="/crown.png" headline="The supreme court legally sanctioned authoritarianism.">
                                    <Pg>The supreme court - biased hard to the right in the political spectrum thanks to Trump's previous presidency - has done a lot of bad things. Overturning Roe v. Wade was bad, but recently they decided that the President can't be convicted for crimes that have even the vague notion of being “official acts”.. Which aren't actually defined.</Pg>

                                    <Pg>Donald Trump (or Joe Biden, for that matter) could authorize a hit on a political opponent and say he did it to preserve America, and the supreme court said it's cool.</Pg>

                                    <Pg>The Supreme Court made the sitting US President into a king.. and may end up overturning his previous felony conviction - and future convictions - because of it.</Pg>
                                    <em>Sources: 
                                        <ul>
                                            <li><TLink link="https://apnews.com/article/trump-immunity-supreme-court-capitol-riot-trial-72ec35de776315183e1db561257cb108">Supreme court immunity ruling [AP]</TLink></li> 
                                            <li><TLink link="https://www.youtube.com/watch?v=MXQ43yyJvgs">Trump is Immune [LegalEagle]</TLink></li>
                                        </ul>
                                    </em>
                                </SideBySide>
                            </SectionInner>
                        </Section>
                        <Conclusion />
                    </div>
                    
                </div>
            </div>
        </>
    );
}