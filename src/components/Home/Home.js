import { v4 as uuid } from "uuid";

function ReferenceItem({ datum, localeData }) {
  const { name, authors, chineseName, pub, pubYear } = datum;
  return (
    <ul>
      <em>{name}</em>
      <li>
        {localeData.authors}:&nbsp;&nbsp;
        {authors.join(", ")}
      </li>
      <li>
        {localeData.pub}:&nbsp;&nbsp;
        {pub}
      </li>
      {chineseName&&localeData.chineseName ? <li>
        {localeData.chineseName}:&nbsp;&nbsp;
        chineseName
      </li> : null}
      <li>
        {localeData.pubYear}:&nbsp;&nbsp;
        {pubYear}
      </li>
    </ul>
  );
}

function Home({ referenceData, localeData }) {
  console.log(referenceData);
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
  } = localeData;
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
                localeData ={localeData}
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
