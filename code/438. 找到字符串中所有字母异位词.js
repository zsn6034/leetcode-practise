var findAnagrams = function(s, p) {
	const need = new Map();
	const window = new Map();
	for (let c of p) {
		need.set(c, (need.get(c) || 0) + 1);
	}
	let left = 0, right = 0, valid = 0;
	const res = [];
	while (right < s.length) {
		const c = s[right];
		right += 1;
		if (need.has(c)) {
			window.set(c, (window.get(c) || 0) + 1);
			if (window.get(c) === need.get(c)) {
				valid += 1;
			}
		}
		if (right - left >= p.length) {
			if (valid === need.size) {
				res.push(left);
			}
			const d = s[left];
			left += 1;
			if (need.has(d)) {
				if (window.get(d) === need.get(d)) {
					valid -= 1;
				}
				window.set(d, window.get(d) - 1);
			}
		}
	}
	return res;
}