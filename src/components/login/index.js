import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GlootLogo from '../../assets/gloot-logo.svg';
import history from '../../history';
import ConsentManager from '../consent-manager';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Login = styled.div`
  width: 100%;
  height: 100%;
  background: #000;
  text-align: center;
  overflow-y: auto;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Logo = styled.img.attrs({ src: GlootLogo })`
  width: 128px;
  margin: 20px 0px;
`;

const Title = styled.h3`
  font-weight: 900;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0px 20px;
`;

const Input = styled.input.attrs({ type: 'password' })`
  border: 0;
  outline: 0;
  color: rgb(7, 254, 127);
  background: transparent;
  text-align: center;
  margin: 60px 0px;
  border-bottom: 1px solid rgb(7, 254, 127);
  padding: 5px 10px;
  font-size: 1.8em;
`;

const Button = styled.button`
  border-radius: 6px;
  outline: 0;
  background: rgb(7, 254, 127);
  color: #000;
  padding: 20px;
  border: 0;
  font-weight: bold;
  font-family: 'roboto';
  font-size: 1.2em;
  opacity: 1;
  will-change: opacity;
  transition: opacity 0.225s ease-in-out;
  cursor: pointer;
  &:hover,
  &:active {
    opacity: 0.5;
  }
  &:disabled {
    opacity: 0.5;
  }
`;

const OverlayContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & > div:last-child {
    padding: 20px;
    margin: 20px;
    background: #000;
    color: #fff;
    border: 1px solid rgb(7, 254, 127);
    max-width: 420px;
    max-height: 640px;
    overflow: auto;
  }
`;

const Terms = styled.p`
  font-weight: bold;
`;

const ModalClose = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 1.2em;
  opacity: 1;
  will-change: opacity;
  transition: opacity 0.225s ease-in-out;
  cursor: pointer;
  &:hover,
  &:active {
    opacity: 0.5;
  }
`;

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  margin: 40px 20px;
`;

const TermsLink = styled.span`
  text-decoration: underline;
  font-size: 0.8em;
  transition: opacity 0.225s ease-in-out;
  font-weight: bold;
  margin-left: 5px;
  cursor: pointer;
  &:hover,
  &:active {
    opacity: 0.5;
  }
`;

const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Paragraph = styled.div`
  margin: 10px 0px;
  font-size: 0.6em;
  text-align: left;
`;

