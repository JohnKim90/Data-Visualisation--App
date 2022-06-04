import{select} from 'd3';

const svg = d3.select('svg');

const circle = svg.append('circle');

circle.attr('r',200);

circle.attr('cx', 960/2);
