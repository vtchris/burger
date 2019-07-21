var orm = require("../config/orm");

var burger = {
    selectAllBurgers:  function(cb){
        orm.selectAll("burgers",function(res){
            cb(res);
        })
    } 
}


module.exports = burger;