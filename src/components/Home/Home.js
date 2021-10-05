import { v4 as uuid } from "uuid";
import referenceData from "../../statics/references.json";

function ReferenceItem({ datum, locale }) {
  const { name, authors, chineseName, pub, pubYear } = datum;
  return (
    <ul>
      <b>{name}</b>
      <li>
        {locale.authors}:&nbsp;&nbsp;
        {authors.join(", ")}
      </li>
      <li>
        {locale.pub}:&nbsp;&nbsp;
        {pub}
      </li>
      {chineseName&&locale.chineseName ? <li>
        {locale.chineseName}:&nbsp;&nbsp;
        chineseName
      </li> : null}
      <li>
        {locale.pubYear}:&nbsp;&nbsp;
        {pubYear}
      </li>
    </ul>
  );
}

function Home({ data }) {
  const {
    courseIntroContent,
    courseDesc,
    courseDescContent,
    aims,
    aimContents,
    request,
    requestContentDesc,
    requestContents,
    reference,
    authors,
    chineseName,
    pub,
    pubYear,
  } = data;
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
          {referenceData.map((datum) => (
            <li key={uuid()}>
              {" "}
              <ReferenceItem
                datum={datum}
                locale={{ authors, chineseName, pub, pubYear }}
              ></ReferenceItem>
              <br/>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Home;
