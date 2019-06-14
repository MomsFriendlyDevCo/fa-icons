var expect = require('chai').expect;
var fai = require('..');

describe('faIcons', ()=> {

	it('should match basic icon classes', ()=> {
		expect(fai('something.avi')).to.be.equal('fas fa-file-video');
		expect(fai('something.mp4')).to.be.equal('fas fa-file-video');
		expect(fai('something.csv')).to.be.equal('fas fa-file-csv');
		expect(fai('something.jpg')).to.be.equal('fas fa-file-image');
		expect(fai('something.png')).to.be.equal('fas fa-file-image');
		expect(fai('something.gif')).to.be.equal('fas fa-file-image');
		expect(fai('something.gif', {class: 'fal'})).to.be.equal('fal fa-file-image');
	});

});
