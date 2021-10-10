import { v4 as uuid } from "uuid";
import { localeContext } from "../../context/localeContext";
import { useContext } from "react";

function ReferenceItem({ datum }) {
  const { locale } = useContext(localeContext);
  const { name, authors, chineseName, pub, pubYear } = datum;
  return (
    <ul>
      <em>{name}</em>
      <li>
        {locale.authors}:&nbsp;&nbsp;
        {authors.join(", ")}
      </li>
      <li>
        {locale.pub}:&nbsp;&nbsp;
        {pub}
      </li>
      {chineseName && locale.chineseName ? (
        <li>{locale.chineseName}:&nbsp;&nbsp; chineseName</li>
      ) : null}
      <li>
        {locale.pubYear}:&nbsp;&nbsp;
        {pubYear}
      </li>
    </ul>
  );
}

function Home() {
  const {locale, description, references} = useContext(localeContext);
  const { courseDesc, aims, request, reference } = locale;
  const {
    couseIntro: courseIntroContent,
    courseDesc: courseDescContent,
    aims: aimContents,
    requestDesc: requestContentDesc,
    requestContents,
  } = description;
  return (
    <div>
      <section>
        <p>{courseIntroContent}</p>
      </section>
      <section>
        <h2>{courseDesc}</h2>
        <hr />
        <p>{courseDescContent}</p>
      </section>
      <section>
        <h2>{aims}</h2>
        <hr />
        <ul>
          {aimContents.map((content) => (
            <li key={uuid()}>{content}</li>
          ))}
        </ul>
      </section>
      <section>
        <h2>{request}</h2>
        <hr />
        <p>{requestContentDesc}</p>
        <ul>
          {requestContents.map((content) => (
            <li key={uuid()}>{content}</li>
          ))}
        </ul>
      </section>
      <section>
        <h2>{reference}</h2>
        <hr />
        <ul>
          {references.map((datum) => (
            <li key={uuid()}>
              {" "}
              <ReferenceItem datum={datum}></ReferenceItem>
              <br />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Home;
