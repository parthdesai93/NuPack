import {expect} from 'chai';

import {getMarkup} from '../src/core';

describe('application logic', () => {
  it('calculates food markup properly', () => {
    const base_price = 1299.99;
    const people_required = 3;
    const type = 'food';
    const final_price = getMarkup(base_price, people_required, type);
    expect(final_price).to.equal(
      1591.58
    );
  });

  it('calculates drug markups properly', () => {
    const base_price = 5432.00;
    const people_required = 1;
    const type = 'drugs';
    const final_price = getMarkup(base_price, people_required,type);
    expect(final_price).to.equal(
      6199.81
    )
  })

  it('calculates books properly', () => {
    const base_price = 12456.95;
    const people_required = 4;
    const type = 'books';
    const final_price = getMarkup(base_price, people_required,type);
    expect(final_price).to.equal(
      13707.63
    );
  });

  it('handles null base price', () => {
    const base_price = null;
    const people_required = 2;
    const type = null;
    const final_price = getMarkup(base_price, people_required,type);
    expect(final_price).to.equal(
      'Cannot calculate markup without base price'
    );
  });

})
