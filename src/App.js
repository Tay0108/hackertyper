import React, {Component} from 'react';
import './App.css';


let code = `
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


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            code: "",
            counter: 0,
        };
        this.addCharacter = this.addCharacter.bind(this);
    }

    componentDidMount() {
        window.addEventListener('keypress', this.addCharacter);
    }

    addCharacter() {
        this.setState(prevState => {
            const startIndex = prevState.counter;
            const endIndex = (prevState.counter + 3) % code.length;
            
            if(endIndex < startIndex) {
                return {
                  counter: (prevState.counter + 3) % code.length,
                };
            }

            return {
                code: prevState.code + code.substring(startIndex, endIndex),
                counter: (prevState.counter + 3) % code.length,
            }
        });
    }

    render() {
        return (
            <div className="App">
          <pre>
          {this.state.code}
          </pre>
            </div>
        );
    }
}

export default App;
