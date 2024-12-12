// import { Monaco } from "@monaco-editor/react";

const LANGUAGE_CONFIG = {
  javascript: {
    id: "javascript",
    label: "JavaScript",
    logoPath: "/javascript.png",
    pistonRuntime: { language: "javascript", version: "18.15.0" },
    monacoLanguage: "javascript",
    defaultCode: `const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(n => n * n);
console.log('Original numbers:', numbers);
console.log('Squared numbers:', squares);
const evenNumbers = numbers.filter(n => n % 2 === 0);
console.log('Even numbers:', evenNumbers);
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log('Sum of numbers:', sum);`,
  },
  python: {
    id: "python",
    label: "Python",
    logoPath: "/python.png",
    pistonRuntime: { language: "python", version: "3.10.0" },
    monacoLanguage: "python",
    defaultCode: `numbers = [1, 2, 3, 4, 5]
squares = [n ** 2 for n in numbers]
print(f"Original numbers: {numbers}")
print(f"Squared numbers: {squares}")
even_numbers = [n for n in numbers if n % 2 == 0]
print(f"Even numbers: {even_numbers}")
numbers_sum = sum(numbers)
print(f"Sum of numbers: {numbers_sum}")`,
  },
  c: {
    id: "c",
    label: "C",
    logoPath: "/c.png",
    pistonRuntime: { language: "c", version: "10.2.0" },
    monacoLanguage: "c",
    defaultCode: `#include <stdio.h>

int main() {
    int numbers[] = {1, 2, 3, 4, 5};
    int sum = 0;

    printf("Original numbers: ");
    for (int i = 0; i < 5; i++) {
        printf("%d ", numbers[i]);
        sum += numbers[i];
    }
    printf("\nSum of numbers: %d\n", sum);

    return 0;
}`,
  },
  cpp: {
    id: "cpp",
    label: "C++",
    logoPath: "/cpp.png",
    pistonRuntime: { language: "cpp", version: "10.2.0" },
    monacoLanguage: "cpp",
    defaultCode: `#include <iostream>
#include <vector>
#include <numeric>

int main() {
    std::vector<int> numbers = {1, 2, 3, 4, 5};
    std::vector<int> squares;
    for (int n : numbers) squares.push_back(n * n);

    std::cout << "Original numbers: ";
    for (int n : numbers) std::cout << n << " ";
    std::cout << "\nSquared numbers: ";
    for (int n : squares) std::cout << n << " ";

    int sum = std::accumulate(numbers.begin(), numbers.end(), 0);
    std::cout << "\nSum of numbers: " << sum << std::endl;

    return 0;
}`,
  },
  java: {
    id: "java",
    label: "Java",
    logoPath: "/java.png",
    pistonRuntime: { language: "java", version: "17.0.2" },
    monacoLanguage: "java",
    defaultCode: `import java.util.*;
import java.util.stream.*;

public class Main {
    public static void main(String[] args) {
        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
        List<Integer> squares = numbers.stream().map(n -> n * n).collect(Collectors.toList());

        System.out.println("Original numbers: " + numbers);
        System.out.println("Squared numbers: " + squares);

        int sum = numbers.stream().mapToInt(Integer::intValue).sum();
        System.out.println("Sum of numbers: " + sum);
    }
}`,
  },
  ruby: {
    id: "ruby",
    label: "Ruby",
    logoPath: "/ruby.png",
    pistonRuntime: { language: "ruby", version: "3.2.2" },
    monacoLanguage: "ruby",
    defaultCode: `numbers = [1, 2, 3, 4, 5]
squares = numbers.map { |n| n ** 2 }
even_numbers = numbers.select { |n| n.even? }
sum = numbers.sum

puts "Original numbers: \#{numbers}"
puts "Squared numbers: \#{squares}"
puts "Even numbers: \#{even_numbers}"
puts "Sum of numbers: \#{sum}"`,
  },
  go: {
    id: "go",
    label: "Go",
    logoPath: "/go.png",
    pistonRuntime: { language: "go", version: "1.21.0" },
    monacoLanguage: "go",
    defaultCode: `package main

import "fmt"

func main() {
    numbers := []int{1, 2, 3, 4, 5}
    squares := make([]int, len(numbers))
    for i, n := range numbers {
        squares[i] = n * n
    }

    sum := 0
    for _, n := range numbers {
        sum += n
    }

    fmt.Println("Original numbers:", numbers)
    fmt.Println("Squared numbers:", squares)
    fmt.Println("Sum of numbers:", sum)
}`,
  },
};