export default () => {
  const [password, setPassword] = useState('');
  const [accepted, setAccepted] = useState(false);
  const [terms, setTerms] = useState(false);
  const truePw = 'offlinegoesonline';

  const login = () => {
    if (password.toLowerCase() !== truePw.toLowerCase()) return;
    localStorage.setItem('token', 'token');
    history.push('/');
  };

  useEffect(() => {
    document.getElementById('password-field').focus();
  }, []);

  return (
    <Login>
      <Container>
        <Logo />
        <Title>G-Loot Teaser</Title>
        <Form>
          <Input
            id="password-field"
            value={password}
            placeholder="Enter password..."
            onChange={(e) => setPassword(e.target.value)}
          />
          <CheckBoxContainer>
            <Checkbox checked={accepted} onChange={(e) => setAccepted(e.target.checked)} />
            <span onClick={() => setAccepted(!accepted)}>I accept the </span>
            <TermsLink onClick={() => setTerms(true)}> Terms & Conditions</TermsLink>
          </CheckBoxContainer>
          <Button onClick={login} disabled={!accepted}>
            Enter
          </Button>
        </Form>
        <ConsentManager />
      </Container>
      {terms && (
        <OverlayContainer>
          <ModalClose onClick={() => setTerms(false)}>
            <FontAwesomeIcon icon={faTimes} />
          </ModalClose>
          <div>
            <Terms>Terms & Conditions</Terms>
            <Paragraph>
              By accessing this Teaser (as defined below), you shall be deemed to have confirmed and represented to the
              Company that you are either (i) outside the United States and within EEA, the UK, Hong Kong or People’s
              Republic of China, or (ii) you being a “qualified institutional buyer” within the meaning of Rule 144A
              under the U.S. Securities Act, as amended (the “Securities Act”), and if within the People's Republic of
              China, are being legally permitted to invest in the Company under PRC laws, and agree to be bound by the
              foregoing limitations, the below disclaimer and to maintain absolute confidentiality regarding the
              information disclosed in this Teaser.
            </Paragraph>
            <Paragraph>
              This webpage which contains a teaser is confidential and is being provided only to such addressed
              recipients that have received a password to this webpage directly from a representative of G-Loot Global
              Esports AB (publ) (the “Company”), Goldman Sachs International (“GSI”) or Carnegie Investment Bank AB
              (publ) (“Carnegie”) and is made available for information only and on a strictly confidential basis.
            </Paragraph>
            <Paragraph>
              The information contained on this webpage (the “Teaser”) is provided solely for the purpose of evaluating
              an opportunity relating to the Company (“Project Boom”) and is intended solely for those to whom the
              Company, GSI or Carnegie have provided the link to the webpage and password. For the purposes of this
              disclaimer, “Teaser” means this webpage, its contents or any part of it, any oral information provided,
              any questions or answers and any written or oral materials discussed or distributed prior, during or after
              the sharing of this Teaser or at any meeting.
            </Paragraph>
            <Paragraph>
              Save as specifically agreed in writing by the Company, GSI or Carnegie, this Teaser must not be copied,
              distributed, published or reproduced, directly or indirectly, in whole or in part, or disclosed by any
              recipient to any other person, for any purpose or under any circumstances. This Teaser is for the
              exclusive use of the aforementioned recipients to assist recipients in deciding whether or not to proceed
              with a further analysis and investigation of Project Boom and any recipients are therefore bound by
              confidentiality in respect of all information contained in this Teaser. This Teaser is for information
              purposes only and does not constitute or form part of, and should not be construed as, an offer or
              invitation to participate in Project Boom.
            </Paragraph>
            <Paragraph>
              This Teaser and any materials distributed in connection with this Teaser are not directed to, or intended
              for distribution to or use by, any person or entity that is a citizen or resident or located in any
              locality, state, country or other jurisdiction where such distribution, publication, availability or use
              would be contrary to law or regulation or which would require any registration or licensing within such
              jurisdiction. This Teaser does not constitute an offer to sell, or a solicitation of an offer to purchase,
              any securities in the United States. To the extent any securities are described herein, such securities
              have not been, and will not be, registered under the Securities Act, and may not be offered or sold in or
              into the United States except pursuant to an exemption from, or in a transaction not subject to, the
              registration requirements of the Securities Act. Within the United Kingdom and the European Economic Area,
              this Teaser is directed only to persons who are “qualified investors” as defined in the Prospectus
              Regulation (EU) 2017/1129 (“Qualified Investors”). This Teaser and any materials distributed in connection
              with this Teaser do not constitute a prospectus within the meaning of the Prospectus Regulation and do not
              constitute an offer to sell or acquire securities.
            </Paragraph>
            <Paragraph>
              This Teaser and any materials distributed in connection with this Teaser do not (a) constitute an offer of
              securities to the public in China to which section 9 of the Securities Law of the People’s Republic of
              China (as amended as of December 2019) applies, (b) involve engaging in the securities business in the PRC
              or (c) involve engaging in activities with effect of disrupting the domestic market and impairing the
              legitimate rights and interests of domestic investors. It is not intended to provide the basis for any
              evaluation of any securities and should not be considered as a recommendation that any person should
              subscribe for or purchase any securities, or any form of securities investment advisory services under PRC
              laws. In China, this Teaser is being made, and is directed only to specifically targeted institutional
              investors (“Targeted Institutional Investors”). Any investment or investment activity to which this Teaser
              may relate is available only to the Targeted Institutional Investors and will be engaged in only between
              the Company and the Targeted Institutional Investors.
            </Paragraph>
            <Paragraph>
              This Teaser and any materials distributed in connection with this Teaser do not constitute an offering
              document or an offer of securities to the public in the United Kingdom to which section 85 of the
              Financial Services and Markets Act 2000 of the United Kingdom (as amended by the Financial Services Act
              2012 of the United Kingdom) applies. It is not intended to provide the basis for any evaluation of any
              securities and should not be considered as a recommendation that any person should subscribe for or
              purchase any securities. In the United Kingdom, this Teaser is directed only to persons who are both: (i)
              Qualified Investors; and either (ii) persons falling within the definition of Investment Professionals
              (contained in Article 19(5) of the Financial Services and Markets Act 2000 (Financial Promotion) Order
              2005 (the “Order”)) or other persons to whom it may lawfully be communicated in accordance with the Order;
              or (iii) high net worth bodies corporate, unincorporated associations and partnerships and the trustees of
              high value trusts, as described in Article 49(2)(a) to (d) of the Order (all such persons together being
              referred to as “Relevant Persons”). Any investment or investment activity to which this Teaser may relate
              is available in the United Kingdom only to Relevant Persons and will be engaged in only with Relevant
              Persons.
            </Paragraph>
            <Paragraph>
              The contents of this Teaser have not been reviewed by any regulatory authority in Hong Kong. You are
              advised to exercise caution in relation to the offer. If you are in any doubt about any of the contents of
              this Teaser, you should obtain independent professional advice. Please note that (i) securities may not be
              offered or sold in Hong Kong by means of this Teaser or any other document other than to professional
              investors within the meaning of Part I of Schedule 1 to the Securities and Futures Ordinance of Hong Kong
              (Cap. 571, Laws of Hong Kong) (SFO) and any rules made thereunder, or in other circumstances which do not
              result in the document being a “prospectus” as defined in the Companies (Winding-Up and Miscellaneous
              Provisions) Ordinance of Hong Kong (Cap. 32, Laws of Hong Kong) (C(WUMP)O) or which do not constitute an
              offer or invitation to the public for the purposes of the C(WUMP)O or the SFO, and (ii) no person shall
              issue, or possess for the purposes of issue, whether in Hong Kong or elsewhere, any advertisement,
              invitation or document relating to securities which is directed at, or the contents of which are likely to
              be accessed or read by, the public in Hong Kong (except if permitted to do so under the securities laws of
              Hong Kong) other than with respect to securities which are or are intended to be disposed of only to
              persons outside Hong Kong or only to such professional investors.
            </Paragraph>
            <Paragraph>
              GSI and Carnegie are acting as joint placement agents of the Company in connection with any potential
              offering of securities described in or in connection with this Teaser and do not represent any other party
              in relation to Project Boom. This Teaser was prepared solely by the Company. The information contained in
              this Teaser was obtained from publicly available sources and has not been independently verified by the
              Company, GSI or Carnegie and does not constitute a recommendation from GSI or Carnegie to the recipient.
              GSI and Carnegie have relied upon the accuracy and completeness of all of the financial, accounting and
              other information discussed with or reviewed by them and have assumed such accuracy and completeness for
              purposes of this Teaser. Neither the Company, GSI, Carnegie nor any of their respective affiliates makes
              any representation or warranty, express or implied, as to the accuracy or completeness of this Teaser or
              the information contained in this Teaser, or for any reliance placed on this Teaser by any person(s), and
              any liability therefor (including in respect of direct, indirect or consequential loss or damage) is
              expressly disclaimed. To the maximum extent permitted by law, by accepting this Teaser, each recipient is
              deemed to irrevocably waive any claim or right against any of the Company, GSI, Carnegie or their
              respective affiliates, officers, employees or agents in connection with the accuracy or completeness of
              this Teaser.
            </Paragraph>
            <Paragraph>
              NOTHING HEREIN OR ELSEWHERE SHALL BE DEEMED TO IMPLY THAT ANY PLACEMENT AGENT IS ACTING AS INITIAL
              PURCHASER, UNDERWRITER OR IN ANY SIMILAR CAPACITY WHATSOEVER WITH RESPECT TO ANY OFFERING OR SALE OF ANY
              SECURITIES OF THE COMPANY.
            </Paragraph>
            <Paragraph>
              Statements in this Teaser, including those regarding the possible or assumed future or other performance
              of the Company or its industry or other trend projections, constitute forward-looking statements. Forward-
              looking statements can be identified by the use of words such as “believes,” “expects,” “may,” “will,”
              “should,” “seeks,” “approximately,” “intends,” “plans,” “estimates” and “anticipates” or the negative
              terms or other comparable words, or by discussions of strategy, plans or intentions. Examples of
              forward-looking statements are statements that concern the Company’s future plans, strategies, revenues,
              costs, projections and liquidity. By their nature, forward-looking statements involve known and unknown
              risks, uncertainties, assumptions and other factors because they relate to events and depend on
              circumstances that will occur in the future whether or not outside the control of the Company. Such
              factors may cause actual results, performance or developments to differ materially from those expressed or
              implied by such forward-looking statements. Accordingly, no assurance is given that such forward-looking
              statements will prove to have been correct. Past performance does not guarantee or predict future
              performance. This Teaser should not be relied on as a promise or representation as to the future and does
              not purport to contain all of the information that may be required to evaluate any potential transaction
              and should thus not be relied on in connection with any such potential transaction.
            </Paragraph>
            <Paragraph>
              Neither GSI, Carnegie, the Company or the Company’s shareholders, nor their respective affiliates and
              their respective officers, employees and agents undertake any obligation to review, update, confirm or
              otherwise revise this Teaser or any forward-looking statements. None of the Company, GSI or Carnegie
              provide legal, accounting or tax advice and you are strongly advised to consult your own independent
              advisors on any legal, tax or accounting issues relating to these materials. The receipt of this Teaser by
              any recipient is not to be taken as constituting the giving of investment advice by GSI or Carnegie to
              that recipient, nor make such person a client of the GSI or Carnegie. No person shall be treated as a
              client of GSI or Carnegie or be entitled to the protections afforded to clients of GSI, or Carnegie solely
              by virtue of having received this Teaser, and neither GSI nor Carnegie will be responsible to any
              person(s) other than the Company for providing such protections or for providing financial advice in
              relation to Project Boom.
            </Paragraph>
            <Paragraph>
              This Teaser shall be governed by and construed in accordance with Swedish law without regard to its
              principles on conflict of laws.
            </Paragraph>
          </div>
        </OverlayContainer>
      )}
    </Login>
  );
};
