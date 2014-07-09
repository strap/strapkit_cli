 /*
  Copyright 2014 EnSens, LLC D/B/A Strap
  Portions derived from original source created by Apache Software Foundation.
 
    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
 */

var fs = require('fs'),
    strapkit_lib = require('strapkit-lib'),
    strapkit = strapkit_lib.strapkit,
    Q = require('q'),
    path = require('path');

module.exports = function help () {
    var raw = fs.readFileSync(path.join(__dirname, '..', 'doc', 'help.txt')).toString('utf8');
    strapkit.emit('results', raw);
    return Q();
};
