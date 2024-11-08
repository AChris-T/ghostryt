/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { IoIosArrowDown } from 'react-icons/io';
import Button from '@mui/material/Button';

export default function FAQ() {
  return (
    <div className="flex flex-col justify-between mb-10 lg:flex-row gap-7 md:gap-20">
      <div className="flex flex-col items-center gap-6 text-black lg:items-start">
        <h3 className="san text-[3rem] font-bold text-center lg:text-start">
          F.A.Q.'s
        </h3>
        <p className="text-[1.125rem] lg:text-start text-center font-normal lg:px-0 md:px-20 px-0 lg:w-[500px]">
          The most commonly asked questions right before our customers purchase
          a plan and become auto-bloggers.
        </p>
        <button className="w-[120px] h-[48px] border-[0.5px] border-black">
          Contact
        </button>
      </div>
      <div>
        <Accordion>
          <AccordionSummary
            expandIcon={<IoIosArrowDown />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Accordion 1
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<IoIosArrowDown />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            Accordion 2
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<IoIosArrowDown />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            Accordion Actions
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
          <AccordionActions>
            <Button>Cancel</Button>
            <Button>Agree</Button>
          </AccordionActions>
        </Accordion>
      </div>
    </div>
  );
}
