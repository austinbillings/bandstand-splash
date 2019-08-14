import React from 'react';

const MarkupSample = () => (
  <div className="stack-grid">
    <article>
      <h1>Hello World<sup className="text-primary">TM</sup></h1>
      <p>Lorem ipsum dolor sit amet, I will wear this fishbowl on my head, that will clear my senses. No, but rather a fishbowl filled with junglefish! ...Damnit, Jacobs! </p>

      <button className="btn btn-normal">Normal!</button>
      <button className="btn btn-calm">Calm!</button>
      <button className="btn btn-warning">Warning!</button>
      <button className="btn btn-success">Success!</button>
      <button className="btn btn-primary">Primary!</button>
      <button className="btn btn-secondary">Secondary!</button>
    </article>

    <hr />

    <article>
      <h2>Subhead 2</h2>
      <p className="text-subtle">[Subtle] Lorem ipsum dolor sit amet, I will wear this fishbowl on my head, that will clear my senses. No, but rather a fishbowl filled with junglefish! ...Damnit, Jacobs! </p>
      <p className="text-calm">[Calm] Lorem ipsum dolor sit amet, I will wear this fishbowl on my head, that will clear my senses. No, but rather a fishbowl filled with junglefish! ...Damnit, Jacobs! </p>
      <p className="text-warning">[Warning] Lorem ipsum dolor sit amet, I will wear this fishbowl on my head, that will clear my senses. No, but rather a fishbowl filled with junglefish! ...Damnit, Jacobs! </p>
      <p className="text-danger">[Danger] Lorem ipsum dolor sit amet, I will wear this fishbowl on my head, that will clear my senses. No, but rather a fishbowl filled with junglefish! ...Damnit, Jacobs! </p>
      <p className="text-primary">[Primary] Lorem ipsum dolor sit amet, I will wear this fishbowl on my head, that will clear my senses. No, but rather a fishbowl filled with junglefish! ...Damnit, Jacobs! </p>
      <p className="text-secondary">[Secondary] Lorem ipsum dolor sit amet, I will wear this fishbowl on my head, that will clear my senses. No, but rather a fishbowl filled with junglefish! ...Damnit, Jacobs! </p>

      <h3>Subhead 3</h3>
      <p className="text-warning">Lorem ipsum dolor sit amet, I will wear this fishbowl on my head, that will clear my senses. No, but rather a fishbowl filled with junglefish! ...Damnit, Jacobs! </p>

      <br/>
      <hr />
      <br/>

      <h4 className="text-thin text-engraved">Engraved Subhead 4</h4>
      <h1 style={{ maxWidth: '890px' }}>
        <b>Every time it rains, it rains... pennies from heaven.</b> <nobr><i>Shoo-bee doo-be!</i></nobr>
      </h1>

      <br />

      <h5 className="text-medium text-engraved">Engraved Subhead 5</h5>
      <p className="text-calm">Lorem ipsum dolor sit amet, I will wear this fishbowl on my head, that will clear my senses. No, but rather a fishbowl filled with junglefish! ...Damnit, Jacobs! </p>

      <br />

      <h6 className="text-heavy text-engraved">Engraved Subhead 6</h6>
      <p className="text-danger text-engraved">Lorem ipsum dolor sit amet, I will wear this fishbowl on my head, that will clear my senses. No, but rather a fishbowl filled with junglefish! ...Damnit, Jacobs! </p>
    </article>

    <hr/>

    <article>
      <blockquote>
        <p>The night is darkest just before the dawn.</p>
        <cite>– Some guy, probably</cite>
      </blockquote>
    </article>
  </div>
);

export default MarkupSample;