const THEMES = [
  { id: "vs-dark", label: "VS Dark", color: "#1e1e1e" },
  { id: "vs-light", label: "VS Light", color: "#ffffff" },
  { id: "github-dark", label: "GitHub Dark", color: "#0d1117" },
  { id: "monokai", label: "Monokai", color: "#272822" },
  { id: "solarized-dark", label: "Solarized Dark", color: "#002b36" },
  { id: "winter-is-coming", label: "Winter is Coming", color: "#011627" },
];

const THEME_DEFINITIONS = {
  "github-dark": {
    base: "vs-dark",
    inherit: true,
    rules: [
      { token: "comment", foreground: "6e7681" },
      { token: "string", foreground: "a5d6ff" },
      { token: "keyword", foreground: "ff7b72" },
      { token: "number", foreground: "79c0ff" },
      { token: "type", foreground: "ffa657" },
      { token: "class", foreground: "ffa657" },
      { token: "function", foreground: "d2a8ff" },
      { token: "variable", foreground: "ffa657" },
      { token: "operator", foreground: "ff7b72" },
    ],
    colors: {
      "editor.background": "#0d1117",
      "editor.foreground": "#c9d1d9",
      "editor.lineHighlightBackground": "#161b22",
      "editorLineNumber.foreground": "#6e7681",
      "editorIndentGuide.background": "#21262d",
      "editor.selectionBackground": "#264f78",
      "editor.inactiveSelectionBackground": "#264f7855",
    },
  },
  monokai: {
    base: "vs-dark",
    inherit: true,
    rules: [
      { token: "comment", foreground: "75715E" },
      { token: "string", foreground: "E6DB74" },
      { token: "keyword", foreground: "F92672" },
      { token: "number", foreground: "AE81FF" },
      { token: "type", foreground: "66D9EF" },
      { token: "class", foreground: "A6E22E" },
      { token: "function", foreground: "A6E22E" },
      { token: "variable", foreground: "F8F8F2" },
      { token: "operator", foreground: "F92672" },
    ],
    colors: {
      "editor.background": "#272822",
      "editor.foreground": "#F8F8F2",
      "editorLineNumber.foreground": "#75715E",
      "editor.selectionBackground": "#49483E",
      "editor.lineHighlightBackground": "#3E3D32",
      "editorCursor.foreground": "#F8F8F2",
      "editor.selectionHighlightBackground": "#49483E",
    },
  },
  "winter-is-coming": {
    base: "vs-dark",
    inherit: true,
    rules: [
      { token: "comment", foreground: "637777" },
      { token: "string", foreground: "addb67" },
      { token: "keyword", foreground: "c792ea" },
      { token: "number", foreground: "f78c6c" },
      { token: "type", foreground: "82aaff" },
      { token: "class", foreground: "ffcb8b" },
      { token: "function", foreground: "82aaff" },
      { token: "variable", foreground: "addb67" },
      { token: "operator", foreground: "c792ea" },
    ],
    colors: {
      "editor.background": "#011627",
      "editor.foreground": "#d6deeb",
      "editor.lineHighlightBackground": "#0b253a",
      "editorLineNumber.foreground": "#4b6479",
      "editor.selectionBackground": "#1d3b53",
      "editor.inactiveSelectionBackground": "#1d3b5355",
    },
  },
  "solarized-dark": {
  base: "vs-dark",
  inherit: true,
  rules: [
    { token: "comment", foreground: "586e75" },
    { token: "string", foreground: "2aa198" },
    { token: "keyword", foreground: "859900" },
    { token: "number", foreground: "b58900" },
    { token: "type", foreground: "268bd2" },
    { token: "class", foreground: "cb4b16" },
    { token: "function", foreground: "268bd2" },
    { token: "variable", foreground: "839496" },
    { token: "operator", foreground: "6c71c4" },
  ],
  colors: {
    "editor.background": "#002b36",
    "editor.foreground": "#839496",
    "editor.lineHighlightBackground": "#073642",
    "editorLineNumber.foreground": "#586e75",
    "editor.selectionBackground": "#073642",
    "editor.selectionHighlightBackground": "#073642",
    "editorCursor.foreground": "#93a1a1",
  },
},

};

const defineMonacoThemes = (monaco) => {
  Object.entries(THEME_DEFINITIONS).forEach(([themeName, themeData]) => {
    monaco.editor.defineTheme(themeName, {
      base: themeData.base,
      inherit: themeData.inherit,
      rules: themeData.rules.map((rule) => ({
        ...rule,
        foreground: rule.foreground,
      })),
      colors: themeData.colors,
    });
  });
};

export { LANGUAGE_CONFIG, THEMES, defineMonacoThemes };
