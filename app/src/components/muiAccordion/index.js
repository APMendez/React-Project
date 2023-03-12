import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function MuiAccordion({descripcion, cuidados}) {
    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Descripcion</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {descripcion}
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Cuidados</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {cuidados}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
