import * as rates from './constants/Rates';
import* as package_type from './constants/Types'

/**
 * returns the mark up price estimated to take products and repack them for sale.
 * @param {Number} base_price
 * @param {Number} people_required
 * @param {String} type
 * @return {Number} final_cost
 */

export function getMarkup(base_price, people_required, type){
  let new_markup
  let final_markup;
  let final_cost;

  if (base_price === null) {
    return 'Cannot calculate markup without base price';
  }

  let markup_with_flat_rate = base_price + (base_price * rates.FLAT_RATE);

    people_required !== 0 ? new_markup = markup_with_flat_rate + ((markup_with_flat_rate * rates.MARKUP_PER_PERSON) * people_required)
                          : new_markup = markup_with_flat_rate;

    switch (type) {
      case package_type.FOOD:
        final_markup = new_markup + (markup_with_flat_rate * rates.FOOD_MARKUP);
        break;
      case package_type.ELECTRONIC:
        final_markup = new_markup + (markup_with_flat_rate * rates.ELECTRONICS_MARKUP);
        break;
      case package_type.DRUGS:
        final_markup = new_markup + (markup_with_flat_rate * rates.PHARMACEUTICALS_MARKUP);
        break;
      default:
        final_markup = new_markup;
    }

    final_cost = roundToTwo(final_markup);

    return final_cost;
}

/*
* Round the cost to two decimal places.
*/
function roundToTwo(num) {
    return + (Math.round(num + "e+2")  + "e-2");
}
