import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQs() {
    return (
        <div className="container pt-20 md:pt-24">
            <h2 className="pointer-events-none bg-gradient-to-b from-white to-slate-900/10 bg-clip-text text-center text-4xl md:text-5xl lg:text-6xl font-semibold text-transparent light:from-black light:to-gray-300/80 md:mb-16">
                Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="mx-auto max-w-5xl px-4 my-8">
                <AccordionItem value="item-1">
                    <AccordionTrigger className="text-left">What does the entire process look like from start to finish?</AccordionTrigger>
                    <AccordionContent>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe laborum odio est suscipit corrupti voluptatibus repellat, minus quae accusantium consectetur incidunt neque ducimus.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger className="text-left">How soon can I expect my project to be completed?</AccordionTrigger>
                    <AccordionContent>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod dolore, esse sequi voluptatum ad minima doloremque vel distinctio mollitia, veniam voluptas error magni.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger className="text-left">What payment methods do you accept?</AccordionTrigger>
                    <AccordionContent>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, natus! Voluptas assumenda vel, similique iure dolor incidunt. Laborum, earum adipisci.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger className="text-left">What if I need changes after the project is completed?</AccordionTrigger>
                    <AccordionContent>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. A deleniti culpa aspernatur nam quas cum?
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                    <AccordionTrigger className="text-left">Do you offer support or training after the website is live?</AccordionTrigger>
                    <AccordionContent>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus beatae, facere, veritatis natus esse tempora necessitatibus eius dignissimos temporibus, libero eveniet! In accusamus quas id!
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
}
