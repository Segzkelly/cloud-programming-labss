const user = { name: "Ala", tags: [] };
user.tags.push("js", "node");
console.log(user);

try {
  user = {};
} catch (e) {
  console.log("Reassign error:", e.message);
}
_