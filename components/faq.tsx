import Pg from "./pg";

type Props = {
    children: React.ReactNode,
    heading: string,
}

function FAQItem({children, heading}: Props ) {
    return (
        <div className="group mb-5 w-full">
            <div className="flex justify-between gap-2 mb-2">
                <h3 className="font-bighead uppercase italic text-3xl block leading-neg shrink">{heading}</h3>
                <button className="font-bighead text-3xl group-focus-within:opacity-0 opacity-100 transition-all duration-300 min-w-[48px] w-12 block"><span className="hidden">Expand FAQ Item</span>+</button>
            </div>
            
            <div className="group-focus-within:max-h-[1000px] max-h-0 overflow-hidden transition-all duration-300">
                {children}
            </div>
        </div>
    );
}

export default function FAQ() {
    return (
        <div className="flex flex-col gap-2 w-full">
            <FAQItem heading="Do you have to hit each circle in a row, or can you just use one circle for all 5 shots?">
                <Pg>Whatever you prefer!</Pg>
                <Pg>I myself shot all mine in a single circle so I could do a simple group size calculation in Ballistic-X, but you may be more comfortable shooting a series rather than a single (plus, it makes spotting impacts easier)!</Pg>
            </FAQItem>
            <FAQItem heading="How do you determine if a shot is 'in'?">
                <Pg>First off: Unlike PRS Benchest targets, you count the shot if the CENTER OF THE IMPACT is within the circle; it&apos;s perfectly OK to break the line!</Pg>
                <Pg>More specifically, you&apos;ll note that if you measure it, the inside portion of the outer circle is 1 MOA wide, so as long as the center of your impact is within the appropriate circle for your distance, you can count it!</Pg>
            </FAQItem>
            <FAQItem heading="Why a challenge coin?">
                <Pg>I originally planned on morale patches, but the cost of creating them at a quality level I like was just a bit too high for something so niche. Instead, I ended up getting my hands on a 3d printer, and began designing the challenge coin. This has the added benefit of being able to be produced on-demand as needed!</Pg>
            </FAQItem>
            <FAQItem heading="What are the details on the coins?">
                <Pg>The challenge coins are black and white, printed using PLA (non-toxic and environmentally concious material); They are 2-sided, with a unique design on the top based on the Sub-MOA Spoonie logo, and the words &quot;Sub-MOA Spoonie&quot; inset on the back. They also feature a keychain loop so you can carry it with you wherever you go.</Pg>
                <Pg>Just FYI, while PLA is a great material, you should avoid subjecting it to extreme heat or direct sunlight for extended periods, as it can deform.</Pg>
            </FAQItem>
            <FAQItem heading="What is in place to prevent folks from cheating?">
                <Pg>A whole &apos;lotta nuthin&apos;.</Pg>
                <Pg>Seriously though, if you&apos;re a spoonie you most likely want to feel a legit sense of accomplishment, rather than a false one, so I don&apos;t expect many folks to cheat here. This is a pretty small niche, so the likelihood of there being a run on coins going to a bunch of cheaters is pretty slim.</Pg>
            </FAQItem>
        </div>
    )
}