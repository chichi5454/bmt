/** @format */

import "./matter.css";
import banner from '../../../assets/history/history.png'

const Matter = () => {
  return (
    <div className="matter-page">
      <h2>Why we Matter</h2>
      <div className="matter-wrapper">
        <div className="matter-banner">
          <img src={banner} alt="banner" className="matter-banner-img"/>
        </div>
        <div className="matter-texts">
          <p>
            Computer Engineering Forum (CEF) matters for several important
            reasons:
          </p>
          <ol>
            <li>
              Knowledge Sharing: CEF provides a platform for experts,
              professionals, and enthusiasts to share their knowledge,
              experiences, and insights within the field of computer
              engineering. This collective wisdom contributes to the growth and
              advancement of the industry.
            </li>
            <li>
              Community and Networking: CEF fosters a sense of community among
              its members, allowing individuals with common interests to
              connect, collaborate, and build valuable professional networks.
              These connections can lead to job opportunities, partnerships, and
              collaborative projects.
            </li>
            <li>
              Professional Development: The forum offers resources and advice
              for career development, helping individuals navigate their
              computer engineering careers, make informed decisions, and access
              job listings in the field.
            </li>
            <li>
              Continuous Learning: CEF promotes lifelong learning by providing
              educational content, tutorials, and opportunities for skill
              development. This is crucial in a rapidly evolving industry like
              computer engineering.
            </li>
            <li>
              Collaboration: CEF encourages collaboration on projects, research
              initiatives, and discussions. This collaborative environment can
              lead to innovative solutions and the sharing of best practices.
            </li>
            <li>
              Access to Resources: The platform serves as a centralized resource
              hub where users can access a wealth of content, from articles and
              tutorials to code snippets and research findings, making it easier
              to stay informed and find solutions to technical challenges.
            </li>
            <li>
              Professional Networking: Building professional relationships
              within CEF can lead to job referrals, mentorship, and the
              discovery of new career opportunities.
            </li>
            <li>
              Transparency and Trust: CEF's commitment to providing reliable and
              trustworthy content ensures users can rely on the platform for
              accurate information and valuable insights.
            </li>
            <li>
              User-Centered Approach: CEF evolves based on user feedback and the
              changing needs of the community, making it a responsive and
              dynamic resource.
            </li>
          </ol>
          <p>
            In summary, CEF matters because it plays a vital role in connecting,
            educating, and empowering the computer engineering community. It
            serves as a valuable platform that contributes to the growth and
            professional development of its members while advancing the field as
            a whole.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Matter;
