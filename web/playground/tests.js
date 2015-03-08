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

function accessorsTest() {
    var a1 = $v.value();
    if((typeof a1()) != "undefined") alert("1. Default accessor value is not undefined");
    
    var a2 = $v.value("asd");
    if(a2() != "asd") alert("2. Unexpected accessor value after creation");
    a2("dfg");
    if(a2() != "dfg") alert("2.1. Failed setting accessor value");
    var change1Captured = false;
    a2.listen(function() { change1Captured = true; });
    if(a2.listeners.length != 1) alert("2.1. Failed registering listener");
    var change2Captured = false;
    a2.listen(function() { change2Captured = true; });
    if(a2.listeners.length != 2) alert("2.1. Failed registering second listener");
    a2("sde");
    if(!change1Captured) alert("Listener didn't execute");
    if(!change2Captured) alert("Second listener didn't execute");
}

accessorsTest();