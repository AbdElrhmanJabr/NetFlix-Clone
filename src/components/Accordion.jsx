import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

export function DefaultAccordion() {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <div className="px-10 text-center text-white">
        <h1 className="text-4xl font-bold  mb-8 relative">
          Frequently Asked Questions
        </h1>
        <div className="w-[50%] mx-auto">
          <Accordion open={open === 1} className="mb-4">
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className="text-white bg-[#2d2d2d] border-none hover:text-white hover:bg-[#414141] px-4 font-bold text-2xl"
            >
              What is Netflix?
            </AccordionHeader>
            <AccordionBody className="text-white bg-[#2d2d2d] border-none hover:text-white px-4 font-bold text-md">
              Netflix is a streaming service that offers a wide variety of
              award-winning TV shows, movies, anime, documentaries, and more on
              thousands of internet-connected devices. You can watch as much as
              you want, whenever you want without a single commercial – all for
              one low monthly price. There's always something new to discover
              and new TV shows and movies are added every week!
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 2} className="mb-4">
            <AccordionHeader
              onClick={() => handleOpen(2)}
              className="text-white bg-[#2d2d2d] border-none hover:text-white hover:bg-[#414141] px-4 font-bold text-2xl"
            >
              How much does Netflix?
            </AccordionHeader>
            <AccordionBody className="text-white bg-[#2d2d2d] border-none hover:text-white px-4 font-bold text-md">
              Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
              streaming device, all for one fixed monthly fee. Plans range from
              USD3.99 to USD9.99 a month. No extra costs, no contracts.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 3} className="mb-4">
            <AccordionHeader
              onClick={() => handleOpen(3)}
              className="text-white bg-[#2d2d2d] border-none hover:text-white hover:bg-[#414141] px-4 font-bold text-2xl"
            >
              How can I watch?
            </AccordionHeader>
            <AccordionBody className="text-white bg-[#2d2d2d] border-none hover:text-white px-4 font-bold text-md">
              Watch anywhere, anytime. Sign in with your Netflix account to
              watch instantly on the web at netflix.com from your personal
              computer or on any internet-connected device that offers the
              Netflix app, including smart TVs, smartphones, tablets, streaming
              media players and game consoles. You can also download your
              favorite shows with the iOS, Android, or Windows 10 app. Use
              downloads to watch while you're on the go and without an internet
              connection. Take Netflix with you anywhere.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 4} className="mb-4">
            <AccordionHeader
              onClick={() => handleOpen(4)}
              className="text-white bg-[#2d2d2d] border-none hover:text-white hover:bg-[#414141] px-4 font-bold text-2xl"
            >
              How do I cancel?
            </AccordionHeader>
            <AccordionBody className="text-white bg-[#2d2d2d] border-none hover:text-white px-4 font-bold text-md">
              Netflix is flexible. There are no pesky contracts and no
              commitments. You can easily cancel your account online in two
              clicks. There are no cancellation fees – start or stop your
              account anytime.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 5} className="mb-4">
            <AccordionHeader
              onClick={() => handleOpen(5)}
              className="text-white bg-[#2d2d2d] border-none hover:text-white hover:bg-[#414141] px-4 font-bold text-2xl"
            >
              What can I watch on Netflix?
            </AccordionHeader>
            <AccordionBody className="text-white bg-[#2d2d2d] border-none hover:text-white px-4 font-bold text-md">
              Netflix has an extensive library of feature films, documentaries,
              TV shows, anime, award-winning Netflix originals, and more. Watch
              as much as you want, anytime you want.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 6} className="mb-4">
            <AccordionHeader
              onClick={() => handleOpen(6)}
              className="text-white bg-[#2d2d2d] border-none hover:text-white hover:bg-[#414141] px-4 font-bold text-2xl"
            >
              Is Netflix good for kids?
            </AccordionHeader>
            <AccordionBody className="text-white bg-[#2d2d2d] border-none hover:text-white px-4 font-bold text-md">
              The Netflix Kids experience is included in your membership to give
              parents control while kids enjoy family-friendly TV shows and
              movies in their own space. Kids profiles come with PIN-protected
              parental controls that let you restrict the maturity rating of
              content kids can watch and block specific titles you don’t want
              kids to see.
            </AccordionBody>
          </Accordion>
        </div>
      </div>
    </>
  );
}
