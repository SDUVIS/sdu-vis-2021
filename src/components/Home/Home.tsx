import { v4 as uuid } from "uuid";
import { localeContext } from "../../context/localeContext.js";
import { useContext, memo } from "react";

type ReferenceItemType = {
    name: string;
    authors: string[];
    pub: string;
    pubYear: number;
    chinese?: undefined;
} | {
    name: string;
    authors: string[];
    chinese: string;
    pub: string;
    pubYear: number;
}

const ReferenceItem: React.FC<{datum: ReferenceItemType}> = ({ datum }) => {
  const { locale } = useContext(localeContext);
  const { name, authors, chinese, pub, pubYear } = datum;
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
      {chinese? (
        <li>{"中文名"}:&nbsp;&nbsp; {chinese}</li>
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
          {aimContents.map((content: string, i: number) => (
            <li key={i}>{content}</li>
          ))}
        </ul>
      </section>
      <section>
        <h2>{request}</h2>
        <hr />
        <p>{requestContentDesc}</p>
        <ul>
          {requestContents.map((content: string) => (
            <li key={uuid()}>{content}</li>
          ))}
        </ul>
      </section>
      <section>
        <h2>{reference}</h2>
        <hr />
        <ul>
          {references.map((datum, i) => (
            <li key={i}>
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

export default memo(Home);
