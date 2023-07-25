/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
    const rList = [], dList = [];
    const len = senate.length;
    for (let i = 0; i < senate.length; i += 1) {
        if (senate[i] === 'R') {
            rList.push(i);
        } else {
            dList.push(i);
        }
    }
    while (rList.length > 0 && dList.length > 0) {
        if (rList[0] < dList[0]) {
            dList.shift();
            const r = rList.shift();
            rList.push(r + len);
        } else {
            rList.shift();
            const d = dList.shift();
            dList.push(d + len);
        }
    }
    return rList.length > 0 ? 'Radiant' : 'Dire';
};