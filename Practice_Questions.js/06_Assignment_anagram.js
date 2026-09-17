function findAnagrams(s, p) {
    const result = [];
    if (s.length < p.length) return result;

    // Frequency arrays for 'a' through 'z'
    const pCount = new Array(26).fill(0);
    const sCount = new Array(26).fill(0);

    // Helper to convert character to 0-25 index
    const getIndex = (char) => char.charCodeAt(0) - 97;

    // 1. Populate the target pattern frequencies and the initial window
    for (let i = 0; i < p.length; i++) {
        pCount[getIndex(p[i])]++;
        sCount[getIndex(s[i])]++;
    }

    // Helper function to compare two frequency arrays
    const isMatch = (arr1, arr2) => {
        for (let i = 0; i < 26; i++) {
            if (arr1[i] !== arr2[i]) return false;
        }
        return true;
    };

    // 2. Check the very first window
    if (isMatch(pCount, sCount)) {
        result.push(0);
    }

    // 3. Slide the window across string s
    for (let i = p.length; i < s.length; i++) {
        // Add the incoming character on the right
        sCount[getIndex(s[i])]++;

        // Remove the outgoing character on the left
        sCount[getIndex(s[i - p.length])]--;

        // Compare the updated window frequency with pattern frequency
        if (isMatch(pCount, sCount)) {
            result.push(i - p.length + 1);
        }
    }

    return result;
}