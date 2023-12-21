import Navbar from "Components/Navbar"
import Footer from "Components/Footer"
export default function Privacy() {
  return (
    <div className="privacywrap p-10 ">
        <Navbar/>
      <h1 className="text-4xl mb-6 font-semibold">Privacy Policy</h1>
      <p className="text-lg mb-3">Last updated: 12/20/2023</p>

      <h2 className="text-2xl mb-3 font-semibold">Introduction</h2>
      <p className="text-lg mb-3">
        Welcome to Wisconsin Vintners Association. This Privacy Policy explains how we
        collect, use, disclose, and safeguard your information when you visit
        our website, mobile application, and use other services (collectively,
        the "Services").
      </p>
      <p className="text-lg mb-3">
        Please read this Privacy Policy carefully. If you do not agree with the
        terms of this privacy policy, please do not access the site.
      </p>

      <h2 className="text-2xl mb-3 font-semibold">Information We Collect</h2>
      <h2 className="mb-2">
        Personal Data: Personally identifiable information such as your name,
        email address, and telephone number, that you voluntarily give to us
        when you register with the Services or when you choose to participate in
        various activities related to the Services.
      </h2>
      <h2 className="mb-2">
        Usage Data: Automatically collected information, which may include IP
        addresses, browser types, browser versions, and various pages that users
        visit.
      </h2>
      <h2 className="mb-2">
        Cookies: Data files that are placed on your device or computer and often
        include an anonymous unique identifier.
      </h2>

      <h2 className="mb-2">
        <p>
          Use of Your Information We may use the information we collect from you
          in the following ways: - To operate and maintain the Services. - To
          improve user experience. - To send periodic emails regarding services,
          updates, and other information. - To monitor and analyze usage and
          trends.
        </p>
      </h2>

      <h2 className="mb-2">
        Sharing Your Information{" "}
        <p>
          We do not sell, trade, or otherwise transfer your personally
          identifiable information to outside parties unless we provide users
          with advance notice. This does not include website hosting partners
          and other parties who assist us in operating our website, conducting
          our business, or serving our users.{" "}
        </p>
      </h2>

      <h2 className="mb-2">
        Security
        <p>
          {" "}
          We use commercially reasonable methods to secure your personal
          information, but please note that no method of transmission over the
          Internet or method of electronic storage is 100% secure.{" "}
        </p>
      </h2>

      <h2 className="mb-2">
        Third-Party Websites
        <p>
          The Services may contain h2nks to third-party websites. We are not
          responsible for the privacy practices or the content of those
          third-party websites.{" "}
        </p>
      </h2>

      <h2 className="mb-2">
        Children's Privacy{" "}
        <p>
          Our Services are not intended for use by children under the age of 13,
          and we do not knowingly collect personal information from children
          under 13.{" "}
        </p>
      </h2>

      <h2 className="mb-2">
        Changes to This Privacy Policy
        <p>
          We may update our Privacy Policy from time to time. We will notify you
          of any changes by posting the new Privacy Policy on this page
        </p>
      </h2>
      <Footer/>
    </div>
  );
}
