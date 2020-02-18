import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

const Disclaimer = styled.div`
  min-height: 100vh;
  padding: 20px;
  padding-top: 200px;
`;
const Title = styled.p`
  font-weight: 900;
  /* color: #07fe7f; */
`;
const Paragraph = styled.div`
  margin: 10px 0px;
  font-size: 0.6em;
`;

export default () => {
  return (
    <Disclaimer>
      <Title>Disclaimer</Title>
      <Paragraph>
        This document is confidential and is being provided to the addressed recipients for information only and on a
        strictly confidential basis and is subject to the relevant confidentiality undertaking (the “Confidentiality
        Undertaking”) entered into by such addressed recipients in connection with a potential investment in G-Loot
        Global Esports AB (publ) (the “Company”) (“Project Boom”).
      </Paragraph>
      <Paragraph>
        The information contained in this presentation (the “Presentation”) is provided solely for the purpose of
        evaluating Project Boom and is intended solely for those who the Company or Goldman Sachs International (“GSI”)
        or Carnegie Investment Bank AB (publ) (“Carnegie”) have provided the Presentation to. For the purposes of this
        disclaimer, “Presentation” means these slides, their contents or any part of them, any oral information
        provided, any question or answer session and any written or oral materials discussed or distributed prior,
        during or after the sharing of this Presentation or any presentation meeting.
      </Paragraph>
      <Paragraph>
        Save as specifically agreed in writing by the Company, GSI or Carnegie, this Presentation must not be copied,
        distributed, published or reproduced, directly or indirectly, in whole or in part, or disclosed by any recipient
        to any other person, for any purpose or under any circumstances. This Presentation is for the exclusive use of
        the addressed recipients to assist recipients in deciding whether or not to proceed with a further analysis and
        investigation of Project Boom and any recipients are therefore bound by confidentiality and the terms of the
        Confidentiality Undertaking in respect of all information contained in this Presentation. This Presentation is
        for information purposes only and does not constitute or form part of, and should not be construed as, an offer
        or invitation to participate in Project Boom.
      </Paragraph>
      <Paragraph>
        This Presentation and any materials distributed in connection with this Presentation are not directed to, or
        intended for distribution to or use by, any person or entity that is a citizen or resident or located in any
        locality, state, country or other jurisdiction where such distribution, publication, availability or use would
        be contrary to law or regulation or which would require any registration or licensing within such jurisdiction.
        This Presentation does not constitute an offer to sell, or a solicitation of an offer to purchase, any
        securities in the United States. The securities described herein have not been, and will not be, registered
        under the U.S. Securities Act of 1933, as amended (the “Securities Act”), and may not be offered or sold in or
        into the United States except pursuant to an exemption from, or in a transaction not subject to, the
        registration requirements of the Securities Act. Within the European Economic Area, this Presentation is being
        made, and is directed only, to persons who are “qualified investors” as defined in the Prospectus Regulation
        (EU) 2017/1129, as implemented in member states of the European Economic Area (“Qualified Investors”). These
        materials do not constitute a prospectus within the meaning of the Prospectus Regulation and do not constitute
        an offer to acquire securities.
      </Paragraph>
      <Paragraph>
        This Presentation and does not constitute an offering document or an offer of securities to the public in the
        United Kingdom to which section 85 of the Financial Services and Markets Act 2000 of the United Kingdom (as
        amended by the Financial Services Act 2012 of the United Kingdom) applies. It is not intended to provide the
        basis for any evaluation of any securities and should not be considered as a recommendation that any person
        should subscribe for or purchase any securities. In the United Kingdom, this Presentation is being made, and is
        directed only, to persons who are both: (i) Qualified Investors; and either (ii) persons falling within the
        definition of Investment Professionals (contained in Article 19(5) of the Financial Services and Markets Act
        2000 (Financial Promotion) Order 2005 (the “Order”)) or other persons to whom it may lawfully be communicated in
        accordance with the Order; or (iii) high net worth bodies corporate, unincorporated associations and
        partnerships and the trustees of high value trusts, as described in Article 49(2)(a) to (d) of the Order (all
        such persons together being referred to as “Relevant Persons”). Any investment or investment activity to which
        this Presentation relates is available only to Relevant Persons and will be engaged in only with Relevant
        Persons.
      </Paragraph>
      <Paragraph>
        The information contained in this Presentation was obtained from publicly available sources and has not been
        independently verified by GSI or Carnegie and does not constitute a recommendation from GSI or Carnegie to the
        recipient. GSI and Carnegie have relied upon the accuracy and completeness of all of the financial, accounting
        and other information discussed with or reviewed by it and has assumed such accuracy and completeness for
        purposes of this Presentation. Neither the Company, GSI, Carnegie nor any of their respective affiliates makes
        any representation or warranty, express or implied, as to the accuracy or completeness of this Presentation or
        the information contained in this Presentation, or for any reliance placed on this Presentation by any
        person(s), and any liability therefor (including in respect of direct, indirect or consequential loss or damage)
        is expressly disclaimed.
      </Paragraph>
      <Paragraph>
        Statements in this Presentation, including those regarding the possible or assumed future or other performance
        of the Company or its industry or other trend projections, constitute forward-looking statements. By their
        nature, forward-looking statements involve known and unknown risks, uncertainties, assumptions and other factors
        because they relate to events and depend on circumstances that will occur in the future whether or not outside
        the control of the Company. Such factors may cause actual results, performance or developments to differ
        materially from those expressed or implied by such forward-looking statements. Accordingly, no assurance is
        given that such forward-looking statements will prove to have been correct. Past performance does not guarantee
        or predict future performance. This Presentation should not be relied on as a promise or representation as to
        the future and does not purport to contain all of the information that may be required to evaluate any potential
        transaction and should thus not be relied on in connection with any such potential transaction.
      </Paragraph>
      <Paragraph>
        Neither GSI, Carnegie the Company or the Company’s shareholders, nor their respective affiliates and their
        respective officers, employees and agents undertake any obligation to review, update, confirm or otherwise
        revise this Presentation or any forward-looking statements. The Company, GSI or Carnegie do not provide legal,
        accounting or tax advice and you are strongly advised to consult your own independent advisors on any legal, tax
        or accounting issues relating to these materials. The receipt of this Presentation by any recipient is not to be
        taken as constituting the giving of investment advice by GSI or Carnegie to that recipient, nor to constitute
        such person a client of the GSI or Carnegie. No person shall be treated as a client of GSI or Carnegie or be
        entitled to the protections afforded to clients of GSI, or Carnegie solely by virtue of having received this
        Presentation, and GSI or Carnegie will not be responsible to any person(s) other than the Company for providing
        such protections nor for providing financial advice in relation to Project Boom.
      </Paragraph>
      <Paragraph>
        This Presentation shall be governed by and construed in accordance with Swedish law without regard to its
        principles on conflict of laws.
      </Paragraph>
    </Disclaimer>
  );
};
