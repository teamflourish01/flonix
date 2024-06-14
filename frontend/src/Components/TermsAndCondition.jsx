import React from "react";
import "../Style/TermsAndCondition.css";
import { Helmet } from "react-helmet";

const TermsAndCondition = () => {
  const domain = process.env.REACT_APP_DOMAIN;

  return (
    <>
      {/* Meta Section */}
      <Helmet>
        <meta charSet="utf-8" />
        <title>Terms & Conditions | Flonix Technology </title>
        <meta name="description" content="" />
        <link rel="canonical" href={`${domain}/TermsAndCondition`} />
      </Helmet>
      {/* <section  className="" style={{margin:"50px 0"}}>
      <div className="">
        <div className="main-width">
          <div>
            <div className="under1320width">
              <div className="all-page-padding">
                <div className='terms-and-condition-bg'>
                    <div className='background-text-privacy-policy'>
                    <p className='privacy-policy-banner-heading'>Terms and conditions</p>
                    </div>
                </div>  
              </div>
            </div>
          </div>
        </div>
      </div>
      </section> */}
      <section className="" style={{ margin: "50px 0" }}>
        <div className="">
          <div className="main-width">
            <div>
              <div className="under1320width">
                <div className="all-page-padding">
                  <div
                    className="all-heading-and-pera"
                    style={{ margin: "25px 0" }}
                  >
                    {/* <p className='privacy-policy-heading'>1.Introduction</p> */}
                    <ul>
                      <li>
                        <p className="privacy-policy-peragraph">
                          Welcome to Flonix Technology. By accessing or using
                          our website located at <a href="https://flonix.in/">flonix.in</a> , you agree to be
                          bound by these Terms and Conditions. If you disagree
                          with any part of these terms, you may not access the
                          Service. The Service and its original content,
                          features, and functionality are and will remain the
                          exclusive property of Flonix Technology and its
                          licensors. Our trademarks and trade dress may not be
                          used in connection with any product or service without
                          the prior written consent of Flonix Technology.
                        </p>
                      </li>
                      <li>
                        <p className="privacy-policy-peragraph">
                          Users of our Service agree to use it only for lawful
                          purposes and in a way that does not infringe the
                          rights of, restrict, or inhibit anyone else's use and
                          enjoyment of the Service. Prohibited behavior includes
                          harassing or causing distress or inconvenience to any
                          other user, transmitting obscene or offensive content,
                          or disrupting the normal flow of dialogue within our
                          Service.
                        </p>
                      </li>
                      <li>
                        <p className="privacy-policy-peragraph">
                          Our Service may contain links to third-party websites
                          or services that are not owned or controlled by Flonix
                          Technology. Flonix Technology has no control over and
                          assumes no responsibility for, the content, privacy
                          policies, or practices of any third-party websites or
                          services. You acknowledge and agree that Flonix
                          Technology shall not be responsible or liable,
                          directly or indirectly, for any damage or loss caused
                          or alleged to be caused by or in connection with the
                          use of or reliance on any such content, goods, or
                          services available on or through any such websites or
                          services.
                        </p>
                      </li>
                      <li>
                        <p className="privacy-policy-peragraph">
                          In no event shall Flonix Technology, nor its
                          directors, employees, partners, agents, suppliers, or
                          affiliates, be liable for any indirect, incidental,
                          special, consequential, or punitive damages, including
                          without limitation, loss of profits, data, use,
                          goodwill, or other intangible losses, resulting from
                          your access to or use of or inability to access or use
                          the Service; any conduct or content of any third party
                          on the Service; any content obtained from the Service;
                          and unauthorized access, use, or alteration of your
                          transmissions or content, whether based on warranty,
                          contract, tort (including negligence), or any other
                          legal theory, whether or not we have been informed of
                          the possibility of such damage, and even if a remedy
                          set forth herein is found to have failed of its
                          essential purpose.
                        </p>
                      </li>
                      <li>
                        <p className="privacy-policy-peragraph">
                          Your use of the Service is at your sole risk. The
                          Service is provided on an "AS IS" and "AS AVAILABLE"
                          basis. The Service is provided without warranties of
                          any kind, whether express or implied, including, but
                          not limited to, implied warranties of merchantability,
                          fitness for a particular purpose, non-infringement, or
                          course of performance.
                        </p>
                      </li>
                      <li>
                        <p className="privacy-policy-peragraph">
                          These Terms shall be governed and construed in
                          accordance with the laws of India without regard to
                          its conflict of law provisions. We reserve the right,
                          at our sole discretion, to modify or replace these
                          Terms at any time. If a revision is material, we will
                          provide at least 30 days' notice before any new terms
                          taking effect. What constitutes a material change will
                          be determined at our sole discretion.
                        </p>
                      </li>
                      <li>
                        <p className="privacy-policy-peragraph">
                        If you have any questions about these Terms, please contact us at <a href="mailto:flonixtech@gmail.com">flonixtech@gmail.com</a> .
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsAndCondition;
