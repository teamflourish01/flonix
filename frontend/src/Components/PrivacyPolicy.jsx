import React from "react";
import "../Style/PrivacyPolicy.css";
import { Helmet } from "react-helmet";

const PrivacyPolicy = () => {
  const domain = process.env.REACT_APP_DOMAIN;

  return (
    <>
      {/* Meta Section */}
      <Helmet>
        <meta charSet="utf-8" />
        <title>Privacy Policy | Flonix Technology</title>
        <link rel="canonical" href={`${domain}/PrivacyPolicy`} />
      </Helmet>
      {/* <section className="" style={{ margin: "50px 0" }}>
        <div className="">
          <div className="main-width">
            <div>
              <div className="under1320width">
                <div className="all-page-padding">
                  <div className="privacy-policy-bg">
                    <div className="background-text-privacy-policy">
                      <p className="privacy-policy-banner-heading">
                        We Care About Your Privacy
                      </p>
                      <p className="privacy-policy-banner-peragraph">
                        Your privacy is important to us at snap AI. We respect
                        your pravacy regarding any inforamtion we may collect
                        from you across our webite.
                      </p>
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
                  <div className="all-heading-and-pera">
                    <p className="privacy-policy-peragraph">
                      At Flonix Technology, accessible at Website.com, one of
                      our main priorities is the privacy of our visitors. This
                      Privacy Policy document contains types of information that
                      is collected and recorded by Flonix Technology and how we
                      use it. If you have additional questions or require more
                      information about our Privacy Policy, do not hesitate to
                      contact us through email at <a href="mailto:flonixtech@gmail.com">flonixtech@gmail.com</a>
                    </p>
                  </div>
                  <div
                    className="all-heading-and-pera"
                    style={{ padding: "10px 0" }}
                  >
                    <p className="privacy-policy-peragraph">
                      This privacy policy applies only to our online activities
                      and is valid for visitors to our website with regards to
                      the information that they shared and/or collect in Flonix
                      Technology. This policy is not applicable to any
                      information collected offline or via channels other than
                      this website.
                    </p>
                  </div>
                  <div
                    className="all-heading-and-pera"
                    style={{ padding: "25px 0" }}
                  >
                    <p className="privacy-policy-heading">Consent</p>
                    <ul>
                      <li>
                        <p className="privacy-policy-peragraph">
                          By using our website, you hereby consent to our
                          Privacy Policy and agree to its terms.
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className="all-heading-and-pera">
                    <p className="privacy-policy-heading">
                      Information we collect
                    </p>
                    <ul>
                      <li>
                        <p className="privacy-policy-peragraph">
                          The personal information that you are asked to
                          provide, and the reasons why you are asked to provide
                          it, will be made clear to you at the point we ask you
                          to provide your personal information.
                        </p>
                      </li>
                      <li>
                        <p className="privacy-policy-peragraph">
                          If you contact us directly, we may receive additional
                          information about you such as your name, email
                          address, phone number, the contents of the message
                          and/or attachments you may send us, and any other
                          information you may choose to provide.
                        </p>
                      </li>
                      <li>
                        <p className="privacy-policy-peragraph">
                          When you register for an Account, we may ask for your
                          contact information, including items such as name,
                          company name, address, email address, and telephone
                          number.
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div
                    className="all-heading-and-pera"
                    style={{ padding: "25px 0" }}
                  >
                    <p className="privacy-policy-heading">
                      How we use your information
                    </p>
                    <ul>
                      <li>
                        <p className="privacy-policy-peragraph">
                          Provide, operate, and maintain our website Improve,
                          personalize, and expand our website Understand and
                          analyze how you use our website
                        </p>
                      </li>
                      <li>
                        <p className="privacy-policy-peragraph">
                          Develop new products, services, features, and
                          functionality Communicate with you, either directly or
                          through one of our partners, including for customer
                          service, to provide you with updates and other
                          information relating to the website, and for marketing
                          and promotional purposes Send you emails Find and
                          prevent fraud Log Files
                        </p>
                      </li>
                      <li>
                        <p className="privacy-policy-peragraph">
                          Flonix Technology follows a standard procedure of
                          using log files. These files log visitors when they
                          visit websites. All hosting companies do this and a
                          part of hosting services' analytics. The information
                          collected by log files include internet protocol (IP)
                          addresses, browser type, Internet Service Provider
                          (ISP), date and time stamp, referring/exit pages, and
                          possibly the number of clicks. These are not linked to
                          any information that is personally identifiable. The
                          purpose of the information is for analyzing trends,
                          administering the site, tracking users' movement on
                          the website, and gathering demographic information.
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div
                    className="all-heading-and-pera"
                    style={{ padding: "25px 0" }}
                  >
                    <p className="privacy-policy-heading">
                      Cookies and Web Beacons
                    </p>
                    <ul>
                      <li>
                        <p className="privacy-policy-peragraph">
                          Like any other website, Flonix Technology uses
                          ‘cookies'. These cookies are used to store information
                          including visitors' preferences, and the pages on the
                          website that the visitor accessed or visited. The
                          information is used to optimize the users' experience
                          by customizing our web page content based on visitors'
                          browser type and/or other information.
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div
                    className="all-heading-and-pera"
                    style={{ padding: "25px 0" }}
                  >
                    <p className="privacy-policy-heading">
                      DoubleClick DART Cookie
                    </p>
                    <ul>
                      <li>
                        <p className="privacy-policy-peragraph">
                          Google is one of a third-party vendor on our site. It
                          also uses cookies, known as DART cookies, to serve ads
                          to our site visitors based upon their visit to
                          www.website.com and other sites on the internet.
                          However, visitors may choose to decline the use of
                          DART cookies by visiting the Google ad and content
                          network Privacy Policy at the following URL <br />
                          <a
                            href="https://policies.google.com/technologies/ads
"
                          >
                            https://policies.google.com/technologies/ads
                          </a>
                        </p>
                      </li>
                      <li>
                        <p className="privacy-policy-peragraph">
                          Some of advertisers on our site may use cookies and
                          web beacons. Our advertising partners are listed
                          below. Each of our advertising partners has their own
                          Privacy Policy for their policies on user data. For
                          easier access, we hyperlinked to their Privacy
                          Policies below.
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div
                    className="all-heading-and-pera"
                    style={{ padding: "25px 0" }}
                  >
                    <p className="privacy-policy-heading">Google</p>
                    <ul>
                      <li>
                        <p className="privacy-policy-peragraph">
                          <a href="https://policies.google.com/technologies/ads">
                            https://policies.google.com/technologies/ads
                          </a>
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div
                    className="all-heading-and-pera"
                    style={{ padding: "25px 0" }}
                  >
                    <p className="privacy-policy-heading">
                      Advertising Partners Privacy Policies
                    </p>
                    <ul>
                      <li>
                        <p className="privacy-policy-peragraph">
                          You may consult this list to find the Privacy Policy
                          for each of the advertising partners of Flonix
                          Technology.
                        </p>
                      </li>
                      <li>
                        <p className="privacy-policy-peragraph">
                          Third-party ad servers or ad networks uses
                          technologies like cookies, JavaScript, or Web Beacons
                          that are used in their respective advertisements and
                          links that appear on Flonix Technology, which are sent
                          directly to users' browser. They automatically receive
                          your IP address when this occurs. These technologies
                          are used to measure the effectiveness of their
                          advertising campaigns and/or to personalize the
                          advertising content that you see on websites that you
                          visit.
                        </p>
                      </li>
                      <li>
                        <p className="privacy-policy-peragraph">
                          Note that Flonix Technology has no access to or
                          control over these cookies that are used by
                          third-party advertisers.
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div
                    className="all-heading-and-pera"
                    style={{ padding: "25px 0" }}
                  >
                    <p className="privacy-policy-heading">
                      Third-Party Privacy Policies
                    </p>
                    <ul>
                      <li>
                      <p className="privacy-policy-peragraph">
                      Flonix Technology's Privacy Policy does not apply to other
                      advertisers or websites. Thus, we are advising you to
                      consult the respective Privacy Policies of these
                      third-party ad servers for more detailed information. It
                      may include their practices and instructions about how to
                      opt-out of certain options. You may find a complete list
                      of these Privacy Policies and their links here: Privacy
                      Policy Links.
                    </p>
                      </li>
                      <li>
                      <p className="privacy-policy-peragraph">
                      You can choose to disable cookies through your individual
                      browser options. To know more detailed information about
                      cookie management with specific web browsers, it can be
                      found at the browsers' respective websites. What Are
                      Cookies?
                    </p>
                      </li>
                    </ul>
                  
                   
                  </div>
                  <div
                    className="all-heading-and-pera"
                    style={{ padding: "25px 0" }}
                  >
                    <p className="privacy-policy-heading">
                      CCPA Privacy Policy (Do Not Sell My Personal Information)
                    </p>
                    <ul>
                      <li>
                      <p className="privacy-policy-peragraph">
                      Under the CCPA, among other rights, California consumers
                      have the right to:
                    </p>
                      </li>
                      <li>
                      <p className="privacy-policy-peragraph">
                      Request that a business that collects a consumer's
                      personal data disclose the categories and specific pieces
                      of personal data that a business has collected about
                      consumers.
                    </p>
                      </li>
                      <li>
                      <p className="privacy-policy-peragraph">
                      Request that a business delete any personal data about the
                      consumer that a business has collected.
                    </p>
                      </li>
                      <li>
                      <p className="privacy-policy-peragraph">
                      Request that a business that sells a consumer's personal
                      data, not sell the consumer's personal data.
                    </p>
                      </li>
                      <li>
                      <p className="privacy-policy-peragraph">
                      If you make a request, we have one month to respond to
                      you. If you would like to exercise any of these rights,
                      please contact us.
                    </p>
                      </li>
                    </ul>
                  </div>
                  <div
                    className="all-heading-and-pera"
                    style={{ padding: "25px 0" }}
                  >
                    <p className="privacy-policy-heading">
                      GDPR Privacy Policy (Data Protection Rights)
                    </p>
                    <ul>
                      <li>
                      <p className="privacy-policy-peragraph">
                      We would like to make sure you are fully aware of all of
                      your data protection rights. Every user is entitled to the
                      following:
                    </p>
                      </li>
                      <li>
                      <p className="privacy-policy-peragraph">
                      The right to access – You have the right to request copies
                      of your personal data. We may charge you a small fee for
                      this service.
                    </p>
                      </li>
                      <li>
                      <p className="privacy-policy-peragraph">
                      The right to rectification – You have the right to request
                      that we correct any information you believe is inaccurate.
                      You also have the right to request that we complete the
                      information you believe is incomplete.
                    </p>
                      </li>
                      <li>
                      <p className="privacy-policy-peragraph">
                      The right to erasure – You have the right to request that
                      we erase your personal data, under certain conditions.
                    </p>
                      </li>
                      <li>
                      <p className="privacy-policy-peragraph">
                      The right to restrict processing – You have the right to
                      request that we restrict the processing of your personal
                      data, under certain conditions.
                    </p>
                      </li>
                      <li>
                      <p className="privacy-policy-peragraph">
                      The right to data portability – You have the right to
                      request that we transfer the data that we have collected
                      to another organization, or directly to you, under certain
                      conditions.
                    </p>
                      </li>
                      <li>
                      <p className="privacy-policy-peragraph">
                      If you make a request, we have one month to respond to
                      you. If you would like to exercise any of these rights,
                      please contact us.
                    </p>
                      </li>
                    </ul>
                  </div>
                  <div
                    className="all-heading-and-pera"
                    style={{ padding: "25px 0" }}
                  >
                    <p className="privacy-policy-heading">
                      Children's Information
                    </p>
                    <ul>
                      <li>
                      <p className="privacy-policy-peragraph">
                      Another part of our priority is adding protection for
                      children while using the internet. We encourage parents
                      and guardians to observe, participate in, and/or monitor
                      and guide their online activity.
                    </p>
                      </li>
                      <li>
                      <p className="privacy-policy-peragraph">
                      Flonix Technology does not knowingly collect any Personal
                      Identifiable Information from children under the age of
                      13. If you think that your child provided this kind of
                      information on our website, we strongly encourage you to
                      contact us immediately and we will do our best efforts to
                      promptly remove such information from our records.
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

export default PrivacyPolicy;
