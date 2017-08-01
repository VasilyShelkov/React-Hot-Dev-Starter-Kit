require("jest-styled-components");
const renderer = require("react-test-renderer");
const sinon = require("sinon");
const sinonTest = require("sinon-test");
const shallow = require("enzyme").shallow;

sinon.test = sinonTest.configureTest(sinon);

global.sinon = sinon;
global.shallow = shallow;
global.renderer = renderer;
