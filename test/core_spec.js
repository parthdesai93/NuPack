import {expect} from 'chai';

import {getMarkup} from '../src/core';

describe('application logic', () => {
  it('calculates food markup properly', () => {
    let base_price = 1299.99;
    let people_required = 3;
    let type = 'food';
    let final_price = getMarkup(base_price, people_required, type);
    expect(final_price).to.equal(
      1591.58
    );
  });

  it('calculates drug markups properly', () => {
    let base_price = 5432.00;
    let people_required = 1;
    let type = 'drugs';
    let final_price = getMarkup(base_price, people_required,type);
    expect(final_price).to.equal(
      6199.81
    )
  })

  it('calculates books properly', () => {
    let base_price = 12456.95;
    let people_required = 4;
    let type = 'books';
    let final_price = getMarkup(base_price, people_required,type);
    expect(final_price).to.equal(
      13707.63
    );
  });

  it('handles null base price', () => {
    let base_price = null;
    let people_required = 2;
    let type = null;
    let final_price = getMarkup(base_price, people_required,type);
    expect(final_price).to.equal(
      'Cannot calculate markup without base price'
    );
  });

})
