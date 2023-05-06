import { Link } from 'react-daisyui'

function HelpPage() {
  return (
    <div className="container mx-auto flex flex-col pt-36">
      <div className="h2">Contact Us</div>
      <br />
      <p>
        For help or feedback on{' '}
        <span>
          <i>Good Days Ahead</i>
        </span>
        , please contact us at <Link href="mailto:help@mindstreet.com">help@mindstreet.com</Link>
        and we will respond shortly.
      </p>

      <br />
      <h2 className="h2">Technical Requirements</h2>
      <br />
      <ul>
        <li>Windows or Mac PC or Laptop with speakers or headphones</li>
        <li>
          Internet Browser with Javascript and cookies enabled. Recommended: Safari, Microsoft Edge or Google Chrome.
        </li>
        <br />
        <li className="j">Internet connection</li>
        <br />
        <li>High speed Internet connection (not dialup)</li>
        <br />
        <li>
          Closed Networks: If your network requires the program URLs for a “whitelist”, please add the following URLs to
          your whitelist: *.gooddaysahead.com and *.mindstreet.app
        </li>
      </ul>

      <br />
      <h2>Feeling Hopeless or Suicidal?</h2>
      <br />
      <p>
        Please call the{' '}
        <Link href="http://www.suicidepreventionlifeline.org/Default.aspx" target="_blank" rel="noreferrer">
          National Suicide Prevention Lifeline
        </Link>{' '}
        at 1-800-273-8255 - available 24 hours a day.
      </p>
      <Link
        id="suicide_prevention_link"
        href="http://www.suicidepreventionlifeline.org/Default.aspx"
        target="_blank"
      ></Link>
    </div>
  )
}

export default HelpPage
