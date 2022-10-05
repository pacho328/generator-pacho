'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-pacho:pacho', () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, '../generators/pacho'))
      .withPrompts({ someAnswer: true });
  });

  it('creates files', () => {
    assert.file(['dummyfile.txt']);
  });
});
