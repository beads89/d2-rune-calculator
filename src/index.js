import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { runewords } from './js/runewords.js';

$(document).ready(function() {
  $("#gearSlot").submit(function(event) {
    event.preventDefault();
    // const gearInput = $("#gearSlot").val();
    const runeInput = $(".rune-input").val();
    let runeWordOutput = runewords[runewords.map(function (runesHas) {return runesHas.runes;}).indexOf(runeInput)];
    console.log(runeWordOutput);
  });
});