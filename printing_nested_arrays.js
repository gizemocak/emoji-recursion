function printItems(array) {
  array.forEach(emoji => {
    if (Array.isArray(emoji)) {
      printItems(emoji)
    } else {
      console.log(emoji)
    }
  })
}

const array = [
  ["😎", ["💩", "🤗"],
    [
      ["😼"]
    ], "😂"
  ]
];
printItems(array);