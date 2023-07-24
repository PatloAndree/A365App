const nlhelpers = {
    jsonToString: function (obj, separator, listSeparator) {
        var c = [], l = [], s = '¦', ls = '¯', p, d = '';
        if (Array.isArray(obj)) {
            obj.forEach(function (o1, i1) {
                p = Object.keys(o1);
                if (p.length > 0) {
                    p.forEach(function (o2, i2) {
                        c.push(o1[o2]);
                    });
                    l.push(c.join(separator || s));
                    c = [];
                }
            });
            d = l.join(listSeparator || ls);
        }
        else if (typeof obj == 'object') {
            p = Object.keys(obj);
            if (p.length > 0) {
                p.forEach(function (o, i) {
                    c.push(obj[o]);
                });
                d = c.join(separator || s);
            }
        } else d = obj;
        return d;
    },
    stringToArrayOrObject: function (properties, data, isArray) {
        var c, oReg, res;
        isArray = isArray === undefined ? true : isArray;
        if (isArray) {
            c = [];
            data.forEach(function (o1, i1) {
                oReg = o1.split('¦');
                c[i1] = {};
                for (let i = 0; i < properties.length; i++) {                    
                    c[i1][properties[i]] = oReg[i];
                }
            });
            res = c;
        }
        else {
            c = {};
            oReg = data.split('¦');
            for (let i = 0; i < properties.length; i++) {
                c[properties[i]] = oReg[i];
            }
            res = c;
        }
        return res;
    }
};

export default nlhelpers;