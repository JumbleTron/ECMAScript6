/* global chai:false sinon: false logger: false */
/* global no-console: 0*/
'use strict';

const expect = chai.expect;
const testMsg = 'test message';

describe('Logger', () => {
	it('is an object', () => {
		expect(logger).to.be.an('object');
	});
	it('has success method', () => {
		expect(logger.success).to.be.a('function');
	})
});
describe('Logger success', () => {
	beforeEach(() => {
		sinon.spy(console, 'log');
	});
	afterEach(() => {
		console.log.restore();
	});
	it('calls console.log', () => {
		logger.success(testMsg);
		expect(console.log).to.have.been.calledOnce;
	})
});

