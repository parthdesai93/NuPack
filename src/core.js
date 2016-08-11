export function getMarkup(base_price, people_required, type){
  const FLAT_RATE = 0.05;
  const MARKUP_PER_PERSON = 0.012;
  const FOOD_MARKUP = 0.13;
  const ELECTRONICS_MARKUP = 0.02;
  const PHARMACEUTICALS_MARKUP = 0.075;

  let new_markup
  let final_markup;
  let final_cost;

  if (base_price === null){
    return 'Cannot calculate markup without base price';
  }

  let markup_with_flat_rate = base_price + (base_price * FLAT_RATE);

    people_required != 0 ? new_markup = markup_with_flat_rate + ((markup_with_flat_rate * MARKUP_PER_PERSON) * people_required)
                         : new_markup = markup_with_flat_rate;


    if (type === 'food')
      final_markup = new_markup + (markup_with_flat_rate * FOOD_MARKUP);
    else if(type === 'electronic')
      final_markup = new_markup + (markup_with_flat_rate * ELECTRONICS_MARKUP);
    else if( type === 'drugs')
      final_markup = new_markup + (markup_with_flat_rate * PHARMACEUTICALS_MARKUP);
    else
      final_markup = new_markup;


    final_cost = roundToTwo(final_markup);

    return final_cost;
}

function roundToTwo(num) {
    return +(Math.round(num + "e+2")  + "e-2");
}
