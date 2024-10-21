/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
	preset: "ts-jest",
	testEnvironment: "node",
	roots: ["./src/__tests__", "./src/e2e"],
	transform: {
		"^.+.tsx?$": "ts-jest"
	},
	testRegex: "((\\.|/)(test|spec))\\.tsx?$",
	moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"]
};
