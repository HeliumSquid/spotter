function walk(node) {
    node = node || document.body;
    if (node.nodeType == 3) {
        // List of words to replace +1 with.
        var words = ["Butts", "HISSSSSSSSSSS", "What's my name again?", "HELP! Where am I?", "You can do that with Jake Weary!", "Git lost!",
        "This is a secret message because the NSA is watching us.", "Why not Zoidberg? (V)_(@;;;;@)_(V)", "-1", "I'm watching you.",
        "Not enough jQuery.", "^C"];
        // Select a random word.
        var rand = words[Math.floor(Math.random() * words.length)];
        node.nodeValue = node.nodeValue.split('+1').join(rand);
    } else {
        var nodes = node.childNodes;
        if (nodes) {
            var i = nodes.length;
            while (i--) walk(nodes[i]);
        }
    }
}

walk();
// Or just take the escalator.
