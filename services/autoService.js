var hosts = require('hosts-group');
var request = require('request');
var async = require('async');
var md5 = require("blueimp-md5");

var groupName ="node";
var options = {
    groupName: groupName,
    disabled: false
}

module.exports = {
    compare : function(param,cb) {
        async.mapLimit(param.servers,1,function(ip,callback){
            hosts.set(param.host, ip,options);
            request({
                method: 'get',
                url: param.url
            }, function(err, resp, body) {
                hosts.remove(param.host,ip,groupName);
                if(err){
                    callback(err,null);
                    return ;
                }
                callback(null,{ip:ip ,md5:md5(body)});
            });
        },function(errs, results) {
            if (errs) {
                cb(errs,null);
                return;
            }
            cb(null,results);
        });
    }
}

