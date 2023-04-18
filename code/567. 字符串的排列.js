var checkInclusion = function(s1, s2) {
	let need = new Map();
	let window = new Map();
	for (let c of s1) {
		need.set(c, (need.get(c) || 0) + 1);
	}
	let left = 0, right = 0, valid = 0;
	while (right < s2.length) {
		let c = s2[right];
		right += 1;
		if (need.has(c)) {
			window.set(c, (window.get(c) || 0) + 1);
			if (window.get(c) === need.get(c)) {
				valid += 1;
			}
		}
		if (right - left >= s1.length) {
			if (valid === need.size) {
				return true;
			}
			let d = s2[left];
			left += 1;
			if (need.has(d)) {
				if (window.get(d) === need.get(d)) {
					valid -= 1;
				}
				window.set(d, window.get(d) - 1);
			}
		}
	}
	return false;
}