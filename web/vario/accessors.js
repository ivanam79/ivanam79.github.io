/* 
 * Copyright (c) 2015, Ivan Mishonov <ivan@conquex.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * * Redistributions of source code must retain the above copyright notice, this
 *   list of conditions and the following disclaimer.
 * * Redistributions in binary form must reproduce the above copyright notice,
 *   this list of conditions and the following disclaimer in the documentation
 *   and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */

$v.VALUE_CHANGED = 0;
$v.ARRAY_ITEM_ADDED = 1;
$v.ARRAY_ITEM_DELETED = 2;
$v.ARRAY_ITEM_CHANGED = 3;

$v.value = function (initialValue) {
    // Create accessor function
    var ret = function () {
        if (arguments.length == 0) {
            // Read value
            return ret.currentValue;
        } else {
            // Invoke listeners
            for(var i=0;i<ret.listeners.length;i++) {
                if(!ret.listeners[i]($v.VALUE_CHANGED, arguments[0], ret.currentValue)) {
                    // Updating value is canceled
                    return;
                }
            }
            // Write value
            ret.currentValue = arguments[0];
        }
    };
    ret.listen = function(f) {
        ret.listeners.push(f);
    };
    ret.listeners = [];
    ret.currentValue = initialValue;

    return ret;
};

$v.array = function (initialValue) {
    var ret = $v.value(initialValue);
    ret.add = function(item) {
        // TODO
    };
    
    ret.insert = function(index, item) {
        // TODO
    };
    
    return ret;
};

$v.hashMap = function(initialValue) {
    // TODO
};
