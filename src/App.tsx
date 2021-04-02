import React, { useEffect, useRef, useState } from "react";
import "./App.css";

const allCode = `
public class Solution {

    public static int reverseNumber(int n) {
        int reversed = 0;

        while (n > 0) {
            reversed = reversed * 10 + n % 10;
            n = n / 10;
        }
        return reversed;
    }

    public static boolean isPalindrome(int n) {
        return n == reverseNumber(n);
    }

    public static void main(String[] args) {

        int max = 0;

        for (int i = 999; i > 99; i--) {
            for (int j = i; j > 99; j--) {
                if (isPalindrome(i * j)) {
                    if(max < i * j) {
                        max = i * j;
                    }
                }
            }
        }

        System.out.println(max);
    }
}
`;

export default function App() {
  const [code, setCode] = useState<string>("");
  const [counter, setCounter] = useState<number>(0);
  const [isCaret, setIsCaret] = useState<boolean>(false);

  const caret = "|";
  const pageEnd = useRef<HTMLDivElement>(null);

  function scrollToBottom() {
    pageEnd?.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  }

  useEffect(() => {
    window.addEventListener("keydown", addCharacter);
    setInterval(() => toggleCaret(), 500);
    scrollToBottom();

    return () => {
      window.removeEventListener("keydown", addCharacter);
    };
  }, []);

  useEffect(() => {
    const startIndex = counter;
    const endIndex = (counter + 3) % allCode.length;

    if (startIndex <= endIndex) {
      setCode((prevCode) => prevCode + allCode.substring(startIndex, endIndex));
    }

    scrollToBottom();
  }, [counter]);

  function addCharacter() {
    setCounter((prevCounter) => {
      const startIndex = prevCounter;
      const endIndex = (prevCounter + 3) % allCode.length;

      if (endIndex < startIndex) {
        return (prevCounter + 3) % allCode.length;
      }
      return (prevCounter + 3) % allCode.length;
    });
  }

  function toggleCaret() {
    setIsCaret((prevIsCaret) => !prevIsCaret);
  }

  return (
    <div className="App">
      <pre className="code">
        {
          // eslint-disable-next-line
        }
        // Start hacking:
        {code}
        {isCaret ? caret : ""}
      </pre>
      <div ref={pageEnd}> </div>
    </div>
  );
}
